import { ChangeEvent, KeyboardEvent, FocusEvent, useMemo, KeyboardEventHandler, useRef, useEffect } from "react";

export function OtpInputField({
  value,
  length,
  onChange,
}: {
  value: string;
  length: number;
  onChange: (value: string) => void;
}): JSX.Element {
  let otpInputFieldRef = useRef<HTMLDivElement>(null);
  let isDigitRegex = new RegExp(/^\d+$/);

  let valueItems: string[] = useMemo(() => {
    let valueArr: any[] = value.split('');
    let items: string[] = [];

    for (let i: number = 0; i < length;) {
      let char = valueArr[i++];
      items.push(isDigitRegex.test(char) ? char : '');
    }

    return items;

  }, [value, length]);

  useEffect(() => {
    if (otpInputFieldRef && otpInputFieldRef.current) {
      let firstInputEl = otpInputFieldRef.current.querySelector('input:first-child') as HTMLInputElement;

      if (firstInputEl) {
        firstInputEl.focus();
      }
    }
  }, [])

  function focusToNextInput(target: HTMLElement) {
    const nextInputSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextInputSibling) {
      nextInputSibling.focus();
    }
  };

  function focusToPrevInput(target: HTMLElement) {
    const nextInputSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (nextInputSibling) {
      nextInputSibling.focus();
    }
  };


  function inputOnChange(e: ChangeEvent<HTMLInputElement>, idx: number) {
    let target: EventTarget & HTMLInputElement = e.target;
    let targetValue: string = target.value.trim();
    let isDigit = isDigitRegex.test(targetValue);

    if (!isDigit && targetValue !== '') return;

    let nextInput = target.nextElementSibling as HTMLInputElement | null;

    // only delete digit if next input element has no value
    if (!isDigit && nextInput && nextInput.value !== '') {
      return;
    }

    targetValue = isDigit ? targetValue : '';

    if (targetValue.length === 1) {
      let newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isDigit) {
        return;
      }

      focusToNextInput(target)
    } else if (targetValue.length === length) {
      onChange(targetValue);
      target.blur();
    }
  }

  function inputOnKeyDown(e: KeyboardEvent<HTMLInputElement>, idx: number) {
    let { key } = e;
    let target = e.target as HTMLInputElement;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    let targetValue: string = target.value;

    target.setSelectionRange(0, targetValue.length);

    if (key !== 'Backspace' || target.value !== '') {
      return;
    }

    if (key === 'Backspace') {
      if (value.length === idx - 1) {
        onChange(value.substring(0, idx));
      }

    }

    focusToPrevInput(target);
  }

  function inputOnFocus(e: FocusEvent<HTMLInputElement>) {
    const { target } = e;
    let prevInput = target.previousElementSibling as HTMLInputElement | null;

    if (prevInput && prevInput.value === '') {
      return prevInput.focus();
    }

    target.setSelectionRange(0, target.value.length);
  }

  return (
    <div ref={otpInputFieldRef}
      className="flex max-w-[360px] gap-x-[10px]">
      {
        valueItems.map((digit: string, idx: number) => {
          return (
            <input key={`${digit}-${idx}`}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={length}
              className="w-full h-[60px] border border-[#ccc] border-solid rounded-lg text-center font-bold text-base"
              value={digit}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                inputOnKeyDown(e, idx);
              }}
              onFocus={inputOnFocus}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                inputOnChange(e, idx)
              }} />
          )
        })
      }
    </div>
  )
}
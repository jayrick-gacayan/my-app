import { useTimeout } from "@/hooks/use_timeout";
import { Icon } from '@iconify/react';
import { useEffect, useRef } from "react";

export function Toast({
  type,
  message,
  duration = 3,
  position,
  onClose,
}: {
  type: string;
  message: string;
  position: string;
  onClose: () => void;
  duration?: number;
}): JSX.Element {
  const toastRef = useRef<HTMLDivElement>(null);

  let toastIcons = {
    success: <Icon icon="heroicons:check" className={`w-6 h-6`} />,
    danger: <Icon icon="heroicons:x-circle-solid" className={`w-6 h-6`} />,
    warning: <Icon icon="heroicons:exclamation-triangle" className={`w-6 h-6`} />,
    info: < Icon icon="heroicons:information-circle" className={`w-6 h-6`} />
  }

  let colors = {
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
  }

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.classList.add('animate-slide-in')
    }
  }, []);

  useTimeout(() => {
    if (toastRef.current) {
      toastRef.current.classList.remove('animate-slide-in');
      toastRef.current.classList.add('animate-slide-out')
      setTimeout(onClose, 400);
    }
  }, duration * 1000);

  return (
    <div ref={toastRef} className={`w-80 rounded h-auto text-white ${colors[type as keyof typeof colors]} hover:bg-opacity-80`}>
      <div className={`flex items-center gap-1 p-2`}>
        <div className="w-auto flex-none">
          {toastIcons[type as keyof typeof toastIcons]}
        </div>
        <div className="flex-1">
          {message}
        </div>
        <div className="flex-none w-auto">
          <Icon icon="heroicons:x-mark" className='w-8 h-8 rounded-full p-2 text-slate-600' onClick={onClose} />
        </div>
      </div>
    </div>
  )
}
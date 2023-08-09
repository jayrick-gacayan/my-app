import { useOutsideClick } from "@/hooks/use_outside_click";
import { ReactNode, RefObject, forwardRef, useEffect } from "react";

export const ModalWrapperComponent =
  forwardRef(({
    show,
    onClose,
    children,
  }: {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
  }, ref: any) => {
    useEffect(() => {
      if (ref && ref.current) {
        if (show) {
          ref.current.classList.remove('animate-fade-out');
          ref.current.classList.add('animate-fade-in');
        }
      }
    }, [show])

    useOutsideClick(ref, () => {
      onClose();
    })

    return show ? (
      <div ref={ref}
        className='fixed h-screen w-screen top-0 left-0 flex justify-center items-center z-[9999] backdrop-blur'>
        {children}
      </div>
    ) : null;
  });


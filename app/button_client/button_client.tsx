'use client';

import { ModalWrapperComponent } from "@/components/modal_wrapper";
import { ToastContext } from "@/contexts/toast_context";
import { useModal } from "@/hooks/use_modal";
import { useOutsideClick } from "@/hooks/use_outside_click";
import { useContext, useRef } from "react";

export function CreateToastButton() {
  const modalContentRef = useRef(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { isShowing, setIsShowing } = useModal();
  const { toastMessage } = useContext(ToastContext);

  useOutsideClick(modalContentRef, () => {
    onClose();
  });

  function onClose() {
    if (modalRef.current) {
      modalRef.current.classList.remove('animate-fade-in');
      modalRef.current.classList.add('animate-fade-out');
      setTimeout(() => { setIsShowing(false); }, 400)
    }
  }
  return <>
    <button className="bg-slate-500 p-2"
      onClick={() => {
        setIsShowing(!isShowing);
        // let alertActions = ['success', 'warning', 'info', 'danger']
        // let randomIndex = Math.floor(Math.random() * alertActions.length);
        // let alertAction = alertActions[Math.floor(Math.random() * alertActions.length)]
        // toastMessage(alertAction, `${alertAction} Message`)
      }}>
      Click me
    </button>
    <ModalWrapperComponent
      ref={modalRef}
      show={isShowing}
      onClose={onClose}>
      <div className="bg-white w-80 rounded border border-slate-600 p-2 h-48 shadow-slate-600"
        ref={modalContentRef}>
        <div>
          I am here
          <button className="bg-green-500 text-white p-2" onClick={onClose}>Click Me</button>
        </div>
      </div>
    </ModalWrapperComponent>
  </>
}
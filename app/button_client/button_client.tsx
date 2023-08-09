'use client';

import { ModalWrapperComponent } from "@/components/modal_wrapper";
import { ToastContext } from "@/contexts/toast_context";
import { useModal } from "@/hooks/use_modal";
import { useContext, useRef } from "react";

export function CreateToastButton() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isShowing, setIsShowing } = useModal();
  const { toastMessage } = useContext(ToastContext);

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
      <div className="bg-white w-80 rounded border border-slate-600 p-2">
        <div>
          I am here
          <button className="bg-green-500 text-white p-2" onClick={onClose}>Click Me</button>
        </div>
      </div>
    </ModalWrapperComponent>
  </>
}
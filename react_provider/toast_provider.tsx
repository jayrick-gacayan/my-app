import { ToastContext } from "@/contexts/toast_context";
import { ReactNode, useContext, useState } from "react";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<{ id: number; type: string; message: string }[]>(useContext(ToastContext).toasts);


  function removeToast(toastId: number) {
    setToasts(toasts.filter((toast) => { return toast.id === toastId }))
  }

  function toastMessage(type: string, message: string) {
    let id = 0
    if (toasts.length === 0) {
      id = 1
    }
    else {
      id = toasts[toasts.length - 1].id + 1;
    }

    setToasts([...toasts, { id: id, type: type, message: message }]);
  }

  return (<ToastContext.Provider value={{ toasts, removeToast, toastMessage }}>
    {children}
  </ToastContext.Provider>)
}
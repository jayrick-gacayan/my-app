'use client';

import { useContext } from "react"
import { Toast } from "./toast_component"
import { ToastContext } from "@/contexts/toast_context"

export function ToastsContainer() {
  const { removeToast, toasts } = useContext(ToastContext);

  return (
    <div className="fixed top-0 pt-4 flex flex-col-reverse gap-y-4 z-[9999] right-4">
      {
        toasts.map((toast) => {
          return (
            <Toast key={`${toast.type}-${toast.id}`}
              type={toast.type}
              message={toast.message}
              position={""}
              onClose={() => {
                removeToast(toast.id);
              }} />
          )
        })
      }
    </div>
  )
}
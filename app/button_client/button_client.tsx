'use client';

import { ToastContext } from "@/contexts/toast_context";
import { useContext } from "react";

export function CreateToastButton() {
  const { toastMessage } = useContext(ToastContext);

  return <button className="bg-slate-500 p-2"
    onClick={() => {
      let alertActions = ['success', 'warning', 'info', 'danger']
      let randomIndex = Math.floor(Math.random() * alertActions.length);
      let alertAction = alertActions[Math.floor(Math.random() * alertActions.length)]
      toastMessage(alertAction, `${alertAction} Message`)
    }}>
    Click me
  </button>
}
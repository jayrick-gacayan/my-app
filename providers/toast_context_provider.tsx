'use client';

import { ToastContext } from "@/contexts/toast_context";
import { toastReducer } from "@/reducers/toast_reducer";
import { ReactNode, useReducer } from "react";

export function ToastContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: []
  });

  return (
    <ToastContext.Provider value={{
      toastMessage: (type: any, message: any) => {
        dispatch({
          type: 'ADD_TOAST',
          payload: {
            id: Date.now(),
            message,
            type
          }
        })
      },
      removeToast: (id: number) => {
        dispatch({ type: 'DELETE_TOAST', payload: id })
      },
      toasts: state.toasts
    }}>
      {children}
    </ToastContext.Provider>
  )
}
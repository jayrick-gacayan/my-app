'use client';

import { createContext } from "react";

export const ToastContext = createContext<{
  toastMessage: (type: string, message: string) => void;
  removeToast: (id: number) => void;
  toasts: { id: number; type: string; message: string }[];
}>({
  toastMessage: (type: any, message: any) => { },
  removeToast: (id: number) => {

  },
  toasts: [],
});

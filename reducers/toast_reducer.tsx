export function toastReducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_TOAST': return { ...state, toasts: [...state.toasts, action.payload] }
    case 'DELETE_TOAST': return { ...state, toasts: state.toasts.filter((toast: { id: any }) => toast.id !== action.payload) }
  }
}
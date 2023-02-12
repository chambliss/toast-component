import React from "react";
import useKeyDown from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const DEFAULT_TOASTS = [
  {
    message: "Example notice toast",
    variant: "notice",
    id: Math.random().toString(),
  },
  {
    message: "Example error toast",
    variant: "error",
    id: Math.random().toString(),
  },
];

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState(DEFAULT_TOASTS);

  const createToast = (message, variant) => {
    return {
      message,
      variant,
      id: Math.random().toString(),
    };
  };
  const dismissToast = React.useCallback(
    (toastId) => {
      setToasts([
        ...toasts.filter((item) => {
          return item.id !== toastId;
        }),
      ]);
    },
    [toasts, setToasts]
  );
  const useDismissOnEsc = () => useKeyDown(() => {
    if (toasts.length) {
      setToasts([]);
    }
  }, 'Escape')

  const value = {
    createToast,
    toasts,
    setToasts,
    dismissToast,
    useDismissOnEsc,
    toastVariants: VARIANT_OPTIONS,
  };
  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;

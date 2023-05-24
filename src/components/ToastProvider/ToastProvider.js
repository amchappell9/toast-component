import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey.js";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(React.useCallback(() => setToasts([]), []));
 

  function addNewToast({ variant, message }) {
    setToasts([...toasts, { variant, message, id: crypto.randomUUID() }]);
  }

  function dismissToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addNewToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

import React, { useContext } from "react";

import styles from "./ToastPlayground.module.css";
import ToastPlaygroundForm from "../ToastPlaygroundForm/ToastPlaygroundForm";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";


function ToastPlayground() {
  const { toasts, addNewToast, dismissToast } = useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} dismissToast={dismissToast} />

      <ToastPlaygroundForm onSubmit={addNewToast} />
    </div>
  );
}

export default ToastPlayground;

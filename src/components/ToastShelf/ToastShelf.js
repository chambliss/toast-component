import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  console.log(toasts);

  return (
    <ol className={styles.wrapper} role="region" aria-live="assertive" aria-label="Notification">
      {toasts.map((toast) => {
        const { variant, id, message } = toast;
        return (
          <Toast variant={variant} id={id} key={id}>
            {message}
          </Toast>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);

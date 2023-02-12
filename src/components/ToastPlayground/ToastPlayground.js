import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider/ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const { toasts, setToasts, createToast, toastVariants, useDismissOnEsc } =
    React.useContext(ToastContext);
  const [message, setMessage] = React.useState("");
  const [currentVariant, setCurrentVariant] = React.useState("notice");
  // allow resetting toasts with Esc
  useDismissOnEsc()

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setToasts([...toasts, createToast(message, currentVariant)]);
          setMessage("");
          setCurrentVariant("notice");
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.messageInput}
                autoFocus
                spellCheck
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {toastVariants.map((variant) => {
                return (
                  <label htmlFor={`variant-${variant}`} key={variant}>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={currentVariant === variant ? true : false}
                      onChange={(e) => setCurrentVariant(e.target.value)}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

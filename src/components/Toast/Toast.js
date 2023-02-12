import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import { ToastContext } from "../ToastProvider/ToastProvider";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, id, children }) {
  const variantClass = styles[variant];
  const VariantIcon = ICONS_BY_VARIANT[variant];
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${variantClass}`}>
      <div className={styles.iconContainer}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant}</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => dismissToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/components/Modal.module.scss";
import Icon from "./Icon";

export default function Modal({ show, onClose, children }) {
  const [browser, setBrowser] = useState(false);
  useEffect(() => {
    setBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };
  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.close} onClick={handleClose}>
            <Icon name="close" size="14" />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;
  if (browser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

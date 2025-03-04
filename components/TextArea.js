import React, { useState } from "react";
import cn from "classnames";
import styles from "../styles/components/TextArea.module.scss";

const TextArea = ({ className, label, ...props }) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <textarea className={styles.textarea} {...props} />
      </div>
    </div>
  );
};

export default TextArea;

import React from "react";
import { InputText } from "primereact/inputtext";

const InputItem = ({ name, label, placeholder, classes, styles }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
      >
        {label}
      </label>
      <InputText
        id={name}
        name={name}
        aria-describedby={label}
        className={`p-d-block ${styles.inputtext} ${classes}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputItem;

import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

const SliderInput = ({ title, name, label, styles, value, handleChange }) => {
  return (
    <div className={styles.sliderdiv}>
      <div>
        <h3 id={name} name={name} className={styles.h3}>
          {title}
        </h3>
        <div><small>{label}</small></div>
      </div>
      <div>
        <InputSwitch checked={value} onChange={(e) => handleChange(e.value)} />
      </div>
    </div>
  );
};

export default SliderInput;

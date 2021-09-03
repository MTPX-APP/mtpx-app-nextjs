import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

import styles from "../styles/components/CustomSelect.module.scss";

function CustomSelect({ value, options, label, placeholder, onChange }) {
  return (
    <Dropdown
      value={value}
      options={options}
      onChange={onChange}
      optionLabel={label}
      placeholder={placeholder}
      className={styles.customSelect}
      dropdownIcon={"pi pi-angle-down"}
    />
  );
}

export default CustomSelect;

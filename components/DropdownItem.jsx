import React from "react";

import { Dropdown } from "primereact/dropdown";

const DropdownItem = ({ name, label, placeholder, styles }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
      >
        {label}
      </label>
      <Dropdown
        id={name}
        optionLabel={name}
        placeholder={placeholder}
        className={styles.dropdown}
        dropdownIcon={"pi pi-angle-down"}
      />
    </div>
  );
};

export default DropdownItem;

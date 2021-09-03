import React, { useState } from "react";

import { Checkbox } from "primereact/checkbox";

import { categories } from "../core/Constants";

const Categories = ({ styles }) => {
  return (
    <>
      <h3 id="category" name="category" className={styles.h3}>
        Category
      </h3>
      <label htmlFor="collection" className={`p-d-block ${styles.sliderlabel}`}>
        Select the category this belongs to
      </label>
      <div className={styles.checkboxdiv}>
        {categories.map((el, idx) => {
          return (
            <div key={idx}>
              <Checkbox inputId={idx} value={el}></Checkbox>
              <label htmlFor={idx}>{el}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;

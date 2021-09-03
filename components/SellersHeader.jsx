import Label from "./Label";
import CustomSelect from "./CustomSelect";
import React, {useState} from "react";
import DropdownPopular from "./DropdownPopular";

import styles from "../styles/components/SellerHeader.module.scss";

const SellerHeader = () => {

  const directionOptions = ["Sellers", "Buyers"];
  const [direction, setDirection] = useState(directionOptions[0]);

  return (
    <div className={styles.headerContainer}>
      <div>
        <h3>Popular</h3>
        <DropdownPopular
          className={styles.dropdown}
          value={direction}
          setValue={setDirection}
          options={directionOptions}
        />        
      </div>
    </div>
  );
};

export default SellerHeader;

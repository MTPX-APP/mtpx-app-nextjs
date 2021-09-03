import React from "react";
import cn from "classnames";

import styles from "../styles/components/Burn.module.scss";
import styles2 from "../styles/components/Button.module.scss";

const Burn = ({ className }) => {
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Burn token</div>
      <div className={styles.text}>
        Are you sure to burn this token? This action cannot be undone. Token
        will be transfered to zero address
      </div>
      
      <div className={styles.btns}>
        <button className={cn("button", styles.button, styles.btnPrimary)}>Continue</button>
        <button className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
      </div> 
    </div>
  );
};

export default Burn;

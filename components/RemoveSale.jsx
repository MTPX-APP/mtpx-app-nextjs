import React from "react";
import cn from "classnames";
import styles from "../styles/components/RemoveSale.module.scss";
import styles2 from "../styles/components/Button.module.scss";

const RemoveSale = ({ className }) => {
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Remove from sale</div>
      <div className={styles.text}>
        Do you really want to remove your item from sale? You can put it on sale
        anytime
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button, styles.btnPrimary)}>Remove now</button>
        <button className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
      </div> 
    </div>
  );
};

export default RemoveSale;

import React from "react";
import cn from "classnames";
import styles from "../styles/components/Connect.module.scss";
import styles2 from "../styles/components/Button.module.scss";
import Icon from "./Icon.js";

const Connect = ({ className }) => {
  return (
    <div className={cn(className, styles.connect)}>
      <div className={styles.icon}>
        <Icon name="wallet" size="24" />
      </div>
      <div className={styles.info}>
        You need to connect your wallet first to sign messages and send
        transaction to Ethereum network. You can learn more how this works here.
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button, styles.btnPrimary)}>Connect wallet</button>
        <button className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
      </div>      
    </div>
  );
};

export default Connect;

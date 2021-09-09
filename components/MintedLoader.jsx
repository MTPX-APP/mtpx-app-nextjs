import React from "react";
import cn from "classnames";
import styles from "../styles/components/MintedLoader.module.scss";

const MintedLoader = ({ className }) => {
  return (
    <div className={cn(styles.loaderWrapper, className)}>
        <div className={styles.loader}>
            <div className={styles.load}></div>
            <div className={styles.line}></div>        
        </div>
        <div className={styles.info}>loading...</div>
    </div>
  )

};

export default MintedLoader;

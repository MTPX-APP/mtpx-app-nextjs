import React from "react";
import Image from "next/image"; 
import cn from "classnames";
import Link from "next/link";
import { walletItem } from "../core/Constants";
import styles from "../styles/components/Connect.module.scss";

const Connect = ({ className, onClose }) => {
  
  return (
    <div className={cn(className, styles.connect)}>
      <div className={styles.connectIcons}>
        {walletItem.map((item, index) => {
          return (
          <div key={index} className={styles.item}>
            <Image 
                width={80} 
                height={80} 
                src={item.image} 
                alt={item.name} 
                className={styles.mark}
                objectFit="cover"
              />
          </div>
          )
        })}
      </div>
      <div className={styles.info}>
        You need to connect your wallet first to sign messages and send
        transaction to Ethereum network. You can learn more how this works here.
      </div>
      <div className={styles.btns}>
        <Link href="/wallet" passHref>
          <button className={cn("button", styles.button, styles.btnPrimary)}>Connect wallet</button>
        </Link>
        <button className={cn("button-stroke", styles.button, styles.btnStroke)} onClick={onClose}>Cancel</button>
      </div>      
    </div>
  );
};

export default Connect;

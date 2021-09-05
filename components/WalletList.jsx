import { useState } from "react";
import Image from "next/image"; 
import styles from "../styles/components/WalletList.module.scss";

const WalletList = ({ items }) => {
  const [walletValue, setWalletValue] = useState("");

  const handleWallet = (item) => {
    setWalletValue(item);
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={
              walletValue === item.name
                ? `${styles.activeWallet} ${styles.walletList}`
                : `${styles.walletList}`
            }
            onClick={() => handleWallet(item.name)}
          >
            {walletValue === item.name ? (
              <Image 
                width={80} 
                height={80} 
                src={item.image} 
                alt={item.name} 
                className={styles.mark}
                objectFit="cover"
              />
            ) : (
              <Image 
                width={80} 
                height={80} 
                src={item.image} 
                alt={item.name} 
                className={styles.mark}
                objectFit="cover"
              />
            )}

            <p className="p-d-flex p-jc-between p-ai-center">
              {item.name}

              {walletValue === item.name ? (
                <span className={styles.arrowRight}>
                  <i className="pi pi-arrow-right"></i>
                </span>
              ) : null}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WalletList;

import { useState } from "react";
import Image from "next/image"; 
import styles from "../styles/components/WalletList.module.scss";

const WalletList = ({ items }) => {
  const [walletValue, setWalletValue] = useState("Metamask");

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

            <div className={styles.item}>
              <p>
                <span>{item.name}</span>

                {item.recommended && (
                  <span className={styles.tag}>Recommended</span>
                )}
              </p>
              {walletValue === item.name ? (
                <span className={styles.arrowRight}>
                  <i className="pi pi-arrow-right"></i>
                </span>
              ) : null}
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default WalletList;

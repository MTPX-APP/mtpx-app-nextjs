import { useState } from "react";
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
              <i className={`pi pi-check ${styles.activeIcon}`}></i>
            ) : (
              <i
                className={`pi pi-wallet ${styles.walletIcon}`}
                style={{ backgroundColor: `${item.color}` }}
              ></i>
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

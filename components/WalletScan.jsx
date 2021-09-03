import styles from "../styles/components/WalletScan.module.scss";
import CustomButton from "./CustomButton";

const WalletScan = () => {
  return (
    <div className={styles.container}>
      <h3>Scan to connect</h3>
      <p>Powered by UI8.Wallet</p>
      <div className={styles.imageContainer}></div>
      <CustomButton text="Don't have a wallet app?" />
    </div>
  );
};

export default WalletScan;

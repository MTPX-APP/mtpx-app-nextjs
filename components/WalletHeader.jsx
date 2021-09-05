import styles from "../styles/components/WalletHeader.module.scss";

const WalletHeader = () => {
  return (
    <div>
      <div className={`${styles.walletHeading}`}>
        <h2>Connect your wallet</h2>
        <p>
          Connect with one of available wallet providers or create a new wallet. What is a wallet?
        </p>
      </div>
      
    </div>
  );
};

export default WalletHeader;

import { Divider } from "primereact/divider";
import styles from "../styles/components/WalletHeader.module.scss";

const WalletHeader = () => {
  return (
    <div>
      <div className={`p-d-flex p-ai-center ${styles.walletHeading}`}>
        <h2>Connect your wallet</h2>
      </div>
      <Divider />
    </div>
  );
};

export default WalletHeader;

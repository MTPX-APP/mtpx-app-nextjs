import {
  WalletHeader,
  WalletList,
  WalletService,
  WalletImage,
  WalletScan,
} from "../components";
import { walletItem } from "../core/Constants";
import styles from "../styles/pages/Wallet.module.scss";

const Wallet = () => {
  return (
    <div className={styles.container}>
      <WalletHeader />
      <div className={styles.walletContainer}>
        <WalletList items={walletItem} />
        <WalletService />
        {/* <WalletImage /> */}
        {/* <WalletScan /> */}
      </div>
    </div>
  );
};

export default Wallet;

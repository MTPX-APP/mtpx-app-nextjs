import {
  WalletHeader,
  WalletList,
  WalletService,
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
      </div>
    </div>
  );
};

export default Wallet;

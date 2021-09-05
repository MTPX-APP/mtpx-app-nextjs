import {
  WalletHeader,
  WalletList,
  WalletService,
} from "../components";
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { walletItem } from "../core/Constants";
import styles from "../styles/pages/Wallet.module.scss";

const Wallet = () => {
  // UseTranslation
  const { t } = useTranslation('wallet');

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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','header','wallet']),
  },
})

export default Wallet;

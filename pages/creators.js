import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MintedPixLoader from "../components/MintedLoader";

import {
  PopularSellers,
  SearchCreators,
  Followers,
  Banner,
} from "../components";
import styles from "../styles/pages/Creators.module.scss";

import { Users } from "../core/Constants";

const Creators = () => {
  return (
    <main>
      <PopularSellers />
      <div className={styles.container}>
        <h3>Creators</h3>
        <div className={styles.creatorsContainer}>
          <SearchCreators />
          <Followers Users={Users} />
        </div>
      </div>
      {/* <div className={styles.loadmoreContainer}>
        <div className={styles.loadmore}>
          <p>Load more</p>
          <i className="pi pi-spin pi-spinner" style={{'fontSize': '1em'}}></i>
        </div>
      </div> */}

      <div className={styles.loader}><MintedPixLoader /></div>
      <Banner />
      
    </main>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header']),
  },
})

export default Creators;

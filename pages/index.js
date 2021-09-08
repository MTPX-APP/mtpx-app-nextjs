import { useState } from "react";
import Head from "next/head";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Banner, ArtInfoView, Discover, DiscoverBanner, FeatureBanner } from "../components";
import { imageAssets } from "../core/Constants";

import styles from "../styles/pages/index.module.scss";

const dropdownValue = [
  { label: "Popular", value: "popular" },
  { label: "Challanges", value: "challanges" },
  { label: "New", value: "new" },
  { label: "Oldest", value: "oldest" },
];

const Home = () => {
  const [ authenticate, setAuthenticate ] = useState(false);
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>{t('home')}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="/masked-icon.png" rel="mask-icon" color="#005CFF" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon-precomposed" />
        <link rel="icon" href="/favicon.ico" />        
      </Head>

      <main>
        { authenticate ? <FeatureBanner /> : <DiscoverBanner />}
        <Discover />
        <Banner />
      </main>
    </div>
  );
}

function Featured(props) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.heroContainer}`}>
        <div
          className={`p-d-flex p-jc-between p-ai-center ${styles.featuredText}`}
        >
          <h3 className={"p-text-left p-text-bold p-mb-5"}>Featured</h3>
          <div className={"p-d-flex"}>
            <i className="pi pi-arrow-left p-mr-3"></i>
            <i className="pi pi-arrow-right p-ml-3"></i>
          </div>
        </div>
        <div
          className={`p-d-flex p-jc-center p-jc-sm-between p-ai-center p-flex-wrap  ${styles.featuredArt}`}
        >
          <ArtInfoView
            artName={"Amazing Art"}
            price={"2.5 ETH"}
            quantity={"3 left"}
            userImage={imageAssets.userImage}
            userName={"E Cole."}
            burnPrice={"0.03 ETH"}
            likes={405}
            navigation={true}
          />
          <ArtInfoView
            artName={"Amazing Art"}
            price={"2.5 ETH"}
            quantity={"3 left"}
            userImage={imageAssets.userImage}
            userName={"E Cole."}
            burnPrice={"0.03 ETH"}
            likes={405}
            navigation={true}
          />
          <ArtInfoView
            artName={"Amazing Art"}
            price={"2.5 ETH"}
            quantity={"3 left"}
            userImage={imageAssets.userImage}
            userName={"E Cole."}
            burnPrice={"0.03 ETH"}
            likes={405}
            navigation={true}
          />
          <ArtInfoView
            artName={"Amazing Art"}
            price={"2.5 ETH"}
            quantity={"3 left"}
            userImage={imageAssets.userImage}
            userName={"E Cole."}
            burnPrice={"0.03 ETH"}
            likes={405}
            navigation={true}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','header','discoverBanner']),
  },
})

export default Home;

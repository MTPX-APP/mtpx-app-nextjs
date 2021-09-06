import React, { useState } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArtDetailsContent, ArtDetailsImage } from "../components";
import ArtDetailsHeader from "../components/ArtDetatailsHeader";
import styles from "../styles/pages/ArtDetails.module.scss";

const ArtDetails = () => {
  const [isActive, setActive] = useState(false);

  const handleExpandView = () => {
    setActive(!isActive);
  }

  return (
    <>
      <ArtDetailsHeader
        backLink={`/`}
        backLinkName={`Back`}
      />
      <div className={`${styles.container} ${isActive ? styles.expandView : ''}`}>
        <ArtDetailsImage parentStyles={styles} expandIsActive={isActive} handleExpandView={handleExpandView} />
        <div className={`${styles.innerContainer}`}>
          <ArtDetailsContent parentStyles={styles}/>
        </div>
      </div>
    </>
  );
};


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header']),
  },
})

export default ArtDetails;

import React, { useState } from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArtDetailsContent, ArtDetailsImage } from "../components";
import HeaderBreadCrumbs from "../components/HeaderBreadcrumbs";
import styles from "../styles/pages/ArtDetails.module.scss";

const ArtDetails = () => {
  const [isActive, setActive] = useState(false);
  const handleExpandView = () => {
    setActive(!isActive);
  }

  return (
    <>
    <HeaderBreadCrumbs
        isHistoryBack={true}
        backLinkName={`Back`}
        breadcrumbBackName={`Discover`}
        breadcrumbCurrentPageName={`Details`}
      />

      <div className={`${styles.container} ${isActive ? styles.expandView : ''}`}>
        <ArtDetailsImage parentStyles={styles} expandIsActive={isActive} handleExpandView={handleExpandView}/>
        <ArtDetailsContent parentStyles={styles}/>
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

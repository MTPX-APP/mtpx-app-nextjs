import React, { useState, useEffect } from "react";
import TabHeader from "./TabHeader";
import { useRouter } from 'next/router'
import { Tag } from 'primereact/tag';
import { artDetailsLinks, imageAssets } from "../core/Constants";
import { Colors } from "../core/Constants";
import Link from "next/link";
import PriceTag from "./PriceTag";
import ArtPurchase from "./ArtPurchase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from "../styles/components/ArtDetailsContent.module.scss";
import { ArtDetailViewType } from "../core/Enums/ArtDetailsViewType.enum";
import Current from "./artDetails/Current";
import Owners from "./artDetails/Owners";
import History from "./artDetails/History";
import Bids from "./artDetails/Bids";

config.autoAddCss = false;

const ArtDetailsContent = ({parentStyles}) => {
  const router = useRouter();
  
  return (
    <div className={`${styles.contentContainer} ${parentStyles.expandViewContentContainer}`}>
      <div className={`${styles.container} ${parentStyles.expandViewContentInfo} `}>
        <h3 className={styles.heading}>The amazing art</h3>
        <div className={`p-d-flex p-ai-center ${styles.priceTag}`}>
          <PriceTag color={Colors.secondaryGreen} value="2.5 ETH" />
          <PriceTag
            color={Colors.lightGrey}
            value="$4,422.87"
            borderColor={Colors.lighterGrey}
          />
          <p>10 left</p>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, inventore.
          </p>
          
          <h4 className={styles.contentHeader}>TAGS</h4>
          <div className={styles.tagLinks}>
            <Link href="/search/fanarts" passHref><a><Tag value="fanart"></Tag></a></Link> 
            <Link href="/search/manga" passHref><a><Tag value="manga"></Tag></a></Link>
            <Link href="/search/illustration" passHref><a><Tag value="illustration"></Tag></a></Link>
            <Link href="/search/design" passHref><a><Tag value="design"></Tag></a></Link>            
          </div>

          <div className={styles.challengeWrapper}>
            <div className={styles.challenge}>
              <p>Challenge</p>
              <div className={styles.info}>
                <strong>Olympic Athlete</strong>
                <p>Create a minted art of a Olympic Athlete Lorem ipsum dolor...</p>
              </div>
            </div>
            <div className={styles.place}>
              <p>
                <FontAwesomeIcon
                icon={faMedal}
                className={styles.challengeIcon}/>
                Place
              </p>
              <span>42</span>              
            </div>
          </div>
          
          <ArtPurchase />
         
        </div>
        
      </div>
      
      <div className={`${parentStyles.expandViewContentPlaceBid} `}>
        <div className={styles.tabContainer}>
          <TabHeader links={artDetailsLinks} />
        </div>
        <div>
          { getTabContent(router.query.tab) }
        </div>
      </div>
    </div>
  );
};

const getTabContent = (currentTab) => {
  
  switch (currentTab) {
    case ArtDetailViewType.Current:
      return <Current />
    case ArtDetailViewType.Owners:
        return <Owners />  
    case ArtDetailViewType.History:
        return <History />  
    case ArtDetailViewType.Bids:
        return <Bids />  
    default:
      return <Current/>
  }
}

export default ArtDetailsContent;

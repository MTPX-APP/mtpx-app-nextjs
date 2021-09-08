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
import { faMedal, faLock } from "@fortawesome/free-solid-svg-icons";
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
        {/* <div className={`p-d-flex p-ai-center ${styles.priceTag}`}>
          <PriceTag color={Colors.lightBlue} value="2.5 ETH" />
          <PriceTag
            color={Colors.lightGrey}
            value="$4,422.87"
            borderColor={Colors.lighterGrey}
          />
          <p>5/10 left</p>
        </div> */}
        <ArtPurchase />
        <div className={styles.content}>
          <h4 className={styles.contentHeader}>DESCRIPTION</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur, inventore.
          </p>

          <div className={styles.propertyWrapper}>
            <div className={styles.column}>
              <h4 className={styles.contentHeader}>SIZE</h4>
              <p>
                1000x1000 
              </p>
            </div>
            <div className={styles.column}>
              <h4 className={styles.contentHeader}>PROPERTIES</h4>
              <p>
                Spacesuit
              </p>
            </div>
          </div>
          
          <h4 className={styles.contentHeader}>CATEGORY</h4>
          <div className={styles.tagLinks}>
            <Link href="/search" passHref><a><Tag value="Anime"></Tag></a></Link> 
            <Link href="/search" passHref><a><Tag value="Art"></Tag></a></Link>
          </div>
          
          <h4 className={styles.contentHeader}>TAGS</h4>
          <div className={styles.tagLinks}>
            <Link href="/search/fanarts" passHref><a><Tag value="fanart"></Tag></a></Link> 
            <Link href="/search/manga" passHref><a><Tag value="manga"></Tag></a></Link>
            <Link href="/search/illustration" passHref><a><Tag value="illustration"></Tag></a></Link>
            <Link href="/search/design" passHref><a><Tag value="design"></Tag></a></Link>            
          </div>

         

          <h4 className={`${styles.contentHeader} ${styles.unlockableContent}`}>
              <FontAwesomeIcon
                icon={faLock}
                className={styles.lockIcon}/>
                UNLOCKABLE
              </h4>
          <p className={styles.contentInfo}>This art is unlockable for accessibility upon purchase</p>

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

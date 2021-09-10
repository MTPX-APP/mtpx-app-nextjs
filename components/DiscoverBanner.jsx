import React, { useState } from "react";
import { useTranslation } from 'next-i18next'
import { Colors, imageAssets } from "../core/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHeart, faEye, faMedal  } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'

import styles from "../styles/components/DiscoverBanner.module.scss";
import Helpers from '../core/Utils/Helpers';
import Image from "next/image";
import Link from "next/link";
import Avatar from "./Avatar";
import AuctionCard from "./AuctionCard";
import CustomButton from "./CustomButton";
import Modal from "../components/Modal";
import Connect from "./Connect";

import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const DiscoverBanner = () => {
  const { t } = useTranslation('discoverBanner');
  const [showLike, setShowLike]  = useState(false);
  const [showFadeOut, setShowFadeOut]  = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const dblClick = Helpers.useSingleAndDoubleClick(function() {
    // Initial Click
  }, function() {
    setShowLike(true);
    setTimeout(() => {
      setShowFadeOut(true);
      setTimeout(() => { 
        setShowLike(false);
        setShowFadeOut(false);
      }, 1000);
    }, 1000);
  });

  return (
    <React.Fragment>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Connect onClose={() => setShowModal(false)} />
      </Modal>
      <div className={styles.wrapper}>
        <div className={styles.wrapperCurved}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>{t('heroTitle')}</h1>
            <p>
              {t('heroTagline')}              
            </p>
            <div className={styles.btnContainer}>
              <Link href="/wallet">
                <a className={styles.btnBorder}>Connect Wallet</a>
              </Link>
              <Link href="/faq">
                <a>
                  Learn how it works <i className="pi pi-angle-right" />
                </a>
              </Link>
            </div>
          </div>

          <div className={styles.imgBidContainer}>
            <div className={styles.imageContainer} >
              <div className={styles.likeDoubleClick} onClick={dblClick}>
              { showLike &&
                <FontAwesomeIcon
                    icon={faHeart}
                    size="sm"
                    className={`${styles.likeIcon} ${showFadeOut && styles.fadeOut}`}
                    />
                }
              </div>
              <Image
                src={imageAssets.SamepleImage7}
                width={320}
                height={520}
                layout="responsive"
                objectFit="cover"
                className={styles.artImage}
                alt="Art Image"
                placeholder="blur"
              />
            </div>

            <div className={styles.creatorInfo}>
              <h1>Marco carrillo</h1>
              <div className={styles.avatarContainer}>
                <div
                  className={`p-d-flex p-ai-center p-mr-5  ${styles.pillContainer}`}
                >
                  <Avatar src={imageAssets.profilepic} width={40} height={40} isVerified={true} />
                  <div>
                    <p>Creator</p>
                    <p>Enrico Cole</p>
                  </div>
                </div>
                <div className={`p-d-flex p-ai-center ${styles.pillContainer}`}>
                  <div className={styles.instantPrice}>
                    <p>Buy now price</p>
                    <p className={styles.value}>3.5 ETH</p>
                  </div>
                </div>
              </div>
              <AuctionCard />
              <div className={styles.countdown}>
                <div className={styles.timer}>
                  <div>
                    <h4>10,810</h4>
                    <div className={"p-d-flex"}>
                      <FontAwesomeIcon
                      icon={faEye}
                      className={styles.viewIcon}/>
                      <p className={styles.lightStyle}>Views</p>
                    </div>
                  </div>
                  <div>
                    <h4>2,800</h4>
                    <div className={"p-d-flex"}>
                      <FontAwesomeIcon
                      icon={faHeart}
                      className={styles.heartIcon}            
                      />
                      <p className={styles.lightStyle}>Likes</p>
                    </div>
                  </div>  
                  <div>
                    <h4>3rd</h4>
                    <div className={"p-d-flex"}>
                      <FontAwesomeIcon
                      icon={faMedal}
                      className={styles.challengeIcon}/>
                      <p className={styles.lightStyle}>Place</p>
                    </div>
                  </div>        
                </div>
              </div>
              <div className={styles.bidBtn}>
                <CustomButton
                  text="Place a bid"
                  btnStyle="Colored"
                  handleClick={handleClick}
                />
                <Link href="/artdetails">
                  <a className={styles.btnBorder}>View</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* <SiteStat activeUserCount={`1,900`} itemSoldCount={`3.5m`} paidCreatorCount={`100k`} /> */}
        
      </div>
    </React.Fragment>
  );
};

export default DiscoverBanner;

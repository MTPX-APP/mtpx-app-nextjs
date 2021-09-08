import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/components/FeatureBanner.module.scss";
import { Colors, imageAssets } from "../core/Constants";
import Link from "next/link";
import Avatar from "./Avatar";
import AuctionCard from "./AuctionCard";
import CustomButton from "./CustomButton";
import Modal from "../components/Modal";
import Connect from "./Connect";
import Helpers from '../core/Utils/Helpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl, faHeart, faEye, faMedal  } from "@fortawesome/free-solid-svg-icons";
import ArtInfoView from "../components/ArtInfoView"   
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const FeatureBanner = () => {
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
        <Connect />
      </Modal>
      <div className={styles.wrapper}>
        <div className={styles.containerTitle}><h1>Featured</h1></div>
        <div className={styles.container}>
          <div className={styles.imgBidContainer}>
            
            <div className={styles.imageContainer}>
              <div className={styles.likeDoubleClick} onClick={dblClick}>
              { showLike &&
                <FontAwesomeIcon
                    icon={faHeart}
                    size="sm"
                    className={`${styles.likeIcon} ${showFadeOut && styles.fadeOut}`}
                    color={Colors.pink}
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
              />
            </div>
            <div className={styles.creatorInfo}>
              <h1>Marco carrillo</h1>
              <div className={styles.avatarContainer}>
                <div
                  className={`p-d-flex p-ai-center p-mr-5  ${styles.pillContainer}`}
                >
                  <Avatar src={imageAssets.profilepic} width={40} height={40} />
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
          <div className={styles.content}>
            <h1>Popular</h1>
            <div className={styles.contentCardContainer}>
              <ArtInfoView
                artName={`Sample Art 1`}
                userImage={imageAssets.SamepleUser1}
                mintImage={imageAssets.SamepleImage1}
                userName={"E Cole."}              
              />
              <ArtInfoView
                artName={`Sample Art 2`}
                userImage={imageAssets.SamepleUser2}
                mintImage={imageAssets.SamepleImage8}
                userName={"E Cole."}            
              />
              <ArtInfoView
              artName={`Sample Art 3`}
                userImage={imageAssets.SamepleUser3}
                mintImage={imageAssets.SamepleImage3}
                userName={"E Cole."}
              />
              <ArtInfoView
                artName={`Sample Art 4`}
                userImage={imageAssets.SamepleUser5}
                mintImage={imageAssets.SamepleImage5}
                userName={"E Cole."}
              />
              </div>
            </div>
        </div>             
      </div>
    </React.Fragment>
  );
};

export default FeatureBanner;

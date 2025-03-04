import React, {useState, useRef}from "react";
import Avatar from "./Avatar";
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import { Card } from "primereact/card";
import Link from "next/link";
import { Colors, imageAssets } from "../core/Constants";
import ProfileShare from "./ProfileShare";
import ProfileReport from "./ProfileReport";
import Modal from "./Modal";
import { Toast } from 'primereact/toast';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faGlobe, faCamera, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from "../styles/components/ProfileCard.module.scss";

config.autoAddCss = false

const ProfileCard = () => {
  const pageToast = useRef(null);
  const [isSelfProfile, setIsSelfProfile] = useState(true);
  const [visibleModalReport, setVisibleModalReport] = useState(false);
  const [address, setAddress] = useState('0x41f8730e0b32b04beaa5757e5aea3aef970e5b613');

  const handleReport = () => {
    setVisibleModalReport(true);
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address)
    pageToast.current.show({severity: 'success', summary: 'Address Copied successfully', detail: 'You can now paste this address'}); 
  }

  return (
    <>
    <Toast ref={pageToast} /> 
      <Card className={styles.card}>
        <div className={styles.cardAvatar}>
        { isSelfProfile && ( 
        <Link href="/editprofile" passHref>
            <div className={styles.camera}>
              <FontAwesomeIcon
                icon={faCamera}
                className={`${styles.cameraIcon}`}
                />
            </div>
          </Link>
          )}  
          <Avatar
            width={130}
            height={130}
            src={imageAssets.SamepleUser2}
            alt={"avatar"}
            parentStyle={styles.avatar}
          />          
        </div>
        <div className={styles.divgrp}>
          <div className={styles.userName}>
            <h1>
              EnricoCole
            </h1>
            <div className={styles.badge}> <FontAwesomeIcon
              icon={faCheck}
              className={styles.verifiedIcon}            
            /></div>
          </div>
          
          <div className={styles.profileAddress} onClick={handleCopyAddress}>
            <span className={styles.address}>{address}</span>
            <span className={styles.info}>Copy Address</span>
          </div>
        </div>
        <div className={styles.social}>
          <div>{`20`} <span>Following</span></div>
          <div>{`1000`} <span>Followers</span></div>
        </div>
        <div className={styles.btngrp}>
        {
          !isSelfProfile && (
            <Button label="Follow" className={`p-button-rounded ${styles.btnFollow}`} />
          )
        }
          <ProfileShare shareUrl={`http://www.mintedpix.com`}/>
          {
            isSelfProfile ? (
              <Link href="/editprofile" passHref>
                <Button
                  icon="pi pi-pencil"
                  className={`p-button-rounded p-button-outlined  ${styles.btnEdit}`}
                />
              </Link>                
            ) : (
              <>
              <Button
                  icon="pi pi-flag"
                  className={`p-button-rounded p-button-outlined  ${styles.btnReport}`}
                  onClick={handleReport} 
                />
                <Modal
                  show={visibleModalReport}
                  onClose={() => setVisibleModalReport(false)}
                >
                  <ProfileReport />
                </Modal>
              </>
            )
          }
          
        </div>
        <Divider align="center" type="solid" className={styles.divider}>
            Bio
        </Divider>
        <div className={styles.bio}>
          <p>
          Based in LA, exhibited internationally with work in the collections of SFMoMA, Hirshhorn Museum, MoCA, Miami, Smithsonian Museum of American Art in DC. Rep'd by Salon 94, NYC and Ratio 3, SF.
          </p>
        </div>
        <div className={styles.contentGroup}>
          <span>
          <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={`${styles.iconMap}`}                
                />
          </span>
          <p>United States</p>
        </div>
        <div className={styles.icongrp}>
          <Link href="http://twitter.com">
              <a>
            <FontAwesomeIcon
                icon={faGlobe}
                className={`${styles.socialIcons} ${styles.iconPortfolio}`}
                color={Colors.blue}
                />
              </a>  
            </Link>
            <Link href="http://twitter.com">
              <a>
            <FontAwesomeIcon
                icon={faTwitter}
                className={`${styles.socialIcons} ${styles.iconTwitter}`}
                color={Colors.blue}
                />
              </a>  
            </Link>
            <Link href="http://instagram.com">
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${styles.socialIcons} ${styles.iconInstagram}`}
                color={Colors.blue}
                />
              </a>
              </Link>
              <Link href="https://www.facebook.com">
            <a>
              <FontAwesomeIcon
                icon={faFacebook}
                className={`${styles.socialIcons} ${styles.iconFacebook}`}
                color={Colors.blue}
                />
            </a>
            </Link>
            <Link href="http://www.dribbble.com">
            <a>
            <FontAwesomeIcon
                icon={faDribbble}
                className={`${styles.socialIcons} ${styles.iconDribbble}`}
                color={Colors.blue}
                />
            </a></Link>
        </div>
        <div className={styles.footer}>
          <p>Member since Mar 15, 2021</p>
        </div>
      </Card>
    </>
  );
};

export default ProfileCard;

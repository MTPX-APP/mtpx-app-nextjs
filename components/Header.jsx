import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'

import Image from "next/image";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Notification from "./Notification";
import ProfilecardPopUp from "./ProfilecardPopUp";
import Avatar from "./Avatar";
import styles from "../styles/components/Header.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { imageAssets } from "../core/Constants";



function Header() {
  const [searchValue, setSearchValue] = useState('')
  const [show, setShow] = useState(false);
  const [showNotification, setNotification] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('header');

  const handleSearch = (e) => {
    const query = e.target.value;
    router.push(`search`);
  }

  return (
    <div className={`${styles.navbar} ${router.pathname === '/' ? styles.navBarHome : ''}`}>
      <nav>
        <Link href="/" passHref>
          <div className={styles.logo}>        
            <Image src={imageAssets.Logo} alt="logo" />        
          </div>
        </Link>
        <ul>
          <Link href="/" passHref>
            <li>{t('discover')}</li>            
          </Link>
          <Link href="/creators" passHref>
            <li>{t('creators')}</li>
          </Link>
          <li onClick={() => setShow(true)}>{t('howItWorks')}</li>          
          <Link href="/apply" passHref>
            <li>{t('applyAsAnCreator')}</li>
          </Link>
        </ul>
      </nav>
      <div>
        <ul>
          <li className={styles.search}>
            <form>
              <span className="p-input-icon-right">
                <i className="pi pi pi-search" />
                <InputText 
                  placeholder="Search" 
                  name="search" 
                  value={searchValue}
                  onClick={handleSearch}
                />
              </span>
            </form>
          </li>
          <li className={styles.noti}>
            <OutsideClickHandler onOutsideClick={() => setNotification(false)}>
            <div onClick={() => setNotification(!showNotification)} className={`${styles.btnNoti} ${showNotification && styles.active }`}>
              <i className="pi pi-bell"/>
            </div>
             {showNotification && <Notification  setNotification={setNotification}/>}
            </OutsideClickHandler>
          </li>

          <li className={styles.create}>
            <Link href="/create" passHref>
              <Button
                label="Create"
                className="p-button-rounded p-button-primary"
                style={{ magin: "0 auto" }}
              >               
              </Button>
            </Link>
          </li>
          
            {show ? (
              <li><NavBarItem /></li>
            ) : (
              <li className={styles.connect}>
                <Link href="/wallet" passHref>
                  <Button
                    label="Connect"
                    className="p-button-outlined p-button-secondary p-button-rounded"
                  />
                </Link>
              </li>
            )}
        </ul>
      </div>
     
    </div>
  );
}

const NavBarItem = () => {
  const [showProfilePopup, setProfilePopup] = useState(false);
  return (
    <>
       <OutsideClickHandler onOutsideClick={() => setProfilePopup(false)}>
      <div>
        <Button
          className={`p-button-rounded  p-button-outlined ${styles.connectedProfile}`}
          onClick={() => setProfilePopup(!showProfilePopup)}
        >
          <div>
            <div className={styles.avatar}>
              <Avatar
                width={25}
                height={25}
                src={imageAssets.SamepleUser2}
                alt={"avatar"}
              />
            </div>
            <span className={styles.spanVal}>7.000068</span>
            <span className={styles.greenCol}>ETH</span>
          </div>
        </Button>
        
      </div>
      {showProfilePopup && <ProfilecardPopUp setProfilePopup={setProfilePopup} />}
      </OutsideClickHandler>
    </>
  );
};

export default Header;

import Image from "next/image";
import { imageAssets } from "../core/Constants";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals } from "@fortawesome/free-solid-svg-icons";
import SearchField from "./SearchField";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import Notification from "./Notification";
import ProfilecardPopUp from "./ProfilecardPopUp";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "../styles/components/MobileNavbar.module.scss";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const MobileNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [showNotification, setNotification] = useState(false);
  const [showProfilePopup, setProfilePopup] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.wrapper}>
      <div className={` p-d-flex p-jc-between p-ai-center ${styles.container}`}>
        <Link href="/" passHref><a className={styles.mobileLogoWrapper} ><Image src={imageAssets.LogoMark} alt="logo" width={41} height={39} /></a></Link>
        <div className={`p-d-flex p-jc-between p-ai-center ${styles.navItem}`}>
          <OutsideClickHandler onOutsideClick={() => setNotification(false)}>
            <div onClick={() => setNotification(!showNotification)} className={`${styles.bellIcon} ${showNotification && styles.active }`}>
              <i className={`pi pi-bell`}/>
            </div>
          {showNotification && <Notification setNotification={setNotification}/>}
          </OutsideClickHandler>
          <OutsideClickHandler onOutsideClick={() => setProfilePopup(false)}>
          <div onClick={() => setProfilePopup(!showProfilePopup)} className={`${styles.popupAvatar} ${showProfilePopup && styles.active }`}>
            <Avatar
              width={32}
              height={32}
              src={imageAssets.SamepleUser2}
              alt="userPic"
            />
          </div>
          {showProfilePopup && <ProfilecardPopUp setProfilePopup={setProfilePopup}/>}
          </OutsideClickHandler>

          <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
          <div onClick={handleMenu} className={`${styles.barIcon} ${menu && styles.active }`}>
            <FontAwesomeIcon
              icon={faEquals}
            />
          </div>
          {menu ? <NavbarLinks handleMenu={handleMenu} /> : null}
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

function NavbarLinks({ handleMenu }) {
  const router = useRouter();


  return (
    <div className={`${styles.navContainer}`}>
      <SearchField />
      <div className={styles.navLinks}>
        <Link href="/" passHref scroll={true}>
          <a onClick={() => handleMenu()}>Discover</a>
        </Link>
        <Link href="/creators" passHref scroll={true}>
          <a onClick={() => handleMenu()}>Creators</a>
        </Link>
        <Link href="/faq" passHref scroll={true}>
          <a onClick={() => handleMenu()}>How it works</a>
        </Link>
        {/* <Link href="/apply" passHref scroll={true}>
          <a onClick={() => handleMenu()}>Apply as a creator</a>
        </Link> */}
      </div>

      <div className={styles.navField}>
        <Link href="/create" passHref scroll={true}>
          <div className={styles.createBtn} onClick={() => handleMenu()}>Create</div>
        </Link>
        <Link href="/wallet" passHref scroll={true}>
            <div className={styles.connectBtn} onClick={() => handleMenu()}>Connect</div>
          
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;

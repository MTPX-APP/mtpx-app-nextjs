import React, { useState, useRef } from "react";
import { useRouter } from 'next/router'
import { Toast } from 'primereact/toast';
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "./Icon.js";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from "../styles/components/ProfileShare.module.scss";
config.autoAddCss = false

const ProfileShare = ({ className, shareUrl }) => {
  const pageToast = useRef(null);
  const [visible, setVisible] = useState(false);
  const { asPath } = useRouter();

  const handleCopy = () => {
    navigator.clipboard.writeText(`${process.env.VERCEL_URL}${asPath}`)
    pageToast.current.show({severity: 'success', summary: 'Copied successfully', detail: 'You can now paste this URL'}); 
    setVisible(false);
  }
  
  return (
    <>
    <Toast ref={pageToast} /> 
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div
          className={cn(styles.actions, className, {
            [styles.active]: visible,
          })}
        >
          <button
            className={cn("button-circle-stroke", styles.iconStyle)}
            onClick={() => setVisible(!visible)}
          >
            <Icon name="share" size="20" className={styles.shareIcon}/>
          </button>
          <div className={styles.body}>
              <FacebookShareButton url={shareUrl}>
                <div className={styles.item} onClick={() => setVisible(false)}>
                  <Icon name={`facebook`} size="20" />
                  <span>Facebook</span>
                </div>
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl}>
                <div className={styles.item} onClick={() => setVisible(false)}>
                  <Icon name={`twitter`} size="20" />
                  <span>Twitter</span>
                </div>
              </TwitterShareButton>

              <EmailShareButton url={shareUrl}>
                <div className={styles.item} onClick={() => setVisible(false)}>
                  <i className={`pi pi-envelope ${styles.email}`}></i>
                  <span>Email</span>
                </div>
              </EmailShareButton>

              <div className={styles.item} onClick={handleCopy}>
                  <i className={`pi pi-copy ${styles.copy}`}></i>
                  <span>Copy</span>
              </div>
          </div>
        </div>
      </OutsideClickHandler>     
    </>
  );
};

export default ProfileShare;

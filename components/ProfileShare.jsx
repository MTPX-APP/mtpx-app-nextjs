import React, { useState } from "react";
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
  const [visible, setVisible] = useState(false);
  
  return (
    <>
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
                  <Icon name={`copy`} size="20" />
                  <span>Email</span>
                </div>
              </EmailShareButton>
          </div>
        </div>
      </OutsideClickHandler>     
    </>
  );
};

export default ProfileShare;

import React, { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "./Icon.js";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from "../styles/components/ArtDetailsShare.module.scss";
config.autoAddCss = false

const ArtDetailsShare = ({ className }) => {
  const [visible, setVisible] = useState(false);

  const items = [
    {
      title: "Facebook",
      icon: "facebook",
      action: () => {
        setVisible(false);        
        // Link to Facebook
      },
    },
    {
      title: "Twitter",
      icon: "twitter",
      action: () => {
        setVisible(false);        
        // Link to Twitter
      },
    },
    {
      title: "Copy Link",
      icon: "copy",
      action: () => {
        setVisible(false);
        // Copy URL
      },
    }
  ];

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
            {items.map((x, index) => (
              <div className={styles.item} key={index} onClick={x.action}>
                <Icon name={x.icon} size="20" />
                <span>{x.title}</span>
              </div>
            ))}
          </div>
        </div>
      </OutsideClickHandler>     
    </>
  );
};

export default ArtDetailsShare;

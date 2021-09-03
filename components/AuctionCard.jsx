import { imageAssets } from "../core/Constants";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faMedal } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import styles from "../styles/components/AuctionCard.module.scss";

const AuctionCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.bidInfo}>
        <p className={styles.darkStyle}>Current Highest Bid</p>
        <div className={styles.AvatarWrapper}>
          <Avatar src={imageAssets.SamepleUser2} width={50} height={50} />
          <div className={styles.content}>
            <div className={styles.userName}>
              <p>Owner</p>
              <p><strong>Raquel Will</strong></p>
            </div>
          </div>
        </div>
        <h2>1.00 ETH</h2>
        <p className={styles.lightStyle}>$3,567.23</p>
      </div>      
    </div>
  );
};

export default AuctionCard;

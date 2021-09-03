import React from "react";
import Avatar from "../Avatar";
import { imageAssets } from "../../core/Constants";
import styles from "../../styles/components/ArtDetailsTabContent.module.scss";

const ArtDetailHistory = () => {
  return (
    <>
        <ul className={styles.currentContainer}>
            <li>
                <Avatar
                width="48"
                height="48"
                src={imageAssets.SamepleUser3}
                alt="owner-pic"
                />
                <div className={styles.content}>
                    <p className={styles.name}>Raquel Will</p>
                    <p className={styles.action}>
                      Place a bid: <span className={styles.highlight}>{`1.42 ETH`}</span>

                    </p>
                    <p  className={styles.timeStamp}>JUN 13, 2021 - 12.00PM</p>
                </div>                    
            </li>

            <li>
                <Avatar
                width="48"
                height="48"
                src={imageAssets.SamepleUser4}
                alt="owner-pic"
                />
                <div className={styles.content}>
                    <p className={styles.name}>James Lee</p>
                    <p className={styles.action}>
                      Bid Accepted: <span className={styles.highlight}>{`Johns Finner`}</span>

                    </p>
                    <p  className={styles.timeStamp}>JUN 13, 2021 - 12.00PM</p>
                </div>                    
            </li>
        </ul>
    </>
  );
};

export default ArtDetailHistory;

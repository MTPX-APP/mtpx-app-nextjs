import React from "react";
import Avatar from "../Avatar";
import { imageAssets } from "../../core/Constants";
import styles from "../../styles/components/ArtDetailsTabContent.module.scss";

const ArtDetailBids = () => {
  return (
    <>
        <ul className={styles.currentContainer}>
            <li>
                <Avatar
                width="48"
                height="48"
                src={imageAssets.SamepleUser1}
                alt="owner-pic"
                />
                <div className={styles.content}>
                    <p className={styles.name}>Raquel Will</p>
                    <p className={styles.action}>
                      Highest Bid: <span className={styles.highlight}>{`1.42 ETH`}</span>

                    </p>
                    <p  className={styles.timeStamp}>JUN 13, 2021 - 12.00PM</p>
                </div>                    
            </li>

            <li>
                <Avatar
                width="48"
                height="48"
                src={imageAssets.SamepleUser2}
                alt="owner-pic"
                />
                <div className={styles.content}>
                    <p className={styles.name}>Raquel Will</p>
                    <p className={styles.action}>
                      Bid: <span className={styles.highlight}>{`1.00 ETH`}</span>

                    </p>
                    <p  className={styles.timeStamp}>JUN 13, 2021 - 12.00PM</p>
                </div>                    
            </li>
        </ul>
    </>
  );
};

export default ArtDetailBids;

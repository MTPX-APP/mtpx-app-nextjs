import React from "react";
import Avatar from "../Avatar";
import { imageAssets } from "../../core/Constants";
import styles from "../../styles/components/ArtDetailsTabContent.module.scss";

const ArtDetailOwners = () => {
  return (
    <>
        <ul className={styles.currentContainer}>
            <li>
                <Avatar
                width="48"
                height="48"
                src={imageAssets.profilepic}
                alt="owner-pic"
                />
                <div className={styles.content}>
                    <p className={styles.lightText}>Owner</p>
                    <p className={styles.name}>Raquel Will</p>
                </div>    
            </li>
        </ul>
    </>
  );
};

export default ArtDetailOwners;

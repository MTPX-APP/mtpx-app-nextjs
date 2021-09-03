import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { Colors, imageAssets } from "../core/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFire } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import styles from "../styles/components/ArtInfoView.module.scss";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function ArtInfoView({
  artName,
  price,
  quantity,
  mintImage,
  userImage,
  userName,
  burnPrice,
  likes,
  navigation = false,
}) {

  const [visible, setVisible] = useState(false);
  const [footerView, setFooterView] = useState(burnPrice && likes ? true : false );
  return (
    <div className={styles.cardContainer}>
      
      <div className={styles.cardImgWrapper}>
        <div className={styles.preview}>
            <button
              className={cn(styles.favorite, { [styles.active]: visible })}
              onClick={() => setVisible(!visible)}
            >
            <FontAwesomeIcon
            icon={faHeart}
            className={styles.heartIcon}
            />
            </button>
            <Link href="/artdetails" passHref>
            <button className={styles.button}>
              <span>View</span>
            </button>    
            </Link>    
        </div>   
        <Image
          src={mintImage}
          className={styles.artImage}
          alt={"artImage"}
          layout="responsive"
          objectFit="cover"
          width={400}
          height={300}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={`p-d-flex p-jc-between p-ai-center ${styles.contentTop}`}>
          { artName !== undefined  && <p className={styles.artName}>{artName}</p>}
          { price !== undefined  && <p className={styles.artPrice}>{price} ETH</p>}          
        </div>
        <div className={`p-d-flex p-jc-between p-ai-center ${styles.contentMiddle}`}>
          <div className={`p-d-flex`}>
            <Avatar
              width={25}
              height={25}              
              src={userImage}
              alt={userName}
            />
            <p className={styles.userName}>{userName}</p>
          </div>
          <p className={styles.artQuant}>{quantity}</p>
        </div>
        { footerView &&
          (<div className={`p-d-flex p-jc-between p-ai-center ${styles.footer}`}>
          <div className={"p-d-flex"}>
            <FontAwesomeIcon
            icon={faFire}
            pull="left"
            className={styles.fireIcon}
            color={Colors.lightGrey}
            />
            <p className={styles.burnPrice}>{burnPrice} ETH</p>
          </div>
          <div className={"p-d-flex p-jc-between"}>
            <FontAwesomeIcon
            icon={faHeart}
            className={styles.heartIcon}
            color={Colors.pink}
            />
            <p className={styles.artLikes}> {likes}</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default ArtInfoView;

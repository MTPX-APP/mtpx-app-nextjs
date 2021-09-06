import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import styles from "../styles/components/Avatar.module.scss";

const Avatar = ({ width, height, src, alt, isVerified }) => {
  return (
    <div className={styles.avatar}  styles={`width: ${width}px;height:${height}px`}>
      <Image 
        width={width} 
        height={height} 
        src={src} 
        alt={alt} 
        objectFit="cover"
      />
      {isVerified && <div className={styles.badge}> <FontAwesomeIcon
            icon={faCheck}
            className={styles.verifiedIcon}            
          /></div>}
    </div>
  );
};

export default Avatar;

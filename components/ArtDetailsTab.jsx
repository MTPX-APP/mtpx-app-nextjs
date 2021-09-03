import { useState } from "react";
import { Colors } from "../core/Constants";

import styles from "../styles/components/ArtDetailsTab.module.scss";
import ArtDetailsOptions from "./ArtDetailsOptions";
import ArtDetailsShare from "./ArtDetailsShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeart,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

const ArtDetailsTab = () => {
  const [showDetails, setShowDetails] = useState(false);

  const showOptions = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.container}>
      <div className="p-d-flex p-jc-between">
        <ArtDetailsShare />
        <div className={`p-d-flex p-ai-center ${styles.iconStyles} ${styles.likeIcon}`}>
          <FontAwesomeIcon
            icon={faHeart}
            color={Colors.lightGrey}
          />
        </div>
        <ArtDetailsOptions />
      </div>
    </div>
  );
};

export default ArtDetailsTab;

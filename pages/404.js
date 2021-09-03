import Avatar from "../components/Avatar";
import { InputText } from "primereact/inputtext";
import styles from "../styles/pages/NotFound.module.scss";
import { Colors, exploreCards } from "../core/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon
              icon={faGrinBeamSweat}
              className={styles.resultIcon}
              color={Colors.lighterGrey}
              />
      </div>
      <div className={styles.content}>
        <div>
          <h2>{`Sorry, we couldn't find any results for this search.`}</h2>
          <p>Maybe give one of these a try?</p>
          <div className={styles.searchWrapper} >
            <span className="p-input-icon-right">
              <i className="pi pi pi-search" />
              <InputText placeholder="Enter your search..." />
            </span>
          </div>
          
        </div>
      </div>

      <h6 className={styles.exploreTitle}>Explore more</h6>
      <div className={styles.exploreContainer}>
        {exploreCards.map((data, index) => {
          return (
            <div
              className={`p-d-flex p-ai-center ${styles.exploreCard}`}
              key={index}
            >
              <Avatar src={data.image} width="50" height="50" />
              <div className={styles.item}>
                <p>{data.name}</p>
                <p>{data.items}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotFound;

import React, { useState } from "react";
import styles from "../styles/components/ArtPurchase.module.scss";
import Avatar from "./Avatar";
import { imageAssets } from "../core/Constants";
import CustomButton from "./CustomButton";
import Modal from "./Modal";
import Bid from "./Bid";
import Purchase from "./Purchase";
import { Colors } from "../core/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const ArtPurchase = () => {
  const [visibleModalBid, setVisibleModalBid] = useState(false);
  const [visibleModalPurchase, setVisibleModalPurchase] = useState(false);
  const [testItem, setTestItem] = useState(false);
  const handleClick = () => {
    setVisibleModalBid(true);
  };
  const handlePurchase = () => {
    setVisibleModalPurchase(true);
  };
  const handleTest = () => {
    setTestItem(true);
  };
  return (
    <React.Fragment>
      <Modal show={visibleModalBid} onClose={() => setVisibleModalBid(false)}>
        <Bid />
      </Modal>
      <Modal
        show={visibleModalPurchase}
        onClose={() => setVisibleModalPurchase(false)}
      >
        <Purchase />
      </Modal>

      {/* <ModalTwo show={testItem} onClose={() => setTestItem(false)}>
        <Bid />
      </ModalTwo> */}
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.highestBid}>
            <Avatar
              width={48}
              height={48}
              src={imageAssets.SamepleUser2}
              alt="ProfilePic"
              isVerified={true}
            />
            <div className={styles.bidDetails}>
              <p>
                Highest bid by <span>Kohaku Tora</span>
              </p>
              <p>
                <span>1.46 ETH</span> $2,764.90
              </p>
            </div>
          </div>
          <div className={styles.countDown}>
          <FontAwesomeIcon
            icon={faClock}
            className={styles.clockIcon}
            color={Colors.lightGrey} />

            3h 12m 20s left
          </div>
        </div>
        <div className={`${styles.btnContainer}`}>
          <div>
            <CustomButton
              text="Buy for 2.563 ETH"
              btnStyle="Colored"
              handleClick={handlePurchase}
            />
          </div>
          <div>
            <CustomButton text="Place a bid" handleClick={handleClick} />
          </div>
        </div>
        {/* <div className={`p-d-flex ${styles.serviceDetails}`}>
          <p>Service fee</p>
          <p>15%</p>
          <p>2.563 ETH</p>
          <p>$4,540.50</p>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default ArtPurchase;
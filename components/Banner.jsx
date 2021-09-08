import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal  } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import { Button } from "primereact/button";
import { imageAssets } from "../core/Constants";
import styles from "../styles/components/Banner.module.scss";

export default function Banner() {
  return (
    <>
      <div
        className={styles.wrapper}
      >
        <div className={styles.container}>
          <div className={styles.inner}>
          <div className={styles.leftColumn}>
            <div className={styles.bannerColumns}>
              <p className={styles.subheader}>
              <FontAwesomeIcon
                      icon={faMedal}
                      className={styles.challengeIcon}/>
                CHALLENGE YOUR CREATIVITY                
              </p>
              <h1>{`Create a unique original character`}</h1>

              <p>
                {`Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus totam dicta earum. Repellat, facere doloremque!`}
              </p>
              <div className={styles.couponWrapper}>
                  <p>
                    <span className={styles.lightText}>use code:</span> {`originalcharacter2021`}
                  </p>
                  <p>
                    <span className={styles.lightText}>Ends:</span> {`August 1st 2022`}
                  </p>
              </div>
              <div className={styles.buttonContainer}>
                <Link href="/create/single" passHref>
                  <Button
                    label="Create Now."
                    className={`p-button-rounded ${styles.btnCreateNow}`}
                  />               
                </Link>
              </div>
              <Link href="/faq" passHref>
                <a className={styles.footer}> <i className="pi pi-info-circle"></i> <small>Learn more about Challenges</small></a>
                </Link>
            </div>
          </div>
          <div className={`${styles.rightColumn} ${styles.bannerImage}`} align={"middle"}>
              <div className={styles.imageColumns}>
                <Image
                  src={imageAssets.SampleChallenge1}
                  alt="Challenge1"
                  height={700}
                  className={styles.image}
                  objectFit={"contain"}
                />
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="p-grid p-align-center">
          <div className="p-col-12 p-md-8 p-lg-8">
            <div className={styles.bannerColumns}>
              <p className={styles.lightText}>
                CHALLENGE YOUR CREATIVITY. <strong>LEARN MORE</strong>
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
            </div>
          </div>
          <div className={`p-col-12 p-md-4 p-lg-4 ${styles.bannerImage}`} align={"middle"}>
              <div className={styles.bannerColumns}>
                <Image
                  src={imageAssets.OlympicLogo}
                  alt="olympic logo"
                  width={400}
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

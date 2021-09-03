/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "primereact/button";
import { Card } from "primereact/card";
import styles from "../styles/pages/CreateHome.module.scss";

const CreateHome = () => {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>
          <h1>
            <strong>Upload mints</strong>
          </h1>
          <p>
            Choose <strong>Single</strong> if you want your collectible to be
            one of a kind or <strong>Multiple</strong> if you want to sell one
            collectible multiple times.
          </p>
        </div>
        <div className={styles.carddiv}>
          <Card className={styles.card}>
            <div className={styles.cardSingle}></div>
            <Link href="/createSingle" passHref>
              <Button className={`p-button-rounded ${styles.btnMint}`}>
                <a>Create Single</a>              
              </Button>
            </Link>
          </Card>
          <Card className={styles.card}>
            <div className={styles.cardMultiple}></div>
            <Link href="/createSingle" passHref>
              <Button className={`p-button-rounded ${styles.btnMint}`}>
                Create Multiple
              </Button>
            </Link>
          </Card>
        </div>
        <div className={styles.heading}>
          <p>
            We do not own your private keys and cannot access your funds without
            your confirmation.
          </p>
        </div>
      </div>
    </>
  );
};

export default CreateHome;

import Image from "next/image";

import React, { useState } from "react";
import { imageAssets, profileTabLinks, Users } from "../core/Constants";
import { useRouter } from "next/router";
import styles from "../styles/pages/Profile.module.scss";
import ProfileCard from "../components/ProfileCard";
import TabHeader from "../components/TabHeader";
import ArtInfoView from "../components/ArtInfoView";
import Followers from "../components/Followers";
import { Button } from "primereact/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false

const Profile = () => {
  const [show, setShow] = useState({
    sales: true,
    following: false,
    followers: false,
    offers: false,
  });
  const router = useRouter();

  const handleRoute = () => {
    router.push("/editprofile");
  };

  const showTab = () => {
    if (show.sales) {
      return (
        <div
          className={`${styles.discoverCard}`}
        >
        <ArtInfoView
        artName={"Amazing Art"}
        price={"2.5"}
        quantity={"3 left"}
        userImage={imageAssets.SamepleUser1}
        mintImage={imageAssets.SamepleImage1}
        userName={"E Cole."}
        burnPrice={"0.03"}
        likes={405}
      />
      <ArtInfoView
        artName={"Amazing Art"}
        price={"2.5"}
        quantity={"3 left"}
        userImage={imageAssets.SamepleUser2}
        mintImage={imageAssets.SamepleImage8}
        userName={"E Cole."}
        burnPrice={"0.03"}
        likes={405}
      />
      <ArtInfoView
        artName={"Amazing Art"}
        price={"2.5"}
        quantity={"3 left"}
        userImage={imageAssets.SamepleUser3}
        mintImage={imageAssets.SamepleImage3}
        userName={"E Cole."}
        burnPrice={"0.03"}
        likes={405}
      />
      <ArtInfoView
        artName={"Amazing Art"}
        price={"2.5"}
        quantity={"3 left"}
        userImage={imageAssets.SamepleUser4}
        mintImage={imageAssets.SamepleImage4}
        userName={"E Cole."}
        burnPrice={"0.03"}
        likes={405}
      />
      <ArtInfoView
        artName={"Amazing Art"}
        price={"2.5"}
        quantity={"3 left"}
        userImage={imageAssets.SamepleUser5}
        mintImage={imageAssets.SamepleImage5}
        userName={"E Cole."}
        burnPrice={"0.03"}
        likes={405}
      />
        </div>
      );
    } else if (show.following) {
      return (
        <div>
          <Followers Users={Users} />
        </div>
      );
    } else if (show.followers) {
      return (
        <div>
          <Followers Users={Users} />
        </div>
      );
    }
  };
  return (
    <>
      <div className={styles.imgContainer} style={{ backgroundImage: `url( ${imageAssets.goldfish.src})` }}>
        <div className={styles.ButtonContainer}>
          <div className={styles.btnCamera}>
          <FontAwesomeIcon
          icon={faCamera}
          className={`${styles.cameraIcon}`}          
          />        
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* <ProfileCard/> */}
        <div className={`p-grid ${styles.ProfileCardContainer}`}>
          <div className={`p-col-12 p-md-4 p-lg-3 p-justify-center ${styles.profileLeftCol}`}>
            <div className={styles.profileCard}>
              <ProfileCard />
            </div>
          </div>

          <div className={`p-col-12 p-md-8 p-lg-9 ${styles.profileRightCol}`}>
            <div>
              <TabHeader links={profileTabLinks} />
              <div>{showTab()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

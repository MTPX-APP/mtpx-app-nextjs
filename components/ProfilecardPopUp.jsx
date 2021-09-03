import { Button } from "primereact/button";
import Link from "next/link";
import { Colors } from "../core/Constants";
import styles from "../styles/components/ProfilecardPopUp.module.scss";

const ProfilecardPopUp = ({setProfilePopup}) => {
  return (
    <div className={styles.Profilecard}>
      <div className={styles.topContainer}>
        <h2>@EnricoCole</h2>
        <p>uhuaefjbwoo3347</p>
        
        <div className={styles.social}>
          <div>{`20`} <span>Following</span></div>
          <div>{`1000`} <span>Followers</span></div>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.middleInnner}>
          <div className={styles.middleInnerBalance}>
            <p>Balance</p>
            <h2>4.689 ETH</h2>
          </div>
        </div>

        <Button
          label="Manage fund on coinbase"
          className={`p-button-rounded p-button-secondary p-button-outlined ${styles.btnManage}`}
        />
      </div>
      <div className={styles.buttomContainer}>
        <ul className={styles.list}>
          <Link href="/profile" passHref>
            <li onClick={() => setProfilePopup(false)}>My profile</li>
          </Link>
          <Link href={"/editprofile"} passHref >
            <li  onClick={() => setProfilePopup(false)}>Edit profile</li>
          </Link>
          <li>My items</li>
          <Link href={"/activity"} passHref>
            <li  onClick={() => setProfilePopup(false)}>My Activity</li>
          </Link>
          <li>Feedback</li>
          <li>Disconnect</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilecardPopUp;

import CustomButton from "./CustomButton";
import Image from "next/image";

import styles from "../styles/components/Followers.module.scss";
import { Divider } from "primereact/divider";
import Avatar from "./Avatar";

const Followers = ({ Users }) => {
  return (
    <div>
      {Users.map((user, index) => {
        return (
          <div key={index}>
            <section className={styles.wrapper}>
              <div className={styles.container}>
                <div className={styles.userContainer}>
                  <Avatar
                    src={user.image}
                    alt="profile-pic"
                    width={88}
                    height={88}
                  />
                  <div className={styles.userDetails}>
                    <div>
                      <p>{user.username}</p>
                      <p>
                        {user.numOfFollowers} <span>followers</span>
                      </p>
                    </div>
                    <CustomButton text="Follow" btnStyle="Colored" />
                  </div>
                </div>
                <div className={`p-d-flex ${styles.postContainer}`}>
                  {user.profilePost.map((post, index) => {
                    return (
                      <div className={styles.profilePost} key={index}>
                        <Image
                          src={post}
                          alt="profile-post"
                          width={112}
                          height={88}
                          objectFit="cover"
                          className={styles.postItem}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Followers;

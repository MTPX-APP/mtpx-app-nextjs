import React from "react";
import cn from "classnames";
import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/components/FolowSteps.module.scss";
import styles2 from "../styles/components/Button.module.scss";

const FolowSteps = ({ className }) => {
  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Folow steps</div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{`Upload files & Mint token`}</div>
              <div className={styles.text}>Call contract method</div>
            </div>
          </div>
          <button className={cn("button done", styles2.button)}>Done</button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button error", styles2.button)}>Done</button>
        </div>
        {/* <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <LoaderCircle className={styles.loader} />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button loading", styles.button)}>
            <Loader className={styles.loader} color="white" />
          </button>
        </div> */}
        {/* <div className={cn(styles.item, styles.error)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="pencil" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button error", styles2.button)}>Failed</button>
        </div> */}
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="bag" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign lock order</div>
              <div className={styles.text}>
                Sign lock order using your wallet
              </div>
            </div>
          </div>
          <button className={cn("button", styles2.button)}>Start now</button>
        </div>
      </div>
      <div className={styles.note}>
        Something went wrong, please{" "}
        <Link href="/#" passHref>
          <a target="_blank" rel="noopener noreferrer">
          try again
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FolowSteps;

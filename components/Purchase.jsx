import React from "react";
import cn from "classnames";
import styles from "../styles/components/Purchase.module.scss";
import styles2 from "../styles/components/Button.module.scss";
import Icon from "./Icon";
// import LoaderCircle from "./LoaderCircle";
// import Avatar from "../public/images/avatar-3.jpg";

const items = [
  {
    title: "0.007",
    value: "ETH",
  },
  {
    title: "Your balance",
    value: "8.498 ETH",
  },
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "You will pay",
    value: "0.007 ETH",
  },
];

const Checkout = ({ className }) => {
  return (
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Checkout</div>
      <div className={styles.info}>
        You are about to purchase <strong>{" DATA "}</strong> from <strong>{"JOHN"}</strong>
      </div>
      <div className={styles.table}>
        {items.map((x, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.col}>{x.title}</div>
            <div className={styles.col}>{x.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles2.button)}>
          I understand, continue
        </button>
      </div>
      {/* <div className={cn("h4", styles.title)}>Follow steps</div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <LoaderCircle className={styles.loader} />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>Purchasing</div>
          <div className={styles.text}>
            Sending transaction with your wallet
          </div>
        </div>
      </div>
      <div className={styles.attention}>
        <div className={styles.preview}>
          <Icon name="info-circle" size="32" />
        </div>
        <div className={styles.details}>
          <div className={styles.subtitle}>This creator is not verified</div>
          <div className={styles.text}>Purchase this item at your own risk</div>
        </div>
        <div className={styles.avatar}>
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button)}>
          I understand, continue
        </button>
        <button className={cn("button-stroke", styles.button)}>Cancel</button>
      </div> */}
    </div>
  );
};

export default Checkout;

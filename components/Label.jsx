import styles from "../styles/components/Label.module.scss";

const Label = ({ text }) => {
  return <label className={styles.labelClass}>{text}</label>;
};

export default Label;

import styles from "../styles/components/CustomButton.module.scss";

const CustomButton = ({ text, btnStyle, handleClick }) => {
  const buttonStyle =
    btnStyle === "Colored" ? styles.btnBlue : styles.btnBorder;
  return (
    <button className={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CustomButton;

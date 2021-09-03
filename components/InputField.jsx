import styles from "../styles/components/InputField.module.scss";
import { InputText } from "primereact/inputtext";

const InputField = ({ placeholder, value, onValChange }) => {
  return (
    <InputText
      value={value}
      onChange={onValChange}
      placeholder={placeholder}
      className={styles.inputField}
    />
  );
};

export default InputField;

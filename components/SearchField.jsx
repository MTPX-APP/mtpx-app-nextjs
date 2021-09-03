import styles from "../styles/components/SearchField.module.scss";
import InputField from "./InputField";

const SearchField = () => {
  return (
    <div className={styles.search}>
      <i className="pi pi-search" />
      <InputField placeholder="Search" />
    </div>
  );
};

export default SearchField;

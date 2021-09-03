import { useState } from "react";
import CustomSelect from "./CustomSelect";
import InputField from "./InputField";
import Label from "./Label";
import styles from "../styles/components/SearchCreators.module.scss";

const SearchCreators = () => {
  const [value, setValue] = useState();

  const onValChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className="p-d-flex p-flex-column p-mb-5">
        <Label text="SEARCH" />
        <InputField
          value={value}
          placeholder="e.g. full name"
          onValChange={onValChange}
        />
      </div>
      <div className="p-d-flex p-flex-column p-mb-5">
        <Label text="SORT" />
        <CustomSelect />
      </div>
      <div className="p-d-flex p-flex-column p-mb-5">
        <Label text="ART" />
        <CustomSelect />
      </div>
    </div>
  );
};

export default SearchCreators;

import Image from "next/image";
import React, { useState } from 'react';

import { InputText } from "primereact/inputtext";
import { Colors } from "../core/Constants";

import styles from "../styles/pages/Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";
import { SearchArt} from "../components";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
 
const Search = ({searchValue}) => {

  const [showSearch, setShowSearch] = useState(false);

  return (
      !showSearch ? <SearchArt searchValue={searchValue} /> : SearchNoResults()
  );
};


const SearchNoResults = () => {
  return (
    <div className={styles.main}>
      <div className={styles.iconWrapper}>
      <FontAwesomeIcon
            icon={faGrinBeamSweat}
            className={styles.resultIcon}
            color={Colors.lighterGrey}
            />
      </div>
      <div className={styles.footerdiv}>
        <h1>{`Sorry, we couldn't find any results for this search.`}</h1>
        <p>Maybe give one of these a try?</p>
        <span className="p-input-icon-right">
          <i className="pi pi pi-search" />
          <InputText placeholder="Enter your search..." />
        </span>
      </div>
    </div>
  );
}

export default Search;

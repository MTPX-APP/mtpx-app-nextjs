import {Chips} from 'primereact/chips';
import TabHeader from "./TabHeader";
import { discoverTabLinks, imageAssets } from "../core/Constants";
import styles from "../styles/components/Discover.module.scss";
import CustomSelect from "./CustomSelect";
import Label from "./Label";
import Filter from "./Filter";
import { useState } from "react";
import ArtInfoView from "./ArtInfoView";
import MintedPixLoader from "./MintedLoader";

const Discover = () => {
  const [value, setValue] = useState();
  const [filter, setFilter] = useState(false);  
  const [tagValue, setTagValue] = useState(null);

  const onValChange = (e) => {
    setValue(e.target.value);
  };
  
  // Handle the filter click toggle
  const handleFilter = () => {
      return !filter ? setFilter(true) : setFilter(false);    
  }

  const handleTag = (value) => {
    setTagValue(value);
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Discover</h3>
      <div className={` ${styles.discoverField}`}>
        <CustomSelect />
        <TabHeader links={discoverTabLinks} />
        <Filter filterState={filter} handleFilterClick={handleFilter} />
      </div>
     
      <div className={`${styles.discoverGrid} ${!filter ? styles.discoverFilterWrapper : '' } `}>
        <div className={`p-d-flex p-flex-column ${styles.discoverCol}`}>
          <Label text="PRICE"></Label>
          <CustomSelect className={`${styles.discoverFilterField}`} />
        </div>
        <div className={`p-d-flex p-flex-column ${styles.discoverCol}`}>
          <Label text="LIKES"></Label>
          <CustomSelect />
        </div>
        <div className={`p-d-flex p-flex-column ${styles.discoverCol}`}>
          <Label text="VIEWS"></Label>
          <CustomSelect />
        </div>
        <div className={`p-d-flex p-flex-column ${styles.discoverCol}`}>
          <Label text="TAGS"></Label>
          <Chips 
            className={styles.chipInput}
            value={tagValue} 
            onChange={(e) => handleTag(e.value)} 
            max={5} 
            allowDuplicate={false}></Chips>
        </div>
      </div>
      <div
        className={`${styles.discoverCard}`}
      >
        <ArtInfoView
          artName={"Amazing Art"}
          price={"2.5"}
          quantity={"3 left"}
          userImage={imageAssets.SamepleUser1}
          mintImage={imageAssets.SamepleImage1}
          userName={"E Cole."}
          burnPrice={"0.03"}
          likes={405}
          isVerified={true}

        />
        <ArtInfoView
          artName={"Amazing Art"}
          price={"2.5"}
          quantity={"3 left"}
          userImage={imageAssets.SamepleUser2}
          mintImage={imageAssets.SamepleImage8}
          userName={"E Cole."}
          burnPrice={"0.03"}
          likes={405}
          isVerified={true}
        />
        <ArtInfoView
          artName={"Amazing Art"}
          price={"2.5"}
          quantity={"3 left"}
          userImage={imageAssets.SamepleUser3}
          mintImage={imageAssets.SamepleImage3}
          userName={"E Cole."}
          burnPrice={"0.03"}
          likes={405}
          isVerified={false}
        />
        <ArtInfoView
          artName={"Amazing Art"}
          price={"2.5"}
          quantity={"3 left"}
          userImage={imageAssets.SamepleUser4}
          mintImage={imageAssets.SamepleImage4}
          userName={"E Cole."}
          burnPrice={"0.03"}
          likes={405}
          isVerified={true}
        />
        <ArtInfoView
          artName={"Amazing Art"}
          price={"2.5"}
          quantity={"3 left"}
          userImage={imageAssets.SamepleUser5}
          mintImage={imageAssets.SamepleImage5}
          userName={"E Cole."}
          burnPrice={"0.03"}
          likes={405}
          isVerified={false}
        />
      </div>
      <div className={styles.loader}><MintedPixLoader /></div>
    </div>
  );
};

export default Discover;

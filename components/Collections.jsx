import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import CreateCollection from './CreateCollection';
import Modal from  "../components/Modal";
import { SelectButton } from 'primereact/selectbutton';
import { imageAssets } from "../core/Constants";
import Image from "next/image";


const Collections = ({ styles }) => {

  const [click, setClick]=useState(false);
  
  const [collection, setCollection] = useState('mintedpix');
  const collectionOptions = [
    {value: 'mintedpix', name: 'MTPX', image: imageAssets.MTPXCoin},
    {value: 'text', name: 'TEST', image: ''},    
  ];

  const collectionTemplate = (option) => {
      return (
        <Card className={`collectioncard`}>
          {option.image !== '' ? 
          <Image width={50} height={50} src={option.image} className={`collectionphoto`} alt={option.name} /> : <Avatar 
            width={50} height={50}
            icon="pi pi-check" shape="circle"
            className={`collectionavatar`} 
            src={option.image} />
        }
          <h5 className={`collectionname`}>{option.name}</h5>
        </Card>
      );
  }

  const handleCollection = (value) => {
    setCollection(value);
  }

  const handleAddNewCollection = () => {  
    setClick(true); 
  }
  
  return (
    <>
    <Modal show={click} onClose={() => setClick(false)}>
      <CreateCollection/>
    </Modal>
      {" "}
      <div className={styles.collectionHeaderSection}>
        <div>
          <h3 id="collection" name="collection" className={styles.h3}>
          Choose collection
          </h3>
          <div className={styles.sliderlabel}>
            Choose an existing collection or create a new ERC-721
          </div>
        </div>
        <Button onClick={handleAddNewCollection}
          label="Add "
          iconPos="right"
          icon="pi pi-plus"
          className={`p-button-rounded ${styles.btnNewERC}`}>
        </Button>
      </div>
      <div className="collection-wrapper">
        <SelectButton 
          unselectable={false}
          value={collection} 
          options={collectionOptions} 
          onChange={(e) => handleCollection(e.value)} 
          itemTemplate={collectionTemplate} />
      </div>
    </>
  );
};

export default Collections;

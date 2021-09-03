import React, { useState } from "react";
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Chips } from 'primereact/chips';
import { Tooltip } from 'primereact/tooltip';

import InputItem from "../components/InputItem";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import SliderInput from "../components/SliderInput";
import AgeRestriction from "../components/AgeRestriction";
import Categories from "../components/Categories";
import DropdownItem from "../components/DropdownItem";
import CreatePreview from "../components/CreatePreview";
import { FileUpload } from 'primereact/fileupload';
import FolowSteps from "../components/FolowSteps";
import CreateGuidelines from "../components/CreateGuidelines";
import HeaderBreadCrumbs from "../components/HeaderBreadcrumbs";
import TermsAgreement from "../components/TermsAgreement";
import Modal from  "../components/Modal";

import styles from "../styles/pages/CreateSingle.module.scss";
import { imageAssets } from "../core/Constants";


const CreateSingle = () => {
  // UseTranslation
  const { t } = useTranslation('createSingle');

  const [submitClick,setSubmitClick]=useState(false);
  const [tagValue, setTagValue] = useState(null);

  // Preview
  const [previewClick,setPreviewClick]=useState(false);
  const [artName, setArtName] = useState('');
  const [price, setPrice] = useState(null);
  const [userName, setUserName] = useState('John Doe');
  const [burnPrice, setBurnPrice] = useState(null);

   // Handle OnSale
   const [onSaleValue, setOnSaleValue] = useState(false);
   const [allSaleValue, setAllSaleValue] = useState(false);

   // Instant Price
   const [instantPriceValue, setInstantPriceValue] = useState(false);

   // Unlock Price
   const [unlockPriceValue, setUnlockPriceValue] = useState(false);

   // Minted Challenge
   const [challengeValue, setChallengeValue] = useState(false);

  // Tags
  const handleTag = (value) => {
    setTagValue(value);
  }

  // Upload
  const onBasicUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }

  // OnSale Function
  const handleOnSale = value => {
    setOnSaleValue(value);
    value ? setAllSaleValue(true) : setAllSaleValue(false);
  }

  // Challenge Function
  const handleOnChallenge = value => {
    setChallengeValue(value);
  }

  // Instant Price Function
  const handleInstantPrice = value => {
    setInstantPriceValue(value);
    value ? setAllSaleValue(true) : setAllSaleValue(false);
  }

  // Unlock Price Function
  const handleUnlockPrice = value => {
    setUnlockPriceValue(value);
  }

  // Handle Preview
  const handleArtNameChange = (e) => {    
    setArtName(e.target.value);
  }

  const handlePriceChange = (e) => {    
    setPrice(e.target.value);
  }
  
  return (
    /*Main div*/
    
    <>
      <Tooltip target=".pageTooltip"/>

      <Modal show={submitClick} onClose={() => setSubmitClick(false)}>
        <FolowSteps/>
      </Modal>

      <Modal show={previewClick} onClose={() => setPreviewClick(false)}>
        <div className={styles.previewWrapper}>
          <CreatePreview
            mintImage={imageAssets.SamepleImage7}
            userImage={imageAssets.SamepleUser2}
            artName={artName} 
            price={price} 
            userName={userName} 
            burnPrice={burnPrice}/>
        </div>
      </Modal>
      
      <HeaderBreadCrumbs
        backLink={`/create`}
        backLinkName={`Back`}
        breadcrumbBackName={`Create`}
        breadcrumbCurrentPageName={`Single Collection`}
      />

      <div className={styles.maindiv}>
        {/*Form component div*/}
        <div className={`${styles.formdiv}`}>
          {/*Header div*/}
          <div className={styles.headerdiv}>
            <h1>Create single collectible</h1>
          </div>

          {/*Upload files*/}
          <h3>Upload Files</h3> 
          <Card id="upload" className={styles.uploadcard}>
            <div>
              <h5> PNG, GIF, WEBP, MP4 or MP3. MAX 1GB</h5>              
            </div>
            <div className={styles.uploadWrapper}>
              <FileUpload mode="basic" name="demo[]" url="" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} auto chooseLabel="Browse"  />
            </div>
          </Card>

          <h3>Item Details</h3>

          <div>
            <label
              htmlFor={`artName`}
              className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
            >
              {`Item Name`}
            </label>
            <InputText
              id={`artName`}
              name={`artName`}
              aria-describedby={`Item Name`}
              className={`p-d-block ${styles.inputtext}`}
              placeholder={`eg. Artwork Name`}
              autoComplete={`artName`} required 
              onChange={handleArtNameChange}
            />
          </div>

          {/*Description*/}

          <div>
            <label
              htmlFor={`description`}
              className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
            >
              {`Item Description`}
            </label>
            <InputTextarea
                rows={5}
                cols={30}
                name="description"
                placeholder="e.g Artwork description"
                autoResize
                className={`p-d-block ${styles.inputtext} ${styles.textarea}`}
              />
          </div>

          <label className={`p-d-block ${styles.inputlabel}`}>
            Tags (5 Tags allowed) 
            <span
              className="pageTooltip" data-pr-tooltip="Start typing tags, hit return to complete. Hit backspace or 'x' to remove a tag." data-pr-position="top"
            ><i className={`pi pi-question-circle tooltip-icon`}></i></span>
          </label>

          <Chips 
            className={styles.chipInput}
            value={tagValue} 
            onChange={(e) => handleTag(e.value)} 
            max={5} 
            allowDuplicate={false}
            separator=","></Chips>



          <div className={`${styles.inputdisplay} ${styles.royalty}`}>
            <div className={styles.field}>
              <DropdownItem
                name="royalties"
                label="Royalties"
                placeholder="Select One"
                styles={styles}
              />
              <small>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</small>
            </div>
          </div>

          <div className={`${styles.inputdisplay} ${styles.misc}`}>
          <div className={styles.size}>
              <InputItem
                name="size"
                label="Size"
                placeholder="e.g Size"
                styles={styles}
              />
            </div>
            <div className={styles.properties}>
              <InputItem
                name="properties"
                label="Properties"
                placeholder="e.g Properties"
                styles={styles}
              />
            </div>
          </div>
  
          {/*Divider*/}
          <Divider className={styles.divider} />

          {/*Put on Sale */}
          <SliderInput
            title="Put on sale for bids"
            name="sale"
            label="This art will be on sale for auction"
            styles={styles}
            value={onSaleValue}
            handleChange={handleOnSale}
          />
         
            {/*Instant Price*/}
            <SliderInput
              title="Instant sale price"
              name="sale price"
              label="Set a fix price for this art to be purchase"
              styles={styles}
              value={instantPriceValue}
              handleChange={handleInstantPrice}
            />
            <div className={`${styles.instantPriceSection} ${instantPriceValue && styles.active}`}>
            <div>
              <div className={`p-inputgroup ${styles.inputGroup}`}>
                <InputText
                  id={`saleprice`}
                  name={`saleprice`}
                  placeholder={`Enter price`} 
                  onChange={handlePriceChange}  
                />
                  <span className="p-inputgroup-addon">ETH</span>
              </div>
            </div>              
              <label
                htmlFor="saleprice"
                className={`p-d-block ${styles.sliderlabel}`}
              >
                Service Fee : <strong>2.5%</strong>
              </label>
              <label
                htmlFor="saleprice"
                className={`p-d-block ${styles.sliderlabel}`}
              >
                You will recieve : <strong>0 ETH</strong>
              </label>
            </div>
            
            <div className={`${styles.allSaleSection} ${(instantPriceValue || onSaleValue)  && styles.active}`}>
              {/*Unlock*/}
              <SliderInput
                title="Unlock once purchased"
                name="unlock"
                label="Content will be unlocked after successful transaction"
                styles={styles}
                value={unlockPriceValue}
                handleChange={handleUnlockPrice}
              />
              <div className={`${styles.unlockPriceSection} ${unlockPriceValue && styles.active}`}>
                <div>
                  <label
                    htmlFor={`unlockcode`}
                    className={`p-d-block ${styles.inputlabel} ${styles.mt} ${styles.nomargin}`}
                  >
                    {`Digital key, code to redeem or link to a file`}
                  </label>
                  <InputText
                    id={`unlockcode`}
                    name={`unlockcode`}
                    aria-describedby={`Digital key, code to redeem or link to a file`}
                    className={`p-d-block ${styles.inputtext}`}
                    placeholder={`Tip: Markdown syntax is supported`}
                  />
                </div>
            </div>
          </div>
          
         
          {/*Challenge*/}
          <SliderInput
            title="MintedPix Challenge"
            name="nft"
            label="Participate in a challenge to showoff your skills"
            styles={styles}
            value={challengeValue}
            handleChange={handleOnChallenge}
          />
          <div className={`${styles.challengeSection} ${challengeValue && styles.active}`}>
            <DropdownItem
              name="code"
              label="Challenge Name"
              placeholder="Select a challenge"
              styles={styles}
            />
          </div>
           {/*Divider*/}
           <Divider className={styles.divider} />


          {/*Categories Component*/}
          <Categories styles={styles} />

          {/*Divider*/}
          <Divider className={styles.divider} />

          {/*AgeRestriction component*/}
          <AgeRestriction styles={styles} />
          
          {/*Divider*/}
          <Divider className={styles.divider} />

          <CreateGuidelines />

          <TermsAgreement name={`terms`} />

          {/*Create Mint button*/}
          <div className={styles.buttondiv}>
            <Button
              onClick={setPreviewClick}
              label="Preview"
              iconPos="right"
              className={`p-button-rounded ${styles.btnPreview}`}
            />
            <Button
              onClick={setSubmitClick}
              label="Create Mint"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="p-button-rounded"
            />
          </div>
        </div>

        {/*Card Component*/}
        <div className={`${styles.profilecarddiv}`}>
          <h3>Preview</h3>
          <CreatePreview
            mintImage={imageAssets.SamepleImage7}
            userImage={imageAssets.SamepleUser2}
            artName={artName} 
            price={price} 
            userName={userName} 
            burnPrice={burnPrice}/>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','header','createGuidelines','createSingle', 'termsAgreement']),
  },
})


export default CreateSingle;

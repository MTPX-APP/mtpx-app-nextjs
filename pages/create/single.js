import React, { useState, useEffect, useRef } from "react";
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { classNames } from 'primereact/utils';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Chips } from 'primereact/chips';
import { Tooltip } from 'primereact/tooltip';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from 'primereact/fileupload';
import { useForm, Controller } from "react-hook-form";
import { BlockUI } from 'primereact/blockui';
import { Toast } from 'primereact/toast';

import Util from '../../core/Utils/Util';
import InputItem from "../../components/InputItem";
import SliderInput from "../../components/SliderInput";
import AgeRestriction from "../../components/AgeRestriction";
import Categories from "../../components/Categories";
import DropdownItem from "../../components/DropdownItem";
import CreatePreview from "../../components/CreatePreview";
import FolowSteps from "../../components/FolowSteps";
import CreateGuidelines from "../../components/CreateGuidelines";
import HeaderBreadCrumbs from "../../components/HeaderBreadcrumbs";
import TermsAgreement from "../../components/TermsAgreement";
import Modal from  "../../components/Modal";

import styles from "../../styles/pages/CreateSingle.module.scss";
import { imageAssets, categoryList } from "../../core/Constants";


const Single = () => {
  const [blockedPanel, setBlockedPanel] = useState(false);
  const pageToast = useRef(null);

  // UseTranslation
  const { t } = useTranslation('createSingle');

  const [submitClick,setSubmitClick]=useState(false);
  const [tagValue, setTagValue] = useState(null);

  // Preview
  const [previewClick,setPreviewClick]=useState(false);
  const [artName, setArtName] = useState('');
  const [mintImage, setMintImage] = useState(imageAssets.errorImage.src);
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

    setValue('tags', value);
    getValues('tags');
  }

  // Upload
  const onBasicUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }

  // OnSale Function
  const handleOnSale = value => {
    setOnSaleValue(value);   
    setValue('isOnSaleBid', value);
    value ? setAllSaleValue(true) : setAllSaleValue(false);
  }

  // Challenge Function
  const handleOnChallenge = value => {
    setValue('isMintedChallenge', value);
    setChallengeValue(value);
  }

  // Instant Price Function
  const handleInstantPrice = value => {
    setInstantPriceValue(value);
    setValue('isInstantPrice', value);
    value ? setAllSaleValue(true) : setAllSaleValue(false);
  }

  // Unlock Price Function
  const handleUnlockPrice = value => {
    setValue('isUnlock', value);
    setUnlockPriceValue(value);
  }

  // Handle Preview
  const handleArtNameChange = (e) => {    
    setArtName(e.target.value);
  }

  const handlePriceChange = (e) => {    
    setPrice(e.target.value);
  }

  // FormSubmit
  const [formData, setFormData] = useState({
    tags: tagValue
  });
  const [royalties, setRoyalties] = useState(
    [
      { name: '10%', code: '10' },
      { name: '20%', code: '20' },
      { name: '30%', code: '30' },
      { name: '40%', code: '40' },
      { name: '50%', code: '50' },
    ]
  );

  const [categories, setCategories] = useState(
    [
      { name: 'Anime', code: 'anime' },
      { name: 'Art', code: 'art' },
      { name: 'Games', code: 'games' },
      { name: 'Illustration', code: 'illustration' },
      { name: 'Public Figures', code: 'publicfigures' },
    ]
  );

  const [ages, setAges] = useState(
    [
      { name: 'All ages', code: 'all' },
      { name: 'PG', code: 'PG' },
      { name: 'PG-13', code: 'PG13' },
      { name: 'R-18+', code: 'R18' },
    ]
  );

  const [challengies, setChallenges] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const defaultValues = {
    itemFile: '',
    itemName: '',
    itemDescription: '',
    tags: tagValue,
    royalty: null,
    size: '',
    properties: '',
    isOnSaleBid: false,
    isInstantPrice: false,
    instantPrice: '',
    isUnlock: false,
    unlockCode: '',
    isMintedChallenge: false,
    challenge: null,
    category: null,
    age: null,
    accept: false
  }

  const { 
    register,
    control, 
    getValues,
    formState: { errors }, 
    handleSubmit, 
    reset, 
    setFocus,   
    setValue, 
  } = useForm({ defaultValues });

 

  const onSubmit = (data) => {
    console.log(data);

    if (getValues('itemFile') === '') {
      pageToast.current.show({severity: 'error', summary: 'Image required', detail: 'Please upload your art image'});  
    }
      // setFormData(data);
      // setShowMessage(true);
      // setBlockedPanel(true);
      // reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };


  /* FILE UPLOAD */

  const fileUploadRef = useRef(null);
  const [fileName, setFileName] = useState(null);
  const [fileDate, setFileDate] = useState(null);
  const [totalSize, setTotalSize] = useState(0);

  const myUploader = (event) => {
      //console.log(event);
      //event.files == files to upload
  }


  /* Clear upload template */
  const onTemplateClear = () => {
      console.log('clear');
      setMintImage(imageAssets.errorImage.src);
      setTotalSize(0);
      setFileName(null);
      setFileDate(null);
      setValue('itemFile', '');
  }

  /* Verified Image Fail */
  const onValidationFail = (res) => {
    pageToast.current.show({severity: 'error', summary: 'Error', detail: 'Theres issue with the file you uploaded, please check the supported file type or size of your image'});  
  }

  const headerTemplate = (options) => {
    const { chooseButton, cancelButton } = options;
    return (
        <>
            {chooseButton}
            {cancelButton}
        </>
    );
  }
  const customItemTemplate = (file, props) => {
    // console.log(file);
    if (file.objectURL) {
      setMintImage(file.objectURL);
      setFileName(file.name);
      setFileDate(new Date().toLocaleDateString());
      setValue(file.name);
      setValue('itemFile', file.name)
    }
    //setFileName(file.name);
    //setFileDate(new Date().toLocaleDateString());
        // file: Current file object.
    // options.onRemove: Event used to remove current file in the container.
    // options.previewElement: The default preview element in the container.
    // options.fileNameElement: The default fileName element in the container.
    // options.sizeElement: The default size element in the container.
    // options.removeElement: The default remove element in the container.
    // options.formatSize: The formated size of file.
    // options.element: Default element created by the component.
    // options.props: component props.
  }

  useEffect(() => {
    if(blockedPanel) {
        setTimeout(() => {
          setBlockedPanel(false);
          pageToast.current.show({severity: 'success', summary: 'Success Message', detail: 'Update Successfully'});   
        }, 3000);
    }
  }, [blockedPanel]);


  return (
    /*Main div*/
    
    <>
      <Toast ref={pageToast} /> 
      <Tooltip target=".pageTooltip"/>

      <Modal show={submitClick} onClose={() => setSubmitClick(false)}>
        <FolowSteps/>
      </Modal>

      <Modal show={previewClick} onClose={() => setPreviewClick(false)}>
        <div className={styles.previewWrapper}>
            <div className={styles.preview}>
              <img src={mintImage} />
            </div>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/*Header div*/}
          <div className={styles.headerdiv}>
            <h1>Create single collectible</h1>
          </div>

          {/*Upload files*/}
          <h3>Upload Files</h3> 
          
            
          <Card id="upload" className={`${styles.uploadcard}`}>
            <div>
              <h5> PNG, GIF, WEBP, MP4 or MP3. MAX 1GB</h5>              
            </div>
            <div className={styles.uploadWrapper}>
              <FileUpload 
                // mode="basic" 
                ref={fileUploadRef}
                name="itemFile" 
                url="" 
                accept="image/*" 
                maxFileSize={1000000} 
                onError={onTemplateClear}
                onClear={onTemplateClear}
                onUpload={onBasicUpload} 
                onValidationFail={onValidationFail}
                itemTemplate={customItemTemplate} 
                headerTemplate={headerTemplate} 
                uploadHandler={myUploader}
                chooseLabel="Browse"           
                />
            </div>
            { (fileName && fileDate) && (
            <div className={styles.fileResult}>
              <p>
                { fileName }
              </p>
              <p>
                { fileDate }
              </p>
            </div>
            )}
          </Card>
          
          <h3>Item Details</h3>
          <div>
            <label
              htmlFor={`itemName`}
              className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
            >
              {`Item Name`}
            </label>
            <Controller 
              name="itemName" 
              control={control} 
              rules={{ 
                required: 'Item name is required.',
                maxLength: 140,
              }} 
              render={({ field, fieldState }) => (
                <InputText 
                  id={field.name} {...field} 
                  autoFocus
                  aria-describedby="itemName"
                  maxLength={140}
                  placeholder="Enter your item name"
                  // onChange={(e) => handleArtNameChange(e)}
                  className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                  />
            )} />
            {getFormErrorMessage('itemName')}
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
            id="tags"
            name="tags"
            separator=","                
            ></Chips>



          <div className={`${styles.inputdisplay} ${styles.royalty}`}>
            <div className={styles.field}>
               <label
                htmlFor={`description`}
                className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
                >
                {`Royalties`}
              </label>
              <Controller 
                name="royalty" 
                control={control} 
                rules={{ required: 'Royalty is required.' }} 
                render={({ field, fieldState }) => (
                  <>
                  <Dropdown
                    id={field.name}
                    value={field.value} 
                    onChange={(e) => field.onChange(e.value)}
                    options={royalties}
                    optionLabel="name"
                    placeholder="Select one"
                    className={`${styles.dropdown} ${classNames({'p-invalid': fieldState.invalid })}`}
                    dropdownIcon={"pi pi-angle-down"}
                  />
                  </>
                )} />
                {getFormErrorMessage('royalty')}
              <div><small>Suggested: 0%, 10%, 20%, 30%. Maximum is 50%</small></div>
            </div>
          </div>

          <div className={`${styles.inputdisplay} ${styles.misc}`}>
            <div className={styles.size}>
              <label
                htmlFor={`size`}
                className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
              >
                {`Size`}
              </label>
              <InputText
                id={`size`}
                name={`size`}
                aria-describedby={`size`}
                className={`p-d-block ${styles.inputtext}`}
                placeholder={`e.g Size`}
                {...register("size")}  
              />           
            </div>
            <div className={styles.properties}>
              <label
                htmlFor={`properties`}
                className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
              >
                {`Properties`}
              </label>
              <InputText
                id={`properties`}
                name={`properties`}
                aria-describedby={`properties`}
                className={`p-d-block ${styles.inputtext}`}
                placeholder={`e.g properties`}
                {...register("properties")}  
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
              title="Buy now price"
              name="sale price"
              label="Set a fix price for this art to be purchase"
              styles={styles}
              value={instantPriceValue}
              handleChange={handleInstantPrice}
            />
            <div className={`${styles.instantPriceSection} ${instantPriceValue && styles.active}`}>
              <div>
                <div className={`p-inputgroup ${styles.inputGroup}`}>
                  <Controller 
                    name="instantPrice" 
                    control={control} 
                    rules={
                      { 
                        required: {
                          value: instantPriceValue ? true : false,
                          message: 'Buy now price is required.'
                        },
                        maxLength: 140,
                      }
                    } 
                    render={({ field, fieldState }) => (
                      <>
                      <InputText 
                        id={field.name} {...field} 
                        autoFocus
                        aria-describedby="instantPrice"
                        maxLength={140}
                        placeholder="Enter buy now price"
                        // onChange={handlePriceChange} 
                        className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                        />
                        <span className="p-inputgroup-addon">ETH</span>
                        </>
                  )} />
                </div>
                {getFormErrorMessage('instantPrice')}
              </div>
              <div className={styles.fees}>              
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
                  
                  <Controller 
                    name="unlockCode" 
                    control={control} 
                    rules={
                      { 
                        required: {
                          value: unlockPriceValue ? true : false,
                          message: 'Unlock is required.'
                        },
                        maxLength: 256,
                      }
                    } 
                    render={({ field, fieldState }) => (
                      <InputText 
                        id={field.name} {...field} 
                        autoFocus
                        aria-describedby="unlockCode"
                        maxLength={256}
                        placeholder="Tip: Markdown syntax is supported"
                        className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                        />
                  )} />
                </div>
                {getFormErrorMessage('unlockCode')}
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


            <label
              htmlFor={`challenge`}
              className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
              >
              {`Challenge Name`}
            </label>
            <Controller 
              name="challenge" 
              control={control} 
              rules={
                { 
                  required: {
                    value: challengeValue ? true : false,
                    message: 'Challenge is required.'
                  }
                }
              } 
              render={({ field, fieldState }) => (
                <Dropdown
                  id={field.name}
                  value={field.value} 
                  onChange={(e) => field.onChange(e.value)}
                  options={challengies}
                  optionLabel="challenge"
                  placeholder="Select one"
                  className={`${styles.dropdown} ${classNames({'p-invalid': fieldState.invalid })}`}
                  dropdownIcon={"pi pi-angle-down"}
                />
              )} />
              {getFormErrorMessage('challenge')}
          </div>
           {/*Divider*/}
           <Divider className={styles.divider} />

          {/*Categories Component*/}
          <div className={styles.category}>
            <h3 id="category" name="category" className={styles.h3}>
              Category
            </h3>
            {/* <label htmlFor="collection" className={`p-d-block ${styles.sliderlabel}`}>
              Select the category this belongs to: 
            </label> */}
            <div><small>Select the category this belongs to</small></div>
            <Controller 
              name="category" 
              control={control} 
              rules={
                { 
                  required: {
                    value: true,
                    message: 'Category is required.'
                  }
                }
              } 
              render={({ field, fieldState }) => (
                <MultiSelect
                  id={field.name}
                  value={field.value}
                  options={categories} 
                  onChange={(e) => field.onChange(e.value)}
                  optionLabel="name" 
                  placeholder="Select one"
                  className={`${styles.multiselect} ${classNames({'p-invalid': fieldState.invalid })}`}
                  dropdownIcon={"pi pi-angle-down"} />
              )} />
            {getFormErrorMessage('category')}
          </div>

          {/*Divider*/}
          <Divider className={styles.divider} />

          {/*AgeRestriction component*/}
          <div className={styles.AgeRestriction}>
          <Controller 
            name="age" 
            control={control} 
            rules={
              { 
                required: {
                  value: true,
                  message: 'Age requirement is required.'
                }
              }
            } 
            render={({ field, fieldState }) => (
              <AgeRestriction 
                styles={styles}
                fieldName={field.name}
                fieldView={field.value}
                fieldOnChange={(e) => field.onChange(e.value)}
                fieldStateInvalid={fieldState.invalid}
                ages={ages}
                />
            )} />
          {getFormErrorMessage('age')}
          </div>
          {/*Divider*/}
          <Divider className={styles.divider} />

          <CreateGuidelines />

          {/* Terms */}
          <Controller 
              name="accept" 
              control={control} 
              rules={{ required: true }} 
              render={({ field, fieldState }) => (
                <TermsAgreement 
                  inputId={field.name} 
                  checkValue={field.value} 
                  handleOnChange={(e) => field.onChange(e.checked)}
                  classNameInvalid={fieldState.invalid}/>
              )} />
          

          {/*Create Mint button*/}
          <div className={styles.buttondiv}>
            <Button
              type="button"
              onClick={setPreviewClick}
              label="Preview"
              iconPos="right"
              className={`p-button-rounded ${styles.btnPreview}`}
            />
            <Button
              // onClick={setSubmitClick}
              label="Create Mint"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="p-button-rounded"
            />
          </div>
          </form>
        </div>
       
        {/*Card Component*/}
        <div className={`${styles.profilecarddiv}`}>
          <h3>Preview</h3>
          <div className={styles.preview}>
            <img src={mintImage} />
          </div>
          {/* <CreatePreview
            mintImage={imageAssets.SamepleImage7}
            userImage={imageAssets.SamepleUser2}
            artName={artName} 
            price={price} 
            userName={userName} 
            burnPrice={burnPrice}/> */}
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


export default Single;

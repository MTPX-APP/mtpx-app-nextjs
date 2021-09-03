import React, {useRef, useState, useEffect} from "react";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import TermsAgreement from "../components/TermsAgreement";
import { BlockUI } from 'primereact/blockui';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import styles from "../styles/pages/Apply.module.scss";

const Apply = () => {
  const [blockedPanel, setBlockedPanel] = useState(false);
  const pageToast = useRef(null);
  
  // UseTranslation
  const { t } = useTranslation('apply');

  // Default Values
  const [countries, setCountries] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    fullName: '',
    bio: '',
    country: null,
    yearExperience: null,
    createdNFTBefore: null,
    websiteUrl: '',
    twitterUrl: '',
    dribbbleUrl: '',
    facebookUrl: '',
    instagramUrl: '',
    accept: false
  }

  const { 
    control, 
    formState: { errors }, 
    handleSubmit, 
    reset, 
    setFocus 
  } = useForm({ defaultValues });

  useEffect(() => {

    setFocus("fullName");

    if(blockedPanel) {
        setTimeout(() => {
          setBlockedPanel(false);
          pageToast.current.show({severity: 'success', summary: 'Success Message', detail: 'Update Successfully'});   
        }, 3000);
    }
  }, [blockedPanel, setFocus]);

  

  const onSubmit = (data) => {
      setFormData(data);
      setShowMessage(true);
      setBlockedPanel(true);
      reset();
  };

  const handleReset = () => {
    reset();
  }

  const getFormErrorMessage = (name) => {
      return errors[name] && <small className="p-error">{errors[name].message}</small>
  };

  return (
    <>
    <Toast ref={pageToast} /> 
    <BlockUI blocked={blockedPanel} fullScreen template={ <ProgressSpinner  style={{width: '50px', height: '50px'}} strokeWidth="4"  animationDuration=".5s"/>} />
    
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Apply as an creator</h1>
        <p>
          MintedPix strive to provide the best creator by invitation and
          approval only. We have specific guidelines on the approval process
          based on your social media presence, creativity, portfolio, influence
          and other factors from our creative team that ranges from art
          professors, artists, influencers, and much more.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h3>About you</h3>

        {/* // FULLNAME */}
        <div>
          <label
            htmlFor="fullname"
            className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
          >
            Full Name
          </label>
          <Controller 
            name="fullName" 
            control={control} 
            rules={{ 
              required: 'Full name is required.',
              maxLength: 50,
            }} 
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="fullName"
                maxLength={50}
                placeholder="Enter your full name"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('fullName')}
        </div>
        
        {/* // BIO */}
        <div>
          <label className={styles.customlabel} >Bio</label>
          <Controller 
            name="bio" 
            control={control} 
            rules={{ 
              required: 'Bio is required.',
              maxLength: 256,
            }} 
            render={({ field, fieldState }) => (
              <InputTextarea
                id={field.name} {...field} 
                rows={5}
                cols={30}
                name="bio"
                maxLength={256}
                placeholder="About yourself in a few words"
                styles={styles}
                aria-describedby="bio"
                autoResize
                className={`p-d-block ${styles.customtextarea} ${classNames({'p-invalid': fieldState.invalid })}`} 
              />
              )} />
              {getFormErrorMessage('bio')}
        </div>

        {/* // COUNTRIES */}
        <div>
          <label
            htmlFor="country"
            className={`p-d-block ${styles.inputlabel}`}
          >
            Country Location
          </label>
          <Controller 
            name="country" 
            control={control} 
            rules={{ required: 'Country is required.' }} 
            render={({ field, fieldState }) => (
              <Dropdown
                id={field.name}
                value={field.value} 
                onChange={(e) => field.onChange(e.value)}
                options={countries}
                optionLabel="country"
                placeholder="Select your location"
                className={`${styles.dropdown} ${classNames({'p-invalid': fieldState.invalid })}`}
                dropdownIcon={"pi pi-angle-down"}
              />
            )} />
            {getFormErrorMessage('country')}
        </div>
        
        {/* // EXPERIENCE */}
        <div>
          <label
            htmlFor="experience"
            className={`p-d-block ${styles.inputlabel}`}
          >
            How many years of experience as a designer/artist/creator?
          </label>
          <Controller 
            name="experiences" 
            control={control} 
            rules={{ required: 'Years of experiences is required.' }} 
            render={({ field, fieldState }) => (
              <Dropdown
                id={field.name}
                value={field.value} 
                onChange={(e) => field.onChange(e.value)}
                options={experiences}
                optionLabel="experiences"
                placeholder="Select one"
                className={`${styles.dropdown} ${classNames({'p-invalid': fieldState.invalid })}`}
                dropdownIcon={"pi pi-angle-down"}
              />
            )} />
            {getFormErrorMessage('experiences')}
        </div>
        
        {/* // CreatedNFTBefore */}
        <div>
          <label
            htmlFor="createdNftBefore"
            className={`p-d-block ${styles.inputlabel}`}
          >
            Have you ever created nft before?
          </label>
          <Controller 
            name="createdNftBefore" 
            control={control} 
            rules={{ required: 'Created NFT before is required.' }} 
            render={({ field, fieldState }) => (
              <Dropdown
                id={field.name}
                value={field.value} 
                onChange={(e) => field.onChange(e.value)}
                optionLabel="createdNftBefore"
                placeholder="Select one"
                className={`${styles.dropdown} ${classNames({'p-invalid': fieldState.invalid })}`}
                dropdownIcon={"pi pi-angle-down"}
              />
            )} />
            {getFormErrorMessage('createdNftBefore')}
        </div>
        
        <h3>Social</h3>

        {/* // Website */}
        <div>
          <label
            htmlFor="websiteUrl"
            className={`p-d-block ${styles.inputlabel}`}
          >
          Portfolio or Website
          </label>
          <Controller 
            name="websiteUrl" 
            control={control} 
            rules={{ 
              pattern: Util.isValidURL()
            }}
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="websiteUrl"
                maxLength={50}
                placeholder="Enter URL"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('websiteUrl')}
        </div>

        {/* // Twitter */}
        <div>
          <label
            htmlFor="twitterUrl"
            className={`p-d-block ${styles.inputlabel}`}
          >
          Twitter
          </label>
          <Controller 
            name="twitterUrl" 
            control={control} 
            rules={{ 
              pattern: Util.isValidTwitterURL()
            }}
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="twitterUrl"
                maxLength={50}
                placeholder="Enter Twitter URL"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('twitterUrl')}
        </div>

        {/* // Dribbble */}
        <div>
          <label
            htmlFor="dribbbleUrl"
            className={`p-d-block ${styles.inputlabel}`}
          >
          Dribbble
          </label>
          <Controller 
            name="dribbbleUrl" 
            control={control} 
            rules={{ 
              pattern: Util.isValidDribbbleURL()
            }}
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="dribbbleUrl"
                maxLength={50}
                placeholder="Enter Dribbble URL"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('dribbbleUrl')}
        </div>
        
        {/* // Facebook */}
        <div>
          <label
            htmlFor="facebookUrl"
            className={`p-d-block ${styles.inputlabel}`}
          >
          Facebook
          </label>
          <Controller 
            name="facebookUrl" 
            control={control} 
            rules={{ 
              pattern: Util.isValidFacebookURL()
            }}
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="facebookUrl"
                maxLength={50}
                placeholder="Enter Facebook URL"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('facebookUrl')}
        </div>
        
        {/* // Instagram */}
        <div>
          <label
            htmlFor="instagramUrl"
            className={`p-d-block ${styles.inputlabel}`}
          >
          Instagram
          </label>
          <Controller 
            name="instagramUrl" 
            control={control} 
            rules={{ 
              pattern: Util.isValidInstagramURL()
            }}
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="instagramUrl"
                maxLength={50}
                placeholder="Enter Instagram URL"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('instagramUrl')}
        </div>
        
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
        
        <div className={styles.buttondiv}>
          <Button 
            className={`p-button-rounded ${styles.btnSubmit}`}
            onClick={handleSubmit}
          >Submit application</Button>
          <Button
            className={`p-button-text p-button-secondary ${styles.btnClear}`}
            label="Clear all"
            type="reset"
            onClick={handleReset}
          />
        </div>
      </div>
      </form>
    </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','header', 'apply', 'termsAgreement']),
  },
})

export default Apply;

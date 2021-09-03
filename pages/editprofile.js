import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import Avatar from "../components/Avatar";
import { imageAssets } from "../core/Constants";
import { CustomButton } from "../components";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { BlockUI } from 'primereact/blockui';
import { Toast } from 'primereact/toast';
import HeaderBreadCrumbs from "../components/HeaderBreadcrumbs";
import styles from "../styles/pages/EditProfile.module.scss";


const EditProfile = () => {
  const [blockedPanel, setBlockedPanel] = useState(false);
  const pageToast = useRef(null);

  // Default Values
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    displayName: '',
    email: '',
    customUrl: '',
    bio: '',
    country: null,
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

    setFocus("displayName");

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
      <HeaderBreadCrumbs
        backLink={`/profile`}
        backLinkName={`Back`}
        breadcrumbBackName={`Profile`}
        breadcrumbCurrentPageName={`Edit Profile`}
      />

      <div className={styles.container}>
        <div className={` ${styles.title}`}>
          <h2>Edit Profile</h2>
          <p>
            You can set preferred display name, create
            <span> your profile URL</span> and manage other personal settings.
          </p>
        </div>
        <div className={`${styles.editContainer}`}>
          <div className={` p-col-12 p-md-4 p-lg-4 ${styles.editImage}`}>
            <Avatar
              src={imageAssets.SamepleUser2}
              width={130}
              height={130}
              layout="responsive"
              objectFit="cover"
            />
            <div className={styles.editInfo}>
              <h3 className={styles.editTitle}>Profile Photo</h3>
              <p>We recommend an image of atleast 400x400 Gifs work too</p>
              <CustomButton text="Upload" />
            </div>
          </div>
          <div className={` p-col-12 p-md-8 p-lg-8 ${styles.fieldContainer}`}>
            <form onSubmit={handleSubmit(onSubmit)}>

              <h3 className={styles.paddingTopNone}>Account Info</h3>

              {/* // DISPLAYNAME */}
              <div>
                <label
                  htmlFor="displayName"
                  className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
                >
                  Display Name
                </label>
                <Controller 
                  name="displayName" 
                  control={control} 
                  rules={{ 
                    required: 'Display name is required.',
                    maxLength: 50,
                  }} 
                  render={({ field, fieldState }) => (
                    <InputText 
                      id={field.name} {...field} 
                      autoFocus
                      aria-describedby="displayName"
                      maxLength={50}
                      placeholder="Enter your display name"
                      className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                      />
                )} />
                {getFormErrorMessage('displayName')}
              </div>

              {/* // EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
                >
                  Email for notifications
                </label>
                <Controller 
                  name="email" 
                  control={control} 
                  rules={{ 
                    required: 'Email is required.',
                    pattern: Util.isValidEmail(),
                    maxLength: 50,
                  }} 
                  render={({ field, fieldState }) => (
                    <InputText 
                      id={field.name} {...field} 
                      autoFocus
                      aria-describedby="email"
                      maxLength={50}
                      placeholder="Enter your email address"
                      className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                      />
                )} />
                {getFormErrorMessage('email')}
              </div>


              {/* // CUSTOMURL */}
              <div>
                <label
                  htmlFor="customUrl"
                  className={`p-d-block ${styles.inputlabel} ${styles.mt}`}
                >
                  Custom URL
                </label>
                <Controller 
                  name="customUrl" 
                  control={control} 
                  rules={{ 
                    maxLength: 25,
                  }} 
                  render={({ field, fieldState }) => (
                    <div className={`p-inputgroup ${styles.inputGroup}`}>
                      <span className="p-inputgroup-addon">mintedpix.com/</span>
                      <InputText 
                        id={field.name} {...field} 
                        autoFocus
                        aria-describedby="customUrl"
                        keyfilter={/[0-9a-z]+$/}
                        maxLength={25}
                        placeholder="Enter your custom url name"
                        className={`${classNames({'p-invalid': fieldState.invalid })}`} 
                        />
                    </div>
                )} />
                {getFormErrorMessage('customUrl')}
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

              <div className={styles.verifiedWrapper}>
                <p className={styles.editTitle}>Verification</p>
                <div className={styles.container}>
                  <div className={styles.content}>
                    <p>
                    MintedPix strive to provide the best creator by invitation and approval only. We have specific guidelines on the approval process based on your social media presence, creativity, portfolio, influence and other factors from our creative team that ranges from art professors, artists, influencers, and much more.
                    </p>   
                  </div>
                  <div className={styles.btns}>
                    <Link href="/apply" passHref>
                      <Button 
                        type="button"
                        className={`p-button-rounded ${styles.btnApply}`}
                        >Apply</Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${styles.buttondiv}`}>
                <Button 
                  className={`p-button-rounded ${styles.btnSubmit}`}
                  onClick={handleSubmit}
                >Save</Button>
                <Button
                  className={`p-button-text p-button-secondary ${styles.btnClear}`}
                  label="Clear all"
                  type="reset"
                  onClick={handleReset}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toast ref={pageToast} /> 
    </>
  );
};

export default EditProfile;

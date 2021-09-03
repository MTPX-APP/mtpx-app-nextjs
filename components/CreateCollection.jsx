import React, { useRef } from "react";
import cn from "classnames";
import styles from "../styles/components/CreateCollection.module.scss";
import { InputTextarea } from "primereact/inputtextarea";
import InputItem from "../components/InputItem";
import { Avatar } from 'primereact/avatar';
import { FileUpload } from 'primereact/fileupload';


const Report = ({ className }) => {

  const toast = useRef(null);
  const fileUploadRef = useRef(null);

  const onBasicUpload = () => {
    toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Collection</div>
      <div className={styles.container}>
        <div className={styles.collectionImage}>
          <Avatar icon="pi pi-image" size="xlarge" shape="circle" className={styles.image}/>
          <div className={styles.content}>
            <p>
            We recommend an image
            of at least 400x400. Gifs work too.
            </p>
            <FileUpload mode="basic" name="demo[]" url="" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} auto chooseLabel="Browse"  />
          </div>
        </div>


        <InputItem
          name="displayname"
          label="Display Name"
          placeholder="Enter token name"
          styles={styles}
        />

        <InputItem
          name="symbol"
          label="Symbol"
          placeholder="Enter token symbol"
          styles={styles}
        />

        <label className={styles.customlabel} >Description</label>
        <InputTextarea
          rows={2}
          cols={30}
          name="bio"
          placeholder="Let others know about your token collection"
          styles={styles}
          autoResize
          className={styles.customtextarea}
        />

        <InputItem
          name="displayname"
          label="Short URL"
          placeholder="Enter URL name"
          styles={styles}
        />
        <div className={styles.shortURL}>minted.com/collection/<span></span></div>

      </div>
      <div className={styles.btns}>
        <button className={cn("button", styles.button, styles.btnPrimary)}>Create Collection</button>
        <button className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
      </div> 
    </div>
  );
};

export default Report;

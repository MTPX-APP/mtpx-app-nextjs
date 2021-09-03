import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import cn from "classnames";
import styles from "../styles/components/Transfer.module.scss";


const Transfer = ({ className }) => {

  const pageToast = useRef(null);

  // Default Values
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    receiverAddress: '',
  }

  const { 
    control, 
    formState: { errors }, 
    handleSubmit, 
    reset, 
    setFocus 
  } = useForm({ defaultValues });

  useEffect(() => {

    setFocus("receiverAddress");

  }, [setFocus]);

  const onSubmit = (data) => {
      setFormData(data);
      setShowMessage(true);
      reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] && <small className="p-error">{errors[name].message}</small>
  };

  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Transfer token</div>
      <div className={styles.text}>
        You can transfer tokens from your address to another
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* // DISPLAYNAME */}
        <div>
          <label
            htmlFor="receiverAddress"
            className={`p-d-block ${styles.inputlabel}`}
          >
            Receiver address
          </label>
          <Controller 
            name="receiverAddress" 
            control={control} 
            rules={{ 
              required: 'Receiver Address is required.',
              maxLength: 200,
            }} 
            render={({ field, fieldState }) => (
              <InputText 
                id={field.name} {...field} 
                autoFocus
                aria-describedby="receiverAddress"
                maxLength={200}
                placeholder="Enter or Paste address"
                className={`p-d-block ${styles.inputtext} ${classNames({'p-invalid': fieldState.invalid })}`} 
                />
          )} />
          {getFormErrorMessage('receiverAddress')}
        </div>
      
        <div className={styles.btns}>
          <button className={cn("button", styles.button, styles.btnPrimary)}>Continue</button>
          <button type="button" className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
        </div>  
      </form>
    </div>
  );
};

export default Transfer;

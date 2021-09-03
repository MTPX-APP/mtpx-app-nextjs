import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import cn from "classnames";
import styles from "../styles/components/Report.module.scss";

const Report = ({ className }) => {
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

    setFocus("reportMessage");

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
      <div className={cn("h4", styles.title)}>Report</div>
      <div className={styles.text}>
        Describe why you think this item should be removed from marketplace
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.customlabel} >Message</label>
          <Controller 
            name="reportMessage" 
            control={control} 
            rules={{ 
              required: 'Message is required.',
              maxLength: 256,
            }} 
            render={({ field, fieldState }) => (
              <InputTextarea
                id={field.name} {...field} 
                rows={5}
                cols={30}
                name="reportMessage"
                maxLength={256}
                placeholder="Tell us the details"
                styles={styles}
                aria-describedby="reportMessage"
                autoResize
                className={`p-d-block ${styles.customtextarea} ${classNames({'p-invalid': fieldState.invalid })}`} 
              />
              )} />
              {getFormErrorMessage('reportMessage')}
        </div>

        <div className={styles.btns}>
          <button className={cn("button", styles.button, styles.btnPrimary)}>Send Now</button>
          <button type="button" className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
        </div> 
      </form>
    </div>
  );
};

export default Report;

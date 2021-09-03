import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import cn from "classnames";
import styles from "../styles/components/Bid.module.scss";

const items = [
  {
    title: "Your balance",
    value: "8.498 ETH",
  },
  {
    title: "Service fee",
    value: "0 ETH",
  },
  {
    title: "Total bid amount",
    value: "0 ETH",
  },
];

const Bid = ({ className }) => {

  const [ input, setInput ] = useState("");
  const pageToast = useRef(null);

  // Default Values
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    bidValue: '',
  }

  const { 
    control, 
    formState: { errors }, 
    handleSubmit, 
    reset, 
    setFocus 
  } = useForm({ defaultValues });

  useEffect(() => {

    setFocus("bidValue");

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
    <div className={cn(className, styles.checkout)}>
      <div className={cn("h4", styles.title)}>Place a bid</div>
      <div className={styles.info}>
        You are about to purchase <strong>C O I N Z</strong> from{" "}
        <strong>USER</strong>
      </div>
      <div className={styles.stage}>Your bid</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* // CUSTOMURL */}
          <Controller 
            name="bidValue" 
            control={control} 
            rules={{ 
              required: 'Bid is required.',
              maxLength: 10,
            }} 
            render={({ field, fieldState }) => (
              <div className={`p-inputgroup ${styles.yourBid}`}>
                <InputText 
                  id={field.name} {...field} 
                  autoFocus
                  aria-describedby="bidValue"
                  keyfilter={/[0-9.]+$/}
                  maxLength={25}
                  placeholder="Enter bid"
                  className={`${classNames({'p-invalid': fieldState.invalid })}`} 
                  />
                  <span className={`p-inputgroup-addon ${styles.currencyType}`}>{`ETH`}</span>
              </div>
          )} />
          {getFormErrorMessage('bidValue')}

          {items.map((x, index) => (
            <div className={styles.row} key={index}>
              <div className={styles.col}>{x.title}</div>
              <div className={styles.col}>{x.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.btns}>
          <button className={cn("button", styles.button, styles.btnPrimary)}>Place a bid</button>
          <button type="button" className={cn("button-stroke", styles.button, styles.btnStroke)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Bid;


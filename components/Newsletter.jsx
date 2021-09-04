import React, {useRef, useState, useEffect} from "react";
import Link from "next/link";
import { classNames } from 'primereact/utils';
import Util from '../core/Utils/Util';
import { useForm, Controller } from "react-hook-form";
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import styles from "../styles/components/Newsletter.module.scss";


const Newsletter = () => {

    const pageToast = useRef(null);

    // Default Values
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const defaultValues = {
        newsletterEmail: '',
    }

    const { 
        control, 
        formState: { errors }, 
        handleSubmit, 
        reset, 
        setFocus 
    } = useForm({ defaultValues });

    useEffect(() => {

        setFocus("newsletterEmail");

    }, [setFocus]);

    const onSubmit = async (data) => {

        console.log(data);
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: data.newsletterEmail,
                status: 'subscribed'
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const { error } = await res.json();

        if (error) {
            pageToast.current.show({severity: 'error', life: 50000, summary: 'Error', detail: 'Sorry, we encountered a error submitting your newsletter'});  
            return;
        }

        pageToast.current.show({severity: 'success', summary: 'Newsletter Signup Successfuly', detail: 'You are now part of MintedPix Newsletter'});  

        setFormData(data);  
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };
    
    return (
      <>
        <Toast ref={pageToast} /> 
        <div className={styles.newsletterWrapper}>
            <h6>Join Newsletter</h6>
            <p>
            Find out about latest on MintedPix and its community by subscribing to our e-newsletter!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="p-input-icon-left ">
                    {/* // NEWSLETTER EMAIL */}
                    <Controller 
                        name="newsletterEmail" 
                        control={control} 
                        rules={{ 
                        required: 'Email is required',
                        pattern: Util.isValidEmail(),
                        maxLength: 50,
                        }} 
                        render={({ field, fieldState }) => (
                        <InputText 
                        id={field.name} {...field} 
                        aria-describedby="bidValue"
                        maxLength={50}
                        placeholder="Your email"
                        className={`${classNames({'p-invalid': fieldState.invalid })}`} 
                        />
                    )} />
                    <button>
                        <i className="pi pi-arrow-right" />
                    </button>
                </span>
            </form>
        </div>
      </>
    );
  };
  
  export default Newsletter;


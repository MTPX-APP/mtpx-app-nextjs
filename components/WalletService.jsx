import React, {useRef, useState, useEffect} from "react";
import { classNames } from 'primereact/utils';
import { useForm, Controller } from "react-hook-form";
import { BlockUI } from 'primereact/blockui';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { Checkbox } from "primereact/checkbox";
import CustomButton from "./CustomButton";
import styles from "../styles/components/WalletService.module.scss";

const WalletService = () => {
  const [blockedPanel, setBlockedPanel] = useState(false);
  const pageToast = useRef(null);

  // Default Values
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const defaultValues = {
    acceptAge: false,
    acceptThirdPartyTermsService: false,
    acceptMintedPixTermsService: false
  }

  const { 
    control, 
    formState: { errors }, 
    handleSubmit, 
    reset, 
    setFocus 
  } = useForm({ defaultValues });

  useEffect(() => {

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
  
  return (
    <>
      <Toast ref={pageToast} /> 
      <BlockUI blocked={blockedPanel} fullScreen template={ <ProgressSpinner  style={{width: '50px', height: '50px'}} strokeWidth="4"  animationDuration=".5s"/>} />
      
      <div className={styles.container}>
        <h3>Terms of service</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          nesciunt hic nihil iste, maxime illo! Libero suscipit eos vel sapiente
          nesciunt hic nihil iste, maxime illo! Libero suscipit eos vel sapiente
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.termsWrapper}>
          <div>
            {/* Age Terms */}
            <Controller 
                name="acceptAge" 
                control={control} 
                rules={{ required: true }} 
                render={({ field, fieldState }) => (
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      inputId={field.name}
                      checked={field.value} 
                      onChange={(e) => field.onChange(e.checked)}
                      className={`p-mr-3 ${classNames({'p-invalid':  fieldState.invalid  })}`}
                    />
                    <label
                      htmlFor="acceptAge"
                      className={`p-checkbox-label ${styles.labelStyles} ${classNames({'p-error':  fieldState.invalid  })}`}
                    >
                      I am at least 13 year old
                    </label>
                  </div>
                )} />
          </div>

          <div>
            {/* Third Party Terms */}
            <Controller 
                name="acceptThirdPartyTermsService" 
                control={control} 
                rules={{ required: true }} 
                render={({ field, fieldState }) => (
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      inputId={field.name}
                      checked={field.value} 
                      onChange={(e) => field.onChange(e.checked)}
                      className={`p-mr-3 ${classNames({'p-invalid':  fieldState.invalid  })}`}
                    />
                    <label
                      htmlFor="acceptThirdPartyTermsService"
                      className={`p-checkbox-label ${styles.labelStyles} ${classNames({'p-error':  fieldState.invalid  })}`}
                    >
                      I agree Third Party terms of service
                    </label>
                  </div>
                )} />
          </div>

          <div>
            {/* Mintedpix Terms */}
            <Controller 
                name="acceptMintedPixTermsService" 
                control={control} 
                rules={{ required: true }} 
                render={({ field, fieldState }) => (
                  <div className={styles.checkboxWrapper}>
                    <Checkbox
                      inputId={field.name}
                      checked={field.value} 
                      onChange={(e) => field.onChange(e.checked)}
                      className={`p-mr-3 ${classNames({'p-invalid':  fieldState.invalid  })}`}
                    />
                    <label
                      htmlFor="acceptMintedPixTermsService"
                      className={`p-checkbox-label ${styles.labelStyles} ${classNames({'p-error':  fieldState.invalid  })}`}
                    >
                       I agree MintedPix terms of service
                    </label>
                  </div>
                )} />
          </div>
        </div>

        <div className={`${styles.btnContainer}`}>
          <div className={styles.btnGetStarted}>
            <CustomButton text="Get started now" btnStyle="Colored" />
          </div>
        </div>
        </form>
        <p><i className="pi pi-info-circle"></i> We do not own your private keys and cannot access your funds without your confirmation.</p>
      </div>
    </>
  );
};

export default WalletService;

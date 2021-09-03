import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import { Trans, useTranslation } from 'next-i18next';
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Checkbox } from "primereact/checkbox";
import TermsContent from "../components/TermsContent";
import styles from "../styles/components/TermsAgreement.module.scss";

const TermsAgreement = ({ 
    inputId, 
    handleOnChange, 
    checkValue, 
    classNameInvalid
  }) => {
  const { t } = useTranslation('termsAgreement');
  const [displayMaximizable, setDisplayMaximizable] = useState(false);

  const dialogTerms = (value) => {
    value ? setDisplayMaximizable(true) : setDisplayMaximizable(false);
  }

  const renderFooter = () => {
    return (
        <div>
              <Button label="OK" onClick={() => setDisplayMaximizable(false)} className="p-button-text" />
          </div>
      );
  }

  return (
      <>
      <div className={styles.termsWrapper}>
          <Checkbox 
            inputId={inputId} 
            checked={checkValue} 
            onChange={handleOnChange} 
            className={`${styles.checkbox} ${classNames({'p-invalid': classNameInvalid })}`} 
          />
          <label>
            <span 
              className={`${styles.termsLink} ${classNames({'p-error': classNameInvalid })}`} >
              <Trans
                i18nKey="termsAgreementText"
                t={t}  
                components={{
                  a: <span onClick={()=>dialogTerms(true)} className={classNames({'p-error': classNameInvalid })} />
                }}        
              />
            </span>
          </label>
      </div>
      <Dialog 
        header={t('termsHeader')} 
        footer={renderFooter()} 
        visible={displayMaximizable} 
        breakpoints={{'960px': '75vw'}} 
        style={{ width: '50vw' }} 
        maximizable 
        modal 
        resizable={false} 
        draggable={false} 
        onHide={() => dialogTerms(false)}>
        <div className={styles.dialogWrapper}>
            <TermsContent/>
        </div>
      </Dialog>
    </>
  );
};

export default TermsAgreement;


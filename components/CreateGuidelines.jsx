import React from "react";
import { Trans, useTranslation } from 'next-i18next';
import styles from "../styles/components/CreateGuidelines.module.scss";


const CreateGuidelines = () => {
	const { t } = useTranslation('createGuidelines');

  return (
	<div className={styles.container}>
		<Trans
          i18nKey="content"
          t={t}  
		  components={{
			  h4: <h4 />,
			  li: <li />,
			  ul: <ul/>
			}}        
        />
	</div>	
  );
};


export default CreateGuidelines;

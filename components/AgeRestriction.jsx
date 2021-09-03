import React, { useState } from "react";
import { RadioButton } from 'primereact/radiobutton';
import Modal from  "../components/Modal";
import AgeRestrictionContent from "../components/AgeRestrictionContent";

const AgeRestriction = ({ styles }) => {
	const [ageRestriction, setAgeRestriction] = useState(null);
	const [ageRestrictionContentClick, setAgeRestrictionContentClick]=useState(false);

	return (
		<>
		<Modal show={ageRestrictionContentClick} onClose={() => setAgeRestrictionContentClick(false)}>
			<AgeRestrictionContent/>
		</Modal>
		<div className={styles.ageRestrictionWrapper}>
			<h3 className={styles.h3}>
			Age Restriction  
			<span onClick={setAgeRestrictionContentClick}><i className={`pi pi-question-circle tooltip-icon`}></i></span>
			</h3>
			<p>Please select the age level for the art you are posting.</p>
			<div className={styles.ageRestrictionContainer}>
			<div className={`p-field-radiobutton ${styles.radioButton}`}>
				<RadioButton inputId="ageRestriction1" name="ageRestriction" value="g" onChange={(e) => setAgeRestriction(e.value)} checked={ageRestriction === 'g'} />
				<label htmlFor="ageRestriction1">All Ages</label>
			</div>
			<div className={`p-field-radiobutton ${styles.radioButton}`}>
				<RadioButton inputId="ageRestriction2" name="ageRestriction" value="pg" onChange={(e) => setAgeRestriction(e.value)} checked={ageRestriction === 'pg'} />
				<label htmlFor="ageRestriction2">PG</label>
			</div>
			<div className={`p-field-radiobutton ${styles.radioButton}`}>
				<RadioButton inputId="ageRestriction3" name="ageRestriction" value="pg13" onChange={(e) => setAgeRestriction(e.value)} checked={ageRestriction === 'pg13'} />
				<label htmlFor="ageRestriction3">PG-13</label>
			</div>
			<div className={`p-field-radiobutton ${styles.radioButton}`}>
				<RadioButton inputId="ageRestriction4" name="ageRestriction" value="r18" onChange={(e) => setAgeRestriction(e.value)} checked={ageRestriction === 'r18'} />
				<label htmlFor="ageRestriction4">R-18+</label>
			</div>
			</div>
		</div>
		</>
	);
};

export default AgeRestriction;
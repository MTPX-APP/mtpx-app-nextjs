import React, { useState } from "react";
import { classNames } from 'primereact/utils';
import { Dropdown } from "primereact/dropdown";
import Modal from  "../components/Modal";
import AgeRestrictionContent from "../components/AgeRestrictionContent";

const AgeRestriction = ({ styles, fieldName, fieldView, fieldOnChange, fieldStateInvalid, ages }) => {
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
			<div><small>Please select the age level for the art you are posting.</small></div>
			<div>
				<Dropdown
				id={fieldName}
				value={fieldView} 
				onChange={fieldOnChange}
				options={ages}
				optionLabel="name"
				placeholder="Select one"
				className={`${styles.dropdown} ${classNames({'p-invalid': fieldStateInvalid })}`}
				dropdownIcon={"pi pi-angle-down"}
				/>
			</div>
		</div>
		</>
	);
};

export default AgeRestriction;
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { useState } from "react";
import styles from "../styles/components/FilterActivity.module.scss";

const FilterActivity = () => {
  const [filter, setFilters] = useState([]);

  function onChangeFilter(e) {
    let selectedFilter = [...filter];

    if (e.checked) {
      selectedFilter.push(e.value);
    } else {
      selectedFilter.splice(selectedFilter.indexOf(e.value), 1);
    }

    setFilters(selectedFilter);
  }

  return (
    <div className={styles.filterContainer}>
      <h2>Filters</h2>
      <div className={styles.checkboxContainer}>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="sale"
            name="sales"
            value="Sales"
            onChange={onChangeFilter}
          />
          <label htmlFor="sale">Sales</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="listing"
            name="listing"
            value="listing"
            onChange={onChangeFilter}
          />
          <label htmlFor="listing">Listing</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="bids"
            name="bids"
            value="Bids"
            onChange={onChangeFilter}
          />
          <label htmlFor="bids">Bids</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="burns"
            name="burns"
            value="burns"
            onChange={onChangeFilter}
          />
          <label htmlFor="burns">Burns</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="following"
            name="following"
            value="following"
            onChange={onChangeFilter}
          />
          <label htmlFor="following">Following</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="likes"
            name="likes"
            value="likes"
            onChange={onChangeFilter}
          />
          <label htmlFor="likes">Likes</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="purchase"
            name="purchase"
            value="purchase"
            onChange={onChangeFilter}
          />
          <label htmlFor="purchase">Purchase</label>
        </div>
        <div className="p-field-checkbox">
          <Checkbox
            inputId="transfer"
            name="transfer"
            value="transfer"
            onChange={onChangeFilter}
          />
          <label htmlFor="transfer">Transfer</label>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          label="Select All"
          className="p-button-rounded p-button-secondary p-button-outlined"
        />
        <Button
          label="Unselect All"
          className="p-button-rounded p-button-secondary p-button-outlined"
        />
      </div>
    </div>
  );
};

export default FilterActivity;

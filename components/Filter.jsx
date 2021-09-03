import styles from "../styles/components/Filter.module.scss";

const Filter = ({filterState, handleFilterClick}) => {
  return (
    <div className={`${styles.filter} ${filterState ? styles.active : ''}`} onClick={handleFilterClick}>
      Filter
      <span>
        <i className="pi pi-filter"></i>
      </span>
    </div>
  );
};

export default Filter;

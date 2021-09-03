import { useState } from "react";
import { FilterActivity } from "../components";
import { Button } from "primereact/button";
import { notifications, activityTabLinks } from "../core/Constants";
import TabHeader from "../components/TabHeader";
import Avatar from "../components/Avatar";
import Filter from "../components/Filter";
import styles from "../styles/pages/Activity.module.scss";
import { ProgressSpinner } from "primereact/progressspinner";

const Activity = () => {
    const [filter, setFilter] = useState(false);  
    // Handle the filter click toggle
    const handleFilter = () => {
      return !filter ? setFilter(true) : setFilter(false);    
  }

  return (
    <div className={styles.activityPageContainer}>
      <div className={styles.activity}>        
        <div className={styles.columnContainer}>
          <div className={styles.topContainer}>
            <h1>Activity</h1>
            <div className={styles.topContainerGroup}>
              <Button
                label="Mark all as read"
                className="p-button-rounded p-button-secondary p-button-outlined"
              />
              <div className={styles.filterBtn}><Filter filterState={filter} handleFilterClick={handleFilter} /></div>
            </div>
          </div>
          <div className={styles.activity}>
            <div className={styles.activityList}>
              <TabHeader links={activityTabLinks} />
              <div className={styles.downContainer}>
                {notifications.map((li, index) => {
                  return (
                    <div className={styles.tabContainer} key={index}>
                      <Avatar src={li.image} alt="img" width="80" height="80" />
                      <div className={styles.tabInnerContainer}>
                        <h4>{li.name}</h4>
                        <h5>{li.status}</h5>
                        <p>{li.days}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.spinnerContainer}>
                <ProgressSpinner className={styles.spinner} />
              </div>
            </div>
            <div className={`${styles.filterChechList} ${filter && styles.active} `}>
              <div className={styles.columnContainer}>
                <FilterActivity />
              </div>
            </div>
          </div>          
        </div>        
      </div>
    </div>
  );
};

export default Activity;

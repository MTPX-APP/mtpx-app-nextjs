import styles from "../styles/components/SiteStat.module.scss";

const SiteStat = ({ itemSoldCount, paidCreatorCount, activeUserCount }) => {
    
    return (
        <div className={styles.auctionDetails}>
          <div className="p-text-center">
            <h1 className="p-mb-3">{itemSoldCount}</h1>
            <p>Items Sold</p>
          </div>
          <div className="p-text-center">
            <h1 className="p-mb-3">{paidCreatorCount}</h1>
            <p>Paid to Creators</p>
          </div>
          <div className="p-text-center">
            <h1 className="p-mb-3">{activeUserCount}</h1>
            <p>Active Users</p>
          </div>
        </div>
    );
  };
  
  export default SiteStat;
  
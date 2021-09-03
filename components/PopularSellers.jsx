import SellerCard from "./SellerCard";
import SellersHeader from "./SellersHeader";
import styles from "../styles/components/PopularSellers.module.scss";

const PopularSellers = () => {
  return (
    <section className={styles.sellersContainer}>
      <SellersHeader />
      <SellerCard />
    </section>
  );
};

export default PopularSellers;

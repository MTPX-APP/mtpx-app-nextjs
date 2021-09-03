import Image from "next/image";
import { Divider } from "primereact/divider";
import { Carousel } from "primereact/carousel";
import { Sellers, popularityColors } from "../core/Constants";

import styles from "../styles/components/SellerCard.module.scss";

const SellersCard = () => {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (seller) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p
            style={{
              backgroundColor: `${
                popularityColors[seller.popular - 1]
                  ? popularityColors[seller.popular - 1]
                  : "#23262f"
              }`,
            }}
          >
            #{seller.popular}
          </p>
          <div className="p-d-flex p-ai-end">
            <i className={`pi pi-plus ${styles.plusIcon}`}></i>
          </div>
        </div>

        <Divider />

        <div className={styles.cardBody}>
          <div className={styles.cardImage}>
            <Image
              src={seller.image}
              alt={seller.username}
              className="sellerImage"
              width={88}
              height={88}
              objectFit="cover"
            />
          </div>

          <p>{seller.username}</p>
          <p>
            {seller.eth} <span>ETH</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.cardContainer}>
      <Carousel
        value={Sellers}
        numVisible={5}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </section>
  );
};

export default SellersCard;

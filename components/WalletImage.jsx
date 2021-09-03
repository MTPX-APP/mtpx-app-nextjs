import styles from "../styles/components/WalletImage.module.scss";
import Image from "next/image";
import { imageAssets } from "../core/Constants";

const WalletImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageAssets.tnmtImage}
        width={448}
        height={512}
        alt={`wallet`}        
      />
    </div>
  );
};

export default WalletImage;

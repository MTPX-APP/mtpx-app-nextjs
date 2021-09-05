import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import CustomButton from "./CustomButton";
import styles from "../styles/components/WalletService.module.scss";

const WalletService = () => {
  const [cities, setCities] = useState([]);

  const onValueChange = (e) => {
    let selectedCities = [...cities];
    if (e.checked) selectedCities.push(e.value);
    else selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
  };
  return (
    <div className={styles.container}>
      <h3>Terms of service</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        nesciunt hic nihil iste, maxime illo! Libero suscipit eos vel sapiente
        nesciunt hic nihil iste, maxime illo! Libero suscipit eos vel sapiente
      </p>
      <div className={styles.termsWrapper}>
        <div>
          <Checkbox
            inputId="cb1"
            value="13 year old"
            onChange={onValueChange}
            checked={cities.includes("13 year old")}
            className="p-mr-3"
          ></Checkbox>
          <label
            htmlFor="cb1"
            className={`p-checkbox-label ${styles.labelStyles}`}
          >
            I am at least 13 year old
          </label>
        </div>

        <div>
          <Checkbox
            inputId="cb2"
            value="Agree"
            onChange={onValueChange}
            checked={cities.includes("Agree")}
            className="p-mr-3"
          ></Checkbox>
          <label
            htmlFor="cb2"
            className={`p-checkbox-label ${styles.labelStyles}`}
          >
            I agree Third Party terms of service
          </label>
        </div>

        <div>
          <Checkbox
            inputId="cb3"
            value="Agree"
            onChange={onValueChange}
            checked={cities.includes("Agree")}
            className="p-mr-3"
          ></Checkbox>
          <label
            htmlFor="cb3"
            className={`p-checkbox-label ${styles.labelStyles}`}
          >
            I agree MintedPix terms of service
          </label>
        </div>
      </div>

      <div className={`${styles.btnContainer}`}>
        <div className={styles.btnGetStarted}>
          <CustomButton text="Get started now" btnStyle="Colored" />
        </div>
        <div className={styles.btnCancel}>
          <CustomButton text="Cancel" />
        </div>
      </div>

      <p>We do not own your private keys and cannot access your funds without your confirmation.</p>
    </div>
  );
};

export default WalletService;

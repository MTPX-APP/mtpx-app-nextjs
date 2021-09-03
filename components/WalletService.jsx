import styles from "../styles/components/WalletService.module.scss";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";
import CustomButton from "./CustomButton";

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
      <div className={styles.imageContainer}></div>

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
          I am atleast 13 year old
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
          I agree ThirdParty terms of service
        </label>
      </div>

      <div className={`p-mt-4 p-d-md-flex ${styles.btnContainer}`}>
        <div className="p-mr-md-3">
          <CustomButton text="Cancel" />
        </div>
        <div>
          <CustomButton text="Get started now" btnStyle="Colored" />
        </div>
      </div>
    </div>
  );
};

export default WalletService;

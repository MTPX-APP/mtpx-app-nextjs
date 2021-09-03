import styles from "../styles/pages/Privacy.module.scss"
import PrivacyPolicyContent from "../components/PrivacyPolicyContent";

const Terms = () => {

    return (
        <div>
            <div className={styles.privacyContainer}>
                <div className={styles.topContainer}>
                    <h5>Last Updated July 31, 2021. Version 0.8</h5>
                    <h1>Privacy Policies</h1>
                    <h4>Read our privacy policy below to learn more about your rights and responsibilities as a MintedPix user.<span> Contact Support</span></h4>
                </div>
                <div>
                    <div className={`p-grid ${styles.middleContainer}`}>
                        <PrivacyPolicyContent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms;
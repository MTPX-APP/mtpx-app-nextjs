
import styles from "../styles/pages/Terms.module.scss"
import TermsContent from "../components/TermsContent";
const Terms = () => {

    return (
        <div>
            <div className={styles.termsContainer}>
                <div className={styles.topContainer}>
                    <h1>Terms of Services</h1>
                    <h4>Read our terms below to learn more about your rights and responsibilities as a MintedPix user.<span> Contact Support</span></h4>
                </div>
                <div>
                    <div className={`p-grid ${styles.middleContainer}`}>
                        <TermsContent />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Terms;
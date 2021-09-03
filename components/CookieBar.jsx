import React from 'react';
import Link from "next/link";
import CookieConsent from 'react-cookie-consent';
import styles from "../styles/components/CookieBar.module.scss";

const CookieBar = () => {
    return (
        <div>
            <CookieConsent
                debug={true}
                location="bottom"
                buttonText="Accept"
                containerClasses={styles.container}
                buttonClasses={styles.button}
                cookieName="mintedPixCookieAgreement" 
                expires={180} //6 Months Expiration             
            >
                <div className={styles.content}>
                    <span>This website uses &#127850; &nbsp;cookies to improve your experience.  To learn more, you can visit our <Link href="/privacy"><a><u>Privacy Policy</u></a></Link>.</span>
                </div>
            </CookieConsent>

        </div>
    )
}

export default CookieBar

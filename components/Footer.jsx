import React, { useState} from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import Icon from "./Icon";
import Image from "next/image";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { imageAssets } from "../core/Constants";
import CustomSelect from "./CustomSelect";
import CookieBar from "./CookieBar";
import Newsletter from "./Newsletter";

import styles from "../styles/components/Footer.module.scss";

function Footer() {

  const router = useRouter()
  const currentLang =  router.locale;
  const [languageValue, setLanguageValue] = useState(currentLang);

  const langSelectItems = [
    { label: "日本語", value: "ja" },
    { label: "English", value: "en" }
  ];

  const handleLanguageChange = () => (e) => {
    if (e.value === 'ja') {
      setLanguageValue('ja');
      router.push('/ja', '/ja', { locale: 'ja' })    
    } else {
      setLanguageValue('en');
      router.push('/', '/', { locale: 'en' })    
    }    
  }


  return (
    <>
      <div className={styles.wrapper}>
        <div className={`p-grid ${styles.container}`}>
        
          <div className={styles.columnOne}>
            <div className={styles.footerColumns}>
              <div className={styles.footerLogo}><Image src={imageAssets.FooterLogo} alt="footer-logo" /></div>
              <p>
              MintedPix is an invitation only NFT marketplace for distinguished creators and their patrons. Join and inspire our community now!
              </p>
              <div className={styles.footerSocial}>
                <Link href="https://instagram.com/" passHref><a><Icon name='instagram' size='20' fill='#555' /></a></Link>
                <Link href="https://twitter.com/" passHref><a><Icon name='twitter' size='20'  fill='#555' /></a></Link>
                <Link href="https://facebook.com/" passHref><a><Icon name='facebook' size='20'  fill='#555'/></a></Link>
                <Link href="https://pinterest.com/" passHref><a><Icon name='pinterest' size='20'  fill='#555'/></a></Link>
              </div>
              <p>
                <strong>Language</strong>
              </p>
              <CustomSelect 
                value={languageValue}
                options={langSelectItems} 
                onChange={handleLanguageChange()}  
              />
            </div>
          </div>
          <div className={styles.columnTwo}>
            <div className={styles.footerColumns}>
              <h6>MintedPix</h6>
              <ul>
                <li>
                  <Link href="/">Discover</Link>
                </li>
                <li>
                  <Link href="/wallet">Connect Wallet</Link>
                </li>
                <li>
                  <Link href="/create">Create Mint</Link>
                </li>
                <li>
                  <Link href="/faq">How it works</Link>
                </li>
              </ul>
            </div>
          </div>
          <div  className={styles.columnThree}>
            <div className={styles.footerColumns}>
              <h6>Community</h6>
              <ul>
                {/* <li>
                  <Link href="/apply">Apply as an creator</Link>
                </li> */}
                <li>
                  <Link href="/">Join our Discord</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div  className={styles.columnFour}>
            <div className={styles.footerColumns4}>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className={styles.termsContainer}>
            <span>Copyright &copy; 2021 MintedPix Labs. All rights reserved &middot; Created with <i className="pi pi-heart"></i> by artist for artist</span>
          </div>
      </div>
      <CookieBar/>
    </>
  );
}

export default Footer;

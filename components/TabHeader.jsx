import styles from "../styles/components/TabHeader.module.scss";
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const TabHeader = ({ links }) => {
  const router = useRouter();
  const [currentLink, setCurrentLink] = useState({});

  const handleLink = (link) => {
    setCurrentLink(link.toLowerCase());
  };

  useEffect(() => {
    if (router.isReady && router.query) {
      if (router.query.tab === undefined) {
        setCurrentLink(links[0].toLowerCase());        
      } else {
        setCurrentLink(router.query.tab.toLowerCase());
      }      
    }
  },[router, links])

  return (
    <div className={`tab-wrapper ${styles.tabs} ${styles.links}`}>
      {links.map((link, index) => {
        return (
          <Link 
            href={{ query: { tab: link.toLowerCase() } }} 
            scroll={false} 
            key={index}
            passHref
            >
          <p 
            className={`${styles.link} ${currentLink === link.toLowerCase() ? styles.activeLink : ''}`}
            onClick={() => handleLink(link)}
          >
            {link}
          </p>
          </Link>
        );
      })}
    </div>
  );
};

export default TabHeader;

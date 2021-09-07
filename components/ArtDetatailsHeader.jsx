import React from "react";
import router, { useRouter } from 'next/router'
import Link from "next/link";
import ArtDetailsOptions from "./ArtDetailsOptions";
import ArtDetailsShare from "./ArtDetailsShare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import styles from "../styles/components/ArtDetailsHeader.module.scss";

function ArtDetailsHeader({
    backLink,
    backLinkName,
}) {

    const router = useRouter();
    
    return (
        <div className={styles.editHeader}>
            <Link href={backLink}>
            <a className={styles.backBtn}>
                <i className="pi pi-arrow-left" /> <span>{backLinkName}</span>
            </a>
            </Link>
            <div className={styles.editControls}>
                <a className={styles.headerBtn}>
                    <FontAwesomeIcon
                    icon={faHeart}
                    className={styles.likeIcon}
                    /> <span>12k</span>
                </a>
                <ArtDetailsShare shareUrl={`https://www.mintedpix.com`} />
                <ArtDetailsOptions/>
            </div>
        </div>
    )

    
};

export default ArtDetailsHeader;
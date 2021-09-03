import React from "react";
import router, { useRouter } from 'next/router'
import Link from "next/link";
import styles from "../styles/components/HeaderBreadcrumbs.module.scss";

function HeaderBreadcrumbs({
    isHistoryBack,
    backLink,
    backLinkName,
    breadcrumbBackName,
    breadcrumbCurrentPageName
}) {

    const router = useRouter();
    
    if (isHistoryBack) {
        return (
            <div className={styles.editHeader}>
                <a className={styles.backBtn} onClick={() => router.back()}>
                    <i className="pi pi-arrow-left" /> {backLinkName}
                </a>                
            </div>
        )
    } else {
        return (
            <div className={styles.editHeader}>
                <Link href={backLink}>
                <a className={styles.backBtn}>
                    <i className="pi pi-arrow-left" /> {backLinkName}
                </a>
                </Link>
                <div>
                <Link href={backLink}>
                    <a>{breadcrumbBackName}</a>
                </Link>
                <i className="pi pi-angle-right" />
                <p>{breadcrumbCurrentPageName}</p>
                </div>
            </div>
        )
    }
    
};

export default HeaderBreadcrumbs;
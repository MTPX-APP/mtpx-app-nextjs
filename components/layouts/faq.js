import Link from 'next/link';
import { useState } from "react";
import { imageAssets } from "../../core/Constants";
import styles from "../../styles/pages/Faq.module.scss"
import ArtInfoView from "../../components/ArtInfoView"

const FaqLayout = ({ children }) => (
    <div>
        <div className={styles.faqContainer}>
            <div className={styles.topContainer}>
                <h5><strong>LEARN HOW TO GET STARTED</strong></h5>
                <h1><strong>Frequently asked questions</strong></h1>
                <h4>Please find common questions answered here.<br/>Should you need further support, please <span>Contact Support</span></h4>
            </div>
            <div>
                <div className={`p-grid ${styles.middleContainer}`}>
                    <div className="p-col-12 p-md-4 p-lg-4 p-justify-center">
                        <ul className={styles.middleList}>
                            <li>
                            <Link href="/faq">
                                <a>
                                    <h5>General</h5>
                                </a>    
                            </Link>
                            </li>
                            <li>
                            <Link href="/faq/support">
                                <a>
                                    <h5>Support</h5>
                                </a>    
                            </Link>
                            </li>
                            <li>
                            <Link href="/faq/updates">
                                <a>
                                    <h5>Updates</h5>
                                </a>    
                            </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-col-12 p-md-8 p-lg-8 p-justify-center">
                       {children}
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.popularBidContainer}>
            <div className={styles.popularBidTop}>
                <div className={styles.innerContainer}>            
                    <h1>Popular</h1>
                </div>
            </div>
            <div className={`p-grid ${styles.popularBidBottom}`}>
                <div className={styles.innerContainer}>                        
                    <div className={`${styles.cardContainer}`}>
                    <ArtInfoView
                        artName={"Amazing Art"}
                        price={"2.5"}
                        quantity={"3 left"}
                        userImage={imageAssets.SamepleUser1}
                        mintImage={imageAssets.SamepleImage1}
                        userName={"E Cole."}
                        burnPrice={"0.03"}
                        likes={405}
                    />
                    <ArtInfoView
                        artName={"Amazing Art"}
                        price={"2.5"}
                        quantity={"3 left"}
                        userImage={imageAssets.SamepleUser2}
                        mintImage={imageAssets.SamepleImage8}
                        userName={"E Cole."}
                        burnPrice={"0.03"}
                        likes={405}
                    />
                    <ArtInfoView
                        artName={"Amazing Art"}
                        price={"2.5"}
                        quantity={"3 left"}
                        userImage={imageAssets.SamepleUser3}
                        mintImage={imageAssets.SamepleImage3}
                        userName={"E Cole."}
                        burnPrice={"0.03"}
                        likes={405}
                    />
                    <ArtInfoView
                        artName={"Amazing Art"}
                        price={"2.5"}
                        quantity={"3 left"}
                        userImage={imageAssets.SamepleUser4}
                        mintImage={imageAssets.SamepleImage4}
                        userName={"E Cole."}
                        burnPrice={"0.03"}
                        likes={405}
                    />
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
);

export default FaqLayout;
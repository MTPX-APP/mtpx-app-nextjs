import { Button } from "primereact/button";
import { Colors, notifications } from "../core/Constants"
import styles from "../styles/components/Notification.module.scss"
import Link from "next/link";
import Avatar from "./Avatar";



const Notification = ({setNotification}) => {
    return(
        <div className={styles.card}>
            <div className={styles.topContainer}>
                <h1>Notification</h1>
                <Link href="/activity" passHref>
                <Button
                    label="See all"
                    className=" p-button-rounded"
                    style={{ background: `${Colors.lightBlue}` }}
                    onClick={() => setNotification(false)}                    
                />
                </Link>
            </div>
            <div className={styles.scrollContainer}>
                {notifications.map( (li, index) => {
                    return(
                        <Link href="/" passHref key={index}>
                            <div  className={styles.downContainer} onClick={() => setNotification(false)}>
                                <div className={styles.avatar} >
                                    <Avatar
                                        width={68}
                                        height={68}
                                        src={li.image}
                                        alt="userPic"
                                    />
                                </div>
                                <div className={styles.desp}>
                                    <h6>{li.name}</h6>
                                    <h6>{li.status}</h6>
                                    <p>{li.days}</p>
                                </div>                            
                            </div>  
                        </Link>                      
                    )
                })}
            </div>
        </div>
    )
}

export default Notification;
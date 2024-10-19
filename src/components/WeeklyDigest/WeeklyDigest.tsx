import React from 'react'
import styles from './styles.module.css'

import weeklyDigest from '../../images/weeklyDigest.png'
import email from '../../images/email.png'

type Props = {}

const WeeklyDigest = React.memo(function WeeklyDigest(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <img draggable='false' src={weeklyDigest} />
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.title}>Join Our Weekly <br />Digest</div>
                    <div className={styles.desc}>Get Exclusive Promotions & Updates Straight To Your Inbox.</div>
                    <div className={styles.btn}>
                        <input type="email" placeholder='Enter your email here' />
                        <div className={styles.btnSubscridle}>
                            <img draggable='false' src={email} alt="" />
                            Subscribe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default WeeklyDigest
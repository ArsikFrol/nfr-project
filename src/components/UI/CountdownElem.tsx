import React from 'react'
import styles from './styles.module.css'

import Countdown from 'react-countdown'

type Props = {}

const CountdownElem = React.memo(function CountdownElem(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textTimer}>Auction ends in:</div>
            <Countdown date={Date.now() + 9000000} zeroPadTime={2} autoStart />
            <div className={styles.nameCount}><span className={styles.Day}>Day</span><span className={styles.Hours}>Hours</span><span className={styles.Minutes}>Minutes</span><span className={styles.Seconds}>Seconds</span></div>
        </div>
    )
})

export default CountdownElem
import React from 'react'
import styles from './styles.module.css'

type Props = {}

const WeeklyDigest = React.memo(function WeeklyDigest(props: Props) {
    return (
        <div className={styles.wrapper}>WeeklyDigest</div>
    )
})

export default WeeklyDigest
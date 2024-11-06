import React from 'react'
import styles from './styles.module.css'

import { Link } from 'react-router-dom'

type Props = {
    index: number,
    obj: any,
    count: number
}

const RankingsCart = React.memo(function RankingsCart(props: Props) {
    const to = `/user${props.obj.id}`

    return (
        <div className={styles.user}>
            <Link to={to} onClick={() => window.scroll({ top: 0 })} style={{ alignItems: 'center', gap: '10px', textDecoration: 'none', display: 'flex' }}>
                <div className={styles.index}>{props.index + 1}</div>
                <img className={styles.userImage} draggable='false' src={props.obj.userImage} />
                <div className={styles.userName}>{props.obj.userName}</div>
            </Link>
            <div className={styles.countChange}>{props.obj.change[props.count]} %</div>
            <div className={styles.countNFTsSold}>{props.obj.nftsSold[props.count]}</div>
            <div className={styles.countVolume}>{props.obj.volume[props.count]} ETN</div>
        </div>
    )
})

export default RankingsCart
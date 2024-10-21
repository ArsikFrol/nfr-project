import React from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

import bgMagic from '../../images/bgMagic.png'
import eye from '../../images/eye.png'
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom'

type Props = {}

const MagicMashrooms = React.memo(function MagicMashrooms(props: Props) {
    const users = useSelector((state: any) => state.allUser.users)

    return (
        <div className={styles.wrapper}>
            <img draggable='false' className={styles.bg} src={bgMagic} alt="" />
            <div className={styles.leftContent}>
                {
                    users.slice(0, 1).map((obj: any) => {
                        const to: string = `/user${obj.id}`
                        return (
                            <Link onClick={() => window.scroll({ top: 0 })} key={obj.id} to={to} style={{ textDecoration: 'none', color: 'white', width: '160px', height: '55px', marginBottom: '20px' }}>
                                <div className={styles.user}>
                                    <img draggable='false' src={obj.userImage} alt="" />
                                    <div className={styles.userName}>{obj.userName}</div>
                                </div>
                            </Link>
                        )
                    })
                }
                <div className={styles.title}>Magic Mashrooms</div>
                <div className={styles.btn}>
                    <img draggable='false' src={eye} alt="" />
                    See NFT
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.textTimer}>Auction ends in:</div>
                <Countdown date={Date.now() + 9000000} zeroPadTime={2} autoStart />
                <div className={styles.nameCount}><span className={styles.Day}>Day</span><span className={styles.Hours}>Hours</span><span className={styles.Minutes}>Minutes</span><span className={styles.Seconds}>Seconds</span></div>
            </div>
        </div>
    )
})

export default MagicMashrooms
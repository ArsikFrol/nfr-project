import React from 'react'
import styles from './styles.module.css'

import rocket from '../../images/rocket.png'

import { useSelector } from 'react-redux'
import Countdown from 'react-countdown'
import { Link } from 'react-router-dom'

type Props = {}

const TopCreators = (props: Props) => {

    const users = useSelector((state: any) => state.allUser.users)
    users.sort((a: any, b: any) => b.totalSales - a.totalSales);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContent}>
                <div className={styles.listContent}>
                    <div className={styles.title}>Top Creators</div>
                    <div className={styles.desc}>Checkout Top Rated Creators on the NFT Marketplace</div>

                </div>
                <Link onClick={() => window.scroll({ top: 0 })} to='/rankings' style={{ textDecoration: 'none' }}>
                    <div className={styles.rightContent}>
                        <img draggable='false' src={rocket} alt="rocket" />
                        View Rankings
                    </div>
                </Link>

            </div>
            <div className={styles.rowCreators}>
                {
                    users.slice(0, 12).map((objUser: any, index: number) => {
                        const to: string = `/user${objUser.id}`
                        return (
                            <Link className={styles.user} onClick={() => window.scroll({ top: 0 })} key={objUser.id} to={to} style={{ textDecoration: 'none', color: 'white' }}>
                                <div className={styles.indexUser}>{index + 1}</div>
                                <img draggable='false' className={styles.userImage} src={objUser.userImage} />
                                <div className={styles.userName}>{objUser.userName}</div>
                                <div className={styles.totalSales}>total Sales: <span className={styles.countTotal}>{objUser.totalSales} ETN</span></div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopCreators
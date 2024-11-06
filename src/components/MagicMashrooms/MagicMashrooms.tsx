import React from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CountdownElem from '../UI/CountdownElem'

import bgMagic from '../../images/bgMagic.png'
import eye from '../../images/eye.png'

type Props = {}

const MagicMashrooms = React.memo(function MagicMashrooms(props: Props) {
    const users = useSelector((state: any) => state.allUser.users)

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentText}>
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
                    <div className={styles.content}>
                        <Link onClick={() => window.scroll({ top: 0 })} to='/nft' style={{ textDecoration: 'none', width: '200px' }}>
                            <div className={styles.btn}>
                                <img draggable='false' src={eye} alt="" />
                                See NFT
                            </div>
                        </Link>
                    </div>
                </div>
                <CountdownElem />
            </div>
        </div>
    )
})

export default MagicMashrooms
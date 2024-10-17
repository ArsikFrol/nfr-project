import React from 'react'
import styles from './styles.module.css'

import rocket from '../../images/rocket.png'
import DiscoverDigitalArtImg from '../../images/DiscoverDigitalArtImg.png'
import { useSelector } from 'react-redux'

type Props = {}

interface statisticsInter {
    count: number,
    text: string
}

const listStatistics: Array<statisticsInter> = [
    { count: 240, text: 'Total Sale' },
    { count: 100, text: 'Auctions' },
    { count: 240, text: 'Artists' }
]

const DiscoverDigitalArt = (props: Props) => {

    const users = useSelector((state: any) => state.allUser.users)

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <div className={styles.title}>Discover <br /> digital art &<br /> Collect NFTs</div>
                <div className={styles.desc}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</div>
                <div className={styles.btnGetStart}><img draggable="false" src={rocket} alt="rocket" /> Get Started</div>
                <div className={styles.rowStatistics}>
                    {
                        listStatistics.map((obj: statisticsInter, index) => {
                            return (
                                <div className={styles.elemStatistics} key={index}>
                                    <div className={styles.count}>{obj.count}k+</div>
                                    <div className={styles.titleStatistics}>{obj.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.rightContent}>
                <img draggable="false" src={DiscoverDigitalArtImg} alt="DiscoverDigitalArtImg" />
                <div className={styles.titleRight}>Space Walking</div>
                <div className={styles.user}>
                    {users ?
                        users.slice(0, 1).map((obj: any) => {
                            return (
                                <div key={obj.id} className={styles.user}>
                                    <img draggable="false" className={styles.userImg} src={obj.userImage} />
                                    <div className={styles.userName}>{obj.userName}</div>
                                </div>
                            )
                        }) : console.log()
                    }
                </div>
            </div>
        </div>
    )
}

export default DiscoverDigitalArt
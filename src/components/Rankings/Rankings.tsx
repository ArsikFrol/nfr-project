import React from 'react'
import styles from './styles.module.css'

import { useSelector } from 'react-redux'

type Props = {}

const listSort: Array<string> = ['Today', 'This Week', 'This Month', 'All Time']

const Rankings = React.memo(function Rankings(props: Props) {
    const [activeSort, setActiveSort] = React.useState('Today')

    let users = useSelector((state: any) => state.allUser.users)

    const user0 = [...users].sort((a, b) => a.change[0] - b.change[0]).reverse()
    const user1 = [...users].sort((a, b) => a.change[1] - b.change[1]).reverse()
    const user2 = [...users].sort((a, b) => a.change[2] - b.change[2]).reverse()
    const user3 = [...users].sort((a, b) => a.change[3] - b.change[3]).reverse()

    const click = (sort: string) => {
        setActiveSort(sort)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Top Creators</div>
            <div className={styles.desc}>Check out top ranking NFT artists on the NFT Marketplace.</div>
            <div className={styles.rowSort}>
                {
                    listSort.map((sort: string, index: number) => {
                        return (
                            <div key={index} onClick={() => click(sort)} className={activeSort == sort ? styles.ActiveSort : styles.sort}>{sort}</div>
                        )
                    })
                }
            </div>
            <div className={styles.nameSortColumn}>
                <div className={styles.artist}><span className={styles.elemArtist}>#</span> Artist</div>
                <div className={styles.Change}>Change</div>
                <div className={styles.NFTsSold}>NFTs Sold</div>
                <div className={styles.Volume}>Volume</div>
            </div>
            <div className={styles.rowUser}>
                {activeSort == 'Today' ?
                    user0.map((obj: any, index: number) => {
                        return (
                            <div className={styles.user} key={index}>
                                <div className={styles.index}>{index + 1}</div>
                                <img draggable='false' src={obj.userImage} />
                                <div className={styles.userName}>{obj.userName}</div>
                                <div className={styles.countChange}>{obj.change[0]} %</div>
                                <div className={styles.countNFTsSold}>{obj.nftsSold[0]}</div>
                                <div className={styles.countVolume}>{obj.volume[0]} ETN</div>
                            </div>
                        )
                    })
                    : activeSort == 'This Week' ?
                        user1.map((obj: any, index: number) => {
                            return (
                                <div className={styles.user} key={index}>
                                    <div className={styles.index}>{index + 1}</div>
                                    <img draggable='false' src={obj.userImage} />
                                    <div className={styles.userName}>{obj.userName}</div>
                                    <div className={styles.countChange}>{obj.change[1]} %</div>
                                    <div className={styles.countNFTsSold}>{obj.nftsSold[1]}</div>
                                    <div className={styles.countVolume}>{obj.volume[1]} ETN</div>
                                </div>
                            )
                        })
                        : activeSort == 'This Month' ?
                            user1.map((obj: any, index: number) => {
                                return (
                                    <div className={styles.user} key={index}>
                                        <div className={styles.index}>{index + 1}</div>
                                        <img draggable='false' src={obj.userImage} />
                                        <div className={styles.userName}>{obj.userName}</div>
                                        <div className={styles.countChange}>{obj.change[2]} %</div>
                                        <div className={styles.countNFTsSold}>{obj.nftsSold[2]}</div>
                                        <div className={styles.countVolume}>{obj.volume[2]} ETN</div>
                                    </div>
                                )
                            }) : activeSort == 'All Time' ?
                                user1.map((obj: any, index: number) => {
                                    return (
                                        <div className={styles.user} key={index}>
                                            <div className={styles.index}>{index + 1}</div>
                                            <img draggable='false' src={obj.userImage} />
                                            <div className={styles.userName}>{obj.userName}</div>
                                            <div className={styles.countChange}>{obj.change[3]} %</div>
                                            <div className={styles.countNFTsSold}>{obj.nftsSold[3]}</div>
                                            <div className={styles.countVolume}>{obj.volume[3]} ETN</div>
                                        </div>
                                    )
                                }) : <div></div>
                }
            </div>
        </div>
    )
})

export default Rankings
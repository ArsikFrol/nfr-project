import React from 'react'
import styles from './styles.module.css'

import { useSelector } from 'react-redux'
import RankingsCart from './RankingsCart'

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
                            <RankingsCart index={index} obj={obj} count={0} key={index} />
                        )
                    })
                    : activeSort == 'This Week' ?
                        user1.map((obj: any, index: number) => {
                            return (
                                <RankingsCart index={index} obj={obj} count={1} key={index} />
                            )
                        })
                        : activeSort == 'This Month' ?
                            user2.map((obj: any, index: number) => {
                                return (
                                    <RankingsCart index={index} obj={obj} count={2} key={index} />
                                )
                            }) : activeSort == 'All Time' ?
                                user3.map((obj: any, index: number) => {
                                    return (
                                        <RankingsCart index={index} obj={obj} count={3} key={index} />
                                    )
                                }) : <div></div>
                }
            </div>
        </div>
    )
})

export default Rankings
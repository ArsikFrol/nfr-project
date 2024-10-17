import React from 'react';
import styles from './styles.module.css'

import eye from '../../images/eye.png'
import { useSelector } from 'react-redux';

type Props = {}

const DiscoverMore = (props: Props) => {
    const users = useSelector((state: any) => state.allUser.users)
    const collections = useSelector((state: any) => state.allUser.collection)

    let listNewUser: any = []
    let listCollection: any = []

    users.map((objUser: any) => {
        collections.map((objCollection: any) => {
            listCollection.push(objCollection.titleCollection)
            if (objUser.purchasedCollections[0] == objCollection.titleCollection) {
                let newObj = {
                    collectionUser: objCollection.collectionImg,
                    titleCollection: objCollection.titleCollection,
                    userName: objUser.userName,
                    userImage: objUser.userImage,
                    price: objCollection.price,
                    highestBid: objCollection.highestBid
                }
                listNewUser.push(newObj)
            }
        })
    })

    console.log(listNewUser)

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContent}>
                <div className={styles.leftContent}>
                    <div className={styles.title}>Discover More NFTs</div>
                    <div className={styles.desc}>Explore new trending NFTs</div>
                </div>
                <div className={styles.btn}><img draggable='false' src={eye} alt="eye" />See all</div>

            </div>
            <div className={styles.rowCart}>
                {
                    listNewUser.slice(0, 3).map((obj: any, index: number) => {
                        return (
                            <div className={styles.cart} key={index}>
                                <img draggable='false' className={styles.collectionUser0} src={obj.collectionUser[1]} alt="" />
                                <div className={styles.titleCart}>{obj.titleCollection}</div>
                                <div className={styles.user}>
                                    <img draggable='false' src={obj.userImage} alt="" />
                                    <div className={styles.userName}>{obj.userName}</div>
                                </div>
                                <div className={styles.bottonContent}>
                                    <div className={styles.leftContent}>
                                        <div className={styles.textCartPrice}>Price</div>
                                        <div className={styles.countCart}>{obj.price} ETH</div>
                                    </div>
                                    <div className={styles.rightContent}>
                                        <div className={styles.textCartBid}>Highest Bid</div>
                                        <div className={styles.countCart}>{obj.highestBid} wETH</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DiscoverMore
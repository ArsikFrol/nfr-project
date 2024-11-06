import React from 'react';
import styles from './styles.module.css'

import eye from '../../images/eye.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userInter } from '../UserCart/UserCart';
import CartElem from '../UserCart/CartElem';

type Props = {}

const DiscoverMore = (props: Props) => {
    const users = useSelector((state: any) => state.allUser.users)
    const collections = useSelector((state: any) => state.allUser.collection)

    let listNewUser: any = []
    let listCollection: any = []

    users.slice(4, 7).map((objUser: any) => {
        collections.map((objCollection: any) => {
            listCollection.push(objCollection.titleCollection)
            if (objUser.purchasedCollections[0] == objCollection.titleCollection) {
                let newObj = {
                    id: objUser.id,
                    collectionUser: objCollection.collectionImg,
                    titleCollection: objCollection.titleCollection,
                    userName: objUser.userName,
                    userImage: objUser.userImage,
                    price: objCollection.price,
                    highestBid: objCollection.highestBidAverage
                }
                listNewUser.push(newObj)
            }
        })
    })

    let listUser: any = []

    listNewUser.map((obj: any) => {
        Object.keys(obj.collectionUser).map((key: string) => {
            let newObj = {
                id: obj.id,
                collectionImage: obj.collectionUser[key].image,
                collectionHighestBid: obj.collectionUser[key].highestBid,
                collectionPrice: obj.collectionUser[key].price,
                collectionTitle: obj.collectionUser[key].titleNFT,
                userImage: obj.userImage,
                userName: obj.userName
            }

            listUser.push(newObj)
        })
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.topContent}>
                <div className={styles.leftContent}>
                    <div className={styles.title}>Discover More NFTs</div>
                    <div className={styles.desc}>Explore new trending NFTs</div>
                </div>

                <Link onClick={() => window.scroll({ top: 0 })} to='/nft' style={{ textDecoration: 'none' }}>
                    <div className={styles.btn}><img draggable='false' src={eye} alt="eye" />See all</div>
                </Link>
            </div>
            <div className={styles.rowCart}>
                {
                    listUser.slice(0, 3).map((obj: any, index: number) => {
                        return (
                            <CartElem id={obj.id} discover key={index} highestBid={obj.collectionHighestBid} image={obj.collectionImage} price={obj.collectionPrice} titleNFT={obj.collectionTitle} userImage={obj.userImage} userName={obj.userName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DiscoverMore
import React from 'react'
import styles from './styles.module.css'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

type Props = {}

const TrendingCollection = (props: Props) => {

    const users = useSelector((state: any) => state.allUser.users)
    const collections = useSelector((state: any) => state.allUser.collection)

    let listNewUser: any = []

    users.map((objUser: any) => {
        collections.map((objCollection: any) => {
            if (objUser.purchasedCollections[0] == objCollection.titleCollection) {
                let newObj = {
                    id: objUser.id,
                    titleCollection: objCollection.titleCollection,
                    userName: objUser.userName,
                    userImage: objUser.userImage,
                    countPurple: Object.keys(objCollection.collectionImg).length - 3,
                    image: objCollection.collectionImg

                }
                listNewUser.push(newObj)
            }
        })

    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Trending Collection</div>
            <div className={styles.desc}>Checkout our weekly updated trending collection.</div>
            <div className={styles.rowCollection}>
                {
                    listNewUser.slice(0, 3).map((objUser: any, index: number) => {
                        const to: string = `/user${objUser.id}`
                        return (
                            <div key={index} className={styles.element}>
                                <div className={styles.rowCollectionImage}>
                                    <img draggable='false' src={objUser.image['id1'].image} className={styles.collectionImg0} />
                                    <div className={styles.imageTwo}>
                                        <img draggable='false' src={objUser.image['id2'].image} className={styles.collectionImg1} />
                                        <img draggable='false' src={objUser.image['id3'].image} className={styles.collectionImg2} />
                                        <div className={styles.btnPurple}>{objUser.countPurple}+</div>
                                    </div>
                                </div>
                                <div className={styles.titleCollection}>{objUser.titleCollection}</div>
                                <Link onClick={() => window.scroll({ top: 0 })} to={to} style={{ textDecoration: 'none', color: 'white' }}>
                                    <div className={styles.user}>
                                        <img draggable='false' className={styles.userImage} src={objUser.userImage} alt="" />
                                        <div className={styles.nameUser}>{objUser.userName}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendingCollection
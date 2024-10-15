import React from 'react'
import styles from './styles.module.css'

import { useSelector } from 'react-redux'

type Props = {}

const TrendingCollection = React.memo(function TrendingCollection(props: Props) {

    const users = useSelector((state: any) => state.allUser.users)
    const collections = useSelector((state: any) => state.allUser.collection)

    let listNewUser: any = []
    let listCollection: any = []

    users ? users.map((objUser: any) => {
        collections ? collections.map((objCollection: any) => {
            listCollection.push(objCollection.titleCollection)
            if (objUser.purchasedCollections[0] == objCollection.titleCollection) {
                let newObj = {
                    collectionUser: objCollection.collectionImg,
                    titleCollection: objCollection.titleCollection,
                    userName: objUser.userName,
                    userImage: objUser.userImage
                }

                listNewUser.push(newObj)
            }
        }) : console.log()
    }) : console.log()

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Trending Collection</div>
            <div className={styles.desc}>Checkout our weekly updated trending collection.</div>
            <div className={styles.rowCollection}>
                {listNewUser ?
                    listNewUser.map((objUser: any, index: number) => {
                        return (
                            <div key={index} className={styles.element}>
                                <div className={styles.rowCollectionImage}>
                                    <img src={objUser.collectionUser[0]} className={styles.collectionImg0} />
                                    <div className={styles.imageTwo}>
                                        <img src={objUser.collectionUser[1]} className={styles.collectionImg1} />
                                        <img src={objUser.collectionUser[2]} className={styles.collectionImg2} />
                                        <div className={styles.btnPurple}>5+</div>
                                    </div>
                                </div>
                                <div className={styles.titleCollection}>{objUser.titleCollection}</div>
                                <div className={styles.user}>
                                    <img className={styles.userImage} src={objUser.userImage} alt="" />
                                    <div className={styles.nameUser}>{objUser.userName}</div>
                                </div>
                            </div>
                        )
                    }) : console.log('ошибка')
                }
            </div>
        </div>
    )
})

export default TrendingCollection
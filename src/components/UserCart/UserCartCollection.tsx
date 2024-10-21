import React from 'react'
import styles from './styles.module.css'
import CartElem from './CartElem'

import { userInter } from './UserCart'

type Props = {
    user: userInter
}

const listSort = ['Created', 'Owned', 'Collection']

const UserCartCollection = React.memo(function UserCartCollection(props: Props) {

    const [activSort, setActiveSort] = React.useState('Created')

    return (
        <div className={styles.wrapperCollection}>
            <div className={styles.conteinetRow}>
                <div className={styles.rowSort}>
                    {
                        listSort.map((sort: string, index: number) => {
                            return (
                                <div onClick={() => setActiveSort(sort)} className={activSort == sort ? styles.sortElemActiv : styles.sortElem} key={index}>{sort} <span className={styles.countSort}>{sort == 'Created' ? Object.keys(props.user.cartUser.createdNFT).length : sort == 'Owned' ? Object.keys(props.user.cartUser.ownedNFT).length : sort == 'Collection' ? props.user.purchasedCollections.length : ''}</span> </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.containerNFT}>
                {activSort == 'Created' ?
                    Object.keys(props.user.cartUser.createdNFT).map((key: string, index: number) => {
                        return (
                            <CartElem userName={props.user.userName} userImage={props.user.userImage} titleNFT={props.user.cartUser.createdNFT[key].titleNFT} key={index} highestBid={props.user.cartUser.createdNFT[key].highestBid} image={props.user.cartUser.createdNFT[key].image} price={props.user.cartUser.createdNFT[key].price} />
                        )
                    }) : activSort == 'Owned' ?
                        Object.keys(props.user.cartUser.ownedNFT).map((key: string, index: number) => {
                            return (
                                <CartElem userName={props.user.userName} userImage={props.user.userImage} titleNFT={props.user.cartUser.ownedNFT[key].titleNFT} key={index} highestBid={props.user.cartUser.ownedNFT[key].highestBid} image={props.user.cartUser.ownedNFT[key].image} price={props.user.cartUser.ownedNFT[key].price} />
                            )
                        }) : activSort == 'Collection' ?
                            props.user.purchasedCollections.map((obj: any, index: number) => {
                                return (
                                    <CartElem Collection key={index} highestBid={obj.highestBid} image={obj.image} price={obj.price} titleNFT={obj.titleNFT} userImage={props.user.userImage} userName={props.user.userName} />
                                )
                            })
                            : <div></div>
                }
            </div>
        </div>
    )
})

export default UserCartCollection
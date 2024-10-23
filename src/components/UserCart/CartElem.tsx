import React from 'react'
import styles from './styles.module.css'

import { userInter } from './UserCart'
import { Link } from 'react-router-dom'

type Props = {
    image: string,
    price: number,
    highestBid: number,
    titleNFT: string,
    userName: string,
    userImage: string,
    discover?: boolean,
    Collection?: boolean
    id?: number
}

const CartElem = React.memo(function CartElem(props: Props) {
    let to = `/user${props.id}`
    return (
        <div className={props.discover ? styles.wrapperDiscrover : styles.wrapperElem}>
            <img draggable='false' src={props.image} />
            <div className={styles.titleCart}>{props.titleNFT}</div>
            <Link to={to} style={{ textDecoration: 'none' }}>
                <div onClick={() => window.scroll({ top: 0 })} className={styles.user}>
                    <img draggable='false' src={props.userImage} />
                    <span>{props.userName}</span>
                </div>
            </Link>
            <div className={styles.bottomContent}>
                <div className={styles.leftContent}>
                    <span className={styles.titleCount} >Price</span>
                    <span className={styles.count}>{props.price} ETH</span>
                </div>
                <div className={styles.rightContent}>
                    <span className={styles.titleCount} >Highest Bid</span>
                    <span className={styles.count}>{props.highestBid} wETH</span>
                </div>
            </div>
        </div>
    )
})

export default CartElem
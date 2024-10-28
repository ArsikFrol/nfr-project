import React from 'react'
import styles from './styles.module.css'

import wallet from '../../images/HowItWorks/wallet.png'
import collection from '../../images/HowItWorks/collection.png'
import start from '../../images/HowItWorks/start.png'
import { Link } from 'react-router-dom'

type Props = {}

interface cart {
    id: number;
    image: string;
    title: string;
    desc: string
}

const listCart: Array<cart> = [
    { id: 1, image: wallet, title: 'Setup Your wallet', desc: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.' },
    { id: 2, image: collection, title: 'Create Collection', desc: 'Upload your work and setup your collection. Add a description, social links and floor price.' },
    { id: 3, image: start, title: 'Start Earning', desc: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.' }
]

const HowItWorks = React.memo(function HowItWorks(props: Props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>How It Works</div>
            <div className={styles.desc}>Find out how to get started</div>
            <div className={styles.rowCart}>
                {
                    listCart.map((obj: cart, index: number) => {
                        return (
                            <Link key={index} onClick={() => window.scroll({ top: 0 })} style={{ textDecoration: 'none' }} to={obj.title == 'Setup Your wallet' ? '/connectWallet' : obj.title == 'Start Earning' ? '/marketplace' : ''}>
                                <div className={styles.cart} key={obj.id}>
                                    <img draggable='false' src={obj.image} alt="" />
                                    <div className={styles.titleCart}>{obj.title}</div>
                                    <div className={styles.descCart}>{obj.desc}</div>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
})

export default HowItWorks
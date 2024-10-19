import React from 'react'
import styles from './styles.module.css'

import leftImage from '../../images/ConnectWallet/leftImage.png'
import metamask from '../../images/ConnectWallet/metamask.png'
import walletConnect from '../../images/ConnectWallet/walletConnect.png'
import coinbase from '../../images/ConnectWallet/coinbase.png'

type Props = {}

interface btnInter {
    id: number,
    image: string,
    text: string,
}

const listBtn: Array<btnInter> = [
    { id: 1, image: metamask, text: 'Metamask' },
    { id: 2, image: walletConnect, text: 'Wallet Connect' },
    { id: 3, image: coinbase, text: 'Coinbase' }
]

const ConnectWallet = React.memo(function ConnectWallet(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <img draggable='false' src={leftImage} />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.title}>Connect Wallet</div>
                <div className={styles.desc}>Choose a wallet you want to connect. There are several wallet providers.</div>
                <div className={styles.rowBtn}>
                    {
                        listBtn.map((obj: btnInter) => {
                            return (
                                <div className={styles.btn} key={obj.id}>
                                    <img draggable='false' src={obj.image} />
                                    <div className={styles.textBtn}>{obj.text}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
})

export default ConnectWallet
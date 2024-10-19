import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.png'
import titleLogo from '../../images/titleLogo.png'
import userLogo from '../../images/userLogo.png'

type Props = {}

interface navInter {
    text: string,
    link: string
}

const navHeader: Array<navInter> = [
    { text: 'Marketplace', link: '/marketplace' },
    { text: 'Rankings', link: '/rankings' },
    { text: 'Connect a wallet', link: '/connectWallet' }
]

const Header = (props: Props) => {

    return (
        <div className={styles.wrapper}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className={styles.leftContent}>
                    <img draggable="false" style={{ marginRight: '10px' }} src={logo} alt="logo" />
                    <img draggable="false" style={{ marginBottom: '3px' }} src={titleLogo} alt="titleLogo" />
                </div>
            </Link>

            <div className={styles.rightContent}>
                {
                    navHeader.map((navElem: navInter, index: number) => {
                        return (
                            <div key={index} className={styles.elem}><Link to={navElem.link} style={{ textDecoration: 'none', color: 'white' }}>{navElem.text}</Link></div>
                        )
                    })
                }
                <div className={styles.btnSing}><img style={{ background: 'rgba(162, 89, 255, 1)' }} src={userLogo} alt="userLogo" />Sing Up</div>
            </div>
        </div>
    )
}

export default Header
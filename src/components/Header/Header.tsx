import React from 'react'
import styles from './styles.module.css'

import logo from '../../images/logo.png'
import titleLogo from '../../images/titleLogo.png'
import userLogo from '../../images/userLogo.png'

type Props = {}

const navHeader: Array<string> = ['Marketplace', 'Rankings', 'Connect a wallet']

const Header = React.memo(function Header(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div style={{ cursor: 'pointer' }} className={styles.leftContent}>
                <img style={{ marginRight: '10px' }} src={logo} alt="logo" />
                <img style={{ marginBottom: '3px' }} src={titleLogo} alt="titleLogo" />
            </div>
            <div className={styles.rightContent}>
                {
                    navHeader.map((navElem: string, index: number) => {
                        return (
                            <div key={index} className={styles.elem}>{navElem}</div>
                        )
                    })
                }
                <div className={styles.btnSing}><img style={{ background: 'rgba(162, 89, 255, 1)' }} src={userLogo} alt="userLogo" />Sing Up</div>
            </div>
        </div>
    )
})

export default Header
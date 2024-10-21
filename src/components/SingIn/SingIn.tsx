import React from 'react'
import styles from './styles.module.css'

import bgLeft from '../../images/CreateAccount/bgCreateAccount.png'
import password from '../../images/CreateAccount/password.png'
import email from '../../images/CreateAccount/email.png'
import user from '../../images/CreateAccount/user.png'

type Props = {}

interface inputInter {
    id: number,
    image: string,
    placeholder: string,
    type: string
}

const listInput: Array<inputInter> = [
    { id: 1, type: 'text', image: user, placeholder: 'Username' },
    { id: 2, type: 'email', image: email, placeholder: 'Email Address' },
    { id: 3, type: 'password', image: password, placeholder: 'Password' },
    { id: 4, type: 'password', image: password, placeholder: 'Confirm Password' }
]

const SingIn = React.memo(function SingIn(props: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftContent}>
                <img draggable='false' src={bgLeft} />
            </div>
            <div className={styles.rightContent}>
                <div className={styles.title}>Create Account</div>
                <div className={styles.desc}>Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.</div>
                <div className={styles.columnInput}>
                    {
                        listInput.map((obj: inputInter, index: number) => {
                            return (
                                <div key={index} className={styles.inputField}>
                                    <img draggable='false' src={obj.image} />
                                    <input type={obj.type} placeholder={obj.placeholder} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.createAccountBtn}>Create account</div>
            </div>
        </div>
    )
})

export default SingIn
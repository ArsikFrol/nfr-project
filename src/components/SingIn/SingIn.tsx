import React from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
    { id: 3, type: 'password1', image: password, placeholder: 'Password' },
    { id: 4, type: 'password2', image: password, placeholder: 'Confirm Password' }
]

const SingIn = React.memo(function SingIn(props: Props) {

    const getRandomNumber = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const dispatch = useDispatch()
    const users = useSelector((state: any) => state.allUser.users)

    const [emptyInputBool, setEmptyInputBool] = React.useState(true)
    const [createAccount, setCreateAccount] = React.useState('Create account')

    const [nameUser, setNameUser] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password1, setPassword1] = React.useState('')
    const [password2, setPassword2] = React.useState('')

    const clickAccountBtn = () => {
        if (nameUser != '' && email != '' && password1 == password2 && password1 != '') {
            const newObj = {
                id: users[users.length - 1].id + 1,
                email: email,
                password: password,
                userName: nameUser,
                change: [getRandomNumber(1, 10), getRandomNumber(10, 100), getRandomNumber(100, 1000), getRandomNumber(1, 1000)],
                nftsSold: [getRandomNumber(1, 10), getRandomNumber(10, 100), getRandomNumber(100, 1000), getRandomNumber(1, 1000)],
                volume: [getRandomNumber(1, 10), getRandomNumber(10, 100), getRandomNumber(100, 1000), getRandomNumber(1, 1000)],
                userImage: 'https://cdn-icons-png.flaticon.com/128/2115/2115958.png',
                totalSales: 23,
                purchasedCollections: [],
                cartUser: {
                    idCode: "0xc0E3...B79C",
                    "follow": false,
                    "volume": 250,
                    "NFTsSold": 50,
                    "followers": 3000,
                    "bio": "The internet's friendliest designer kid.",
                    "links": [
                        "https://www.youtube.com/",
                        "https://www.google.ru/",
                        "https://vk.com/"
                    ],
                    "createdNFT": {
                        "id1": {
                            "image": "https://api.reservoir.tools/redirect/tokens/0x524cab2ec69124574082676e6f654a18df49a048:10543/image/v1",
                            "price": 1.63,
                            "highestBid": 0.33,
                            "titleNFT": "ID-1"
                        }
                    }
                }
            }

            dispatch({ type: 'ADD_USER', payload: newObj })
            dispatch({ type: 'CREATE_ACCOUNT' })

            setNameUser('')
            setEmail('')
            setPassword1('')
            setPassword2('')
            setEmptyInputBool(true)
            setCreateAccount('The account has been created!')
            alert('The account has been created!')
        } if (password1 != password2) {
            setCreateAccount("Passwords don't match")
            setEmptyInputBool(true)
        } if (nameUser == '' || email == '' || password1 == '' || password2 == '') {
            setCreateAccount('Create account')
            setEmptyInputBool(false)
        }
    }

    const onChangeInput = (text: string, type: string) => {
        if (type == 'text') setNameUser(text)
        if (type == 'email') setEmail(text)
        if (type == 'password1') setPassword1(text)
        if (type == 'password2') setPassword2(text)
    }

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
                                    <input type={obj.type} placeholder={obj.placeholder} value={obj.type == 'text' ? nameUser : obj.type == 'email' ? email : obj.type == 'password1' ? password1 : obj.type == 'password2' ? password2 : ''} onChange={(e) => onChangeInput(e.target.value, obj.type)} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={emptyInputBool ? styles.none : styles.emptyInput}>Fill in all the fields</div>
                <Link to={nameUser != '' && email != '' && password1 != '' && password2 != '' && password1 == password2 ? '/' : ''} style={{ textDecoration: 'none' }}>
                    <div onClick={() => clickAccountBtn()} className={styles.createAccountBtn}>{createAccount}</div>
                </Link>
            </div>
        </div>
    )
})

export default SingIn
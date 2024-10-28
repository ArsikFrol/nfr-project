import React from 'react'
import styles from './styles.module.css'

import UserCartCollection from './UserCartCollection'

import bg from '../../images/bgUserCart.png'
import vk from '../../images/UserCart/vk.png'
import youTube from '../../images/UserCart/youTube.png'
import google from '../../images/UserCart/google.png'
import copy from '../../images/UserCart/copy.png'
import plus from '../../images/UserCart/plus.png'
import flag from '../../images/flag.png'


export interface userInter {
    id: number,
    userName: string,
    userImage: string,
    purchasedCollections: any,
    cartUser: any,
    map?: any
}

type Props = {
    user: userInter
}

const UserCart = React.memo(function UserCart(props: Props) {


    const [follow, setFollow] = React.useState(props.user.cartUser.follow)

    const clickBtn = () => {
        setFollow(!follow)
    }

    return (
        <div className={styles.wrapper}>
            <img draggable='false' src={bg} style={{ width: '100%' }} />
            <img className={styles.userImage} draggable='false' src={props.user.userImage} />
            <div className={styles.desc}>
                <div className={styles.leftContent}>
                    <div className={styles.userName}>{props.user.userName}</div>
                    <div className={styles.rowStat}>
                        <div>
                            <span className={styles.count} >{props.user.cartUser.volume}k+</span>
                            <span className={styles.titleStat} >Volume</span>
                        </div>
                        <div>
                            <span className={styles.count}>{props.user.cartUser.NFTsSold}k+</span>
                            <span className={styles.titleStat}>NFTs Sold</span>
                        </div>
                        <div>
                            <span className={styles.count}>{props.user.cartUser.followers}k+</span>
                            <span className={styles.titleStat}>Followers</span>
                        </div>
                    </div>
                    <div className={styles.bio}>
                        <div className={styles.titleBio}>Bio</div>
                        <span className={styles.bioText}>The internet's friendliest designer kid.</span>
                    </div>
                    <div className={styles.link}>
                        <div className={styles.titleLink}>Links</div>
                        <div className={styles.imageLinks}>
                            <a href={props.user.cartUser.links[2]}><img draggable='false' src={vk} /></a>
                            <a href={props.user.cartUser.links[1]}><img draggable='false' src={google} /></a>
                            <a href={props.user.cartUser.links[0]}><img draggable='false' src={youTube} /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <div onClick={() => alert('Текст скопирован')} className={styles.code}>
                        <img draggable='false' src={copy} />
                        <span>{props.user.cartUser.idCode}</span>
                    </div>
                    <div onClick={() => clickBtn()} className={follow ? styles.btnFollowTrue : styles.btnFollow}>
                        <img draggable='false' src={follow ? flag : plus} />
                        Follow
                    </div>
                </div>
            </div>
            <UserCartCollection user={props.user} />
        </div>
    )
})

export default UserCart
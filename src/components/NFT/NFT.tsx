import React from 'react'
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

import CountdownElem from '../UI/CountdownElem'
import CartElem from '../UserCart/CartElem'

import magicMashrooms from '../../images/bgMagic.png'
import google from '../../images/UserCart/google.png'
import downArrow from '../../images/downArrow.png'

type Props = {}

const listDetails = [
    { id: 1, image: google, text: 'View on Etherscan' },
    { id: 2, image: google, text: 'View on Etherscan' }
]

const listTags = [
    { id: 1, text: 'Animation' },
    { id: 2, text: 'illustration' },
    { id: 3, text: 'moon' },
    { id: 4, text: 'moon' }
]

const NFT = React.memo(function NFT(props: Props) {

    const [isVisible, setIsVisible] = React.useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight >= 2500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const collection = useSelector((state: any) => state.allUser.collection)
    const users = useSelector((state: any) => state.allUser.users)

    const listUserCollection: any = []

    users.map((objUser: any) => {
        objUser.purchasedCollections.map((title: string) => {
            collection.map((objCollec: any) => {
                if (title == objCollec.titleCollection) {
                    const newObj = {
                        id: objUser.id,
                        title: title,
                        imageUser: objUser.userImage,
                        nameUser: objUser.userName,
                        collectionImage: objCollec.collectionImg['id1'].image,
                        highestBid: objCollec.collectionImg['id1'].highestBid,
                        price: objCollec.collectionImg['id1'].price
                    }
                    listUserCollection.push(newObj)
                }
            })
        })
    })

    return (
        <div className={styles.wrapper}>
            <img draggable='false' src={magicMashrooms} style={{ width: '100%', height: '560px' }} />
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.title}>Magic Mashrooms</div>
                    <div className={styles.data}>Minted on Sep 30, 2022</div>
                    <div className={styles.titleCreate}>Created By</div>
                    <div className={styles.wrapperCreate}>
                        <img style={{ width: '24px', height: '24px' }} draggable='false' src='https://cdn-icons-png.flaticon.com/128/2115/2115958.png' />
                        <div className={styles.nameUser}>Orbitian</div>
                    </div>
                    <div className={styles.wrapperDesc}>
                        <div className={styles.titleDesc}>Description</div>
                        <div className={styles.desc}>The Orbitians<br />
                            is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br /><br />There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.<br /><br /> They live in a metal space machines, high up in the sky and only have one foot on Earth.<br />
                            These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</div>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.titleDetal}>Details</div>
                        {
                            listDetails.map((obj: any, index: number) => {
                                return (
                                    <div className={styles.elem} key={index}>
                                        <img style={{ width: '32px', height: '32px' }} draggable='false' src={obj.image} />
                                        <div className={styles.textElem}>{obj.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.titleTags}>Tags</div>
                    <div className={styles.tags}>
                        {
                            listTags.map((obj: any, index: number) => {
                                return (
                                    <div className={styles.elemTags} key={index}>{obj.text}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.rightContent}>
                    <CountdownElem />
                    <div className={styles.btnPlace}>Place Bid</div>
                </div>
            </div>
            <div className={styles.titleNFT}>Other NFTs</div>
            <div className={styles.rowCollection}>
                {
                    listUserCollection.map((obj: any, index: number) => {
                        return (
                            <CartElem discover key={index} highestBid={obj.highestBid} image={obj.collectionImage} price={obj.price} titleNFT={obj.title} userImage={obj.imageUser} userName={obj.nameUser} />
                        )
                    })
                }
            </div>
            {isVisible && (
                <button style={{ position: 'fixed', bottom: '20px', right: '30px', cursor: 'pointer' }}>
                    <img draggable='false' style={{ transform: 'rotate(180deg)' }} src={downArrow} onClick={() => window.scroll({ top: 0 })} />
                </button>
            )}
        </div>
    )
})

export default NFT
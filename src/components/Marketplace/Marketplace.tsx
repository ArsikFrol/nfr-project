import React from 'react'
import styles from './styles.module.css'

import magnifying from '../../images/magnifying.png'
import { useDispatch, useSelector } from 'react-redux'
import CartElem from '../UserCart/CartElem'
import axios from 'axios'

type Props = {}

const Marketplace = React.memo(function Marketplace(props: Props) {
    const [activeSort, setActiveSort] = React.useState('NFTs')
    const [loupeString, setLoupeString] = React.useState('')

    const dispatch = useDispatch()
    let soldNFT = useSelector((state: any) => state.allUser.soldNFT)
    let soldCollection = useSelector((state: any) => state.allUser.soldCollection)

    console.log(loupeString)

    React.useEffect(() => {
        if (activeSort == 'NFTs') {
            if (loupeString != '') {
                axios.get(`http://localhost:3001/soldNFT?q=${loupeString}`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE', payload: data.data })

                })
                axios.get(`http://localhost:3001/soldCollections`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE_COLLECTION', payload: data.data })

                })
            } if (loupeString == '') {
                axios.get(`http://localhost:3001/soldNFT`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE', payload: data.data })

                })
                axios.get(`http://localhost:3001/soldCollections`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE_COLLECTION', payload: data.data })

                })
            }
        }
        if (activeSort == 'Collections') {
            if (loupeString != '') {
                axios.get(`http://localhost:3001/soldCollections?q=${loupeString}`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE_COLLECTION', payload: data.data })

                })
                axios.get(`http://localhost:3001/soldNFT`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE', payload: data.data })

                })
            } if (loupeString == '') {
                axios.get(`http://localhost:3001/soldCollections`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE_COLLECTION', payload: data.data })

                })
                axios.get(`http://localhost:3001/soldNFT`).then((data) => {
                    dispatch({ type: 'SORT_LOUPE', payload: data.data })

                })
            }
        }
    }, [loupeString, activeSort])

    const click = (sort: string) => {
        setLoupeString('')
        setActiveSort(sort)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Browse Marketplace</div>
            <div className={styles.desc}>Browse through more than 50k NFTs on the NFT Marketplace.</div>
            <div className={styles.search}>
                <input type="text" spellCheck="false" placeholder='Search your favourite NFTs' onChange={(e) => setLoupeString(e.target.value)} value={loupeString} />
                <img draggable='false' src={magnifying} />
            </div>

            <div className={styles.conteinerSort}>
                <div className={styles.sort}>
                    <div onClick={() => click('NFTs')} className={activeSort == 'NFTs' ? styles.sortElem1 : styles.sortElem}>
                        NFTs<span className={styles.count}>{soldNFT.length}</span>
                    </div>
                    <div onClick={() => click('Collections')} className={activeSort == 'Collections' ? styles.sortElem2 : styles.sortElem}>
                        Collections
                        <span className={styles.count}>{soldCollection.length}</span>
                    </div>
                </div>
            </div>
            <div className={styles.containerSlod}>
                <div className={activeSort == 'NFTs' ? styles.wrapperSold : styles.none}>
                    {soldNFT.length != 0 ?
                        soldNFT.map((obj: any, index: number) => {
                            return (
                                <CartElem id={obj.soldIdUser} key={index} highestBid={obj.highestBid} image={obj.nftImage} price={obj.price} titleNFT={obj.titleNFT} userImage={obj.userImage} userName={obj.userName} />
                            )
                        }) : <div className={styles.listEmpty}>Список пуст</div>
                    }
                </div>
                <div className={activeSort == 'Collections' ? styles.wrapperSold : styles.none}>
                    {soldCollection.length != 0 ?
                        soldCollection.map((obj: any, index: number) => {
                            return (
                                <CartElem id={obj.soldIdUser} key={index} highestBid={obj.highestBid} image={obj.nftImage} price={obj.price} titleNFT={obj.titleCollection} userImage={obj.userImage} userName={obj.userName} />
                            )
                        }) : <div className={styles.listEmpty}>Список пуст</div>
                    }
                </div>
            </div>
        </div >
    )
})

export default Marketplace
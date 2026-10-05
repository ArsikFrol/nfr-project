import React from 'react'

import styles from './styles.module.css'
import art from '../../images/BrowseImage/art.png'
import collectibles from '../../images/BrowseImage/collectibles.png'
import music from '../../images/BrowseImage/music.png'
import photography from '../../images/BrowseImage/photography.png'
import video from '../../images/BrowseImage/video.png'
import utility from '../../images/BrowseImage/utility.png'
import sport from '../../images/BrowseImage/sport.png'
import virtual from '../../images/BrowseImage/virtualWorlds.png'
import { Elem } from './Elem'

export type Category = {
    id: number,
    image: string,
    titleCategori: string
}

const listCategori: Category[] = [
    { id: 1, image: art, titleCategori: 'Art' },
    { id: 2, image: collectibles, titleCategori: 'Collectibles' },
    { id: 3, image: music, titleCategori: 'Music' },
    { id: 4, image: photography, titleCategori: 'Photography' },
    { id: 5, image: video, titleCategori: 'Video' },
    { id: 6, image: utility, titleCategori: 'Utility' },
    { id: 7, image: sport, titleCategori: 'Sport' },
    { id: 8, image: virtual, titleCategori: 'Virtual Worlds' }
]

export default function BrowseCategories () {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Browse Categories</div>
            <div className={styles.rowCategori}>
                {
                    listCategori.map((obj, i) => <Elem key={i} obj={obj} />)
                }
            </div>
        </div>
    )
}
import React from "react"

import styles from './styles.module.css'
import { Category } from "./BrowseCategories"

export function Elem({obj}: {obj: Category}) {
    return(
        <div className={styles.categori}>
            <img draggable='false' src={obj.image} alt="" />
            <div className={styles.titleCart}>{obj.titleCategori}</div>
        </div>
    )
}
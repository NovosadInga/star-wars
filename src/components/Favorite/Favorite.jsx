import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import icon from "./img/bookmark.svg"

import styles from './Favorite.module.css';

const Favorite = () =>{
    const storeData = useSelector(state => state.favoriteReducer)
    return (
        <div className={styles.container}>
            <span className={styles.counter}>{ Object.keys(storeData).length}</span>
            <img src={icon} alt="favorites" className={styles.icon}/>
        </div>
    )
}

export default Favorite;
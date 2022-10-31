import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import cn from "classnames"

import neitral from "./img/neitral.svg"
import light from "./img/light.svg"
import dark from "./img/dark.svg"
import {useTheme}  from "@context/ThemeProvider"
import styles from './Favorite.module.css';

const Favorite = () =>{
    const storeData = useSelector(state => state.favoriteReducer)
    const isTheme = useTheme()
    return (
        <div className={styles.container}>
            <span className={styles.counter}>{ Object.keys(storeData).length}</span>
            <div className={cn(styles.icon, styles[`icon_${isTheme.theme}`])}></div>
        </div>
    )
}

export default Favorite;
import { NavLink, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Favorite from '@components/Favorite';
import {useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL}  from "@context/ThemeProvider"
import darkImg from "./img/dark.svg"
import lightImg from "./img/light.svg"
import neitralImg from "./img/neitral.svg"

import styles from './Header.module.css';


const Header = () =>{
    const [icon, setIcon] = useState(darkImg)
    const isTheme = useTheme()
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(lightImg);
                break;
            case THEME_DARK: setIcon(darkImg);
                break;
            case THEME_NEITRAL: setIcon(neitralImg);
                break;
            default: setIcon(darkImg);
                break;
        }
    }, [isTheme]);
    return (
    <div className={styles.container}>
        <img src={icon} alt="Star Wars" className={styles.logo} />
        <ul className={styles.menu}>
            <li className={styles.item}>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/people?page=1" >People</NavLink>
            </li>
            <li>
                <NavLink to="/search" >Search</NavLink>
            </li>
            <li>
                <NavLink to="/not-found" >Not Found</NavLink>
            </li>
            <li>
                <NavLink to="/fail" >Fail</NavLink>
            </li>
        </ul>
        <Link to="/favorites" >
            <Favorite/>
        </Link>

    </div>
    )
}


export default Header;
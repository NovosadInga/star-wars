
import {THEME_LIGHT, THEME_DARK, THEME_NEITRAL}  from "@context/ThemeProvider"
import lightImg from "./img/light.jpg"
import darkImg from "./img/dark.jpg"
import neitralImg from "./img/neitral.jpg"
import styles from './ChooseSide.module.css';
import ChooseSideItem from '@components/HomePage/ChooseSide/ChooseSideItem';

const ChooseSide = () =>{
    const choose_side_elements = [
        {
            classes: 'item_neitral',
            theme: THEME_NEITRAL,
            text: "Neitral Side",
            img: neitralImg
        },
        {
            classes: 'item_dark',
            theme: THEME_DARK,
            text: "Dark Side",
            img: darkImg
        },
        {
            classes: 'item_light',
            theme: THEME_LIGHT,
            text: "Light Side",
            img: lightImg
        }
        ]
    return <div className={styles.container}>
        {choose_side_elements.map(({classes,theme,text,img }) => {
            return (
                <ChooseSideItem 
                    key={theme}
                    classes ={classes}
                    theme={theme}
                    text={text}
                    img={img}
                />
            )
        })}
       
       

    </div>
}

ChooseSide.propTypes = {
    // text: PropTypes.string
}
export default ChooseSide;
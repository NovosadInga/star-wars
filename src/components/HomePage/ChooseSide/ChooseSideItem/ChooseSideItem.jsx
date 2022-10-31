import PropTypes from 'prop-types';
import cn from "classnames"

import {useTheme}  from "@context/ThemeProvider"


import styles from './ChooseSideItem.module.css';
const ChooseSideItem = ({
    classes,
    theme,
    text,
    img
}) => {
    const isTheme = useTheme()
    return <div 
    className={cn(styles.item, styles[classes])}
    onClick={()=> isTheme.change(theme)}
    >
        <div className={styles.text}>{text}</div>
        <img className={styles.img} src={img} alt={text} />
    </div>
}
ChooseSideItem.propTypes = {
    classes: PropTypes.string,
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}
export default ChooseSideItem;
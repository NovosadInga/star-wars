import PropTypes from 'prop-types';
import styles from './PersonInfo.module.css';
const PersonInfo = ({personInfo}) =>{
    return (
        <ul className={styles.list}>
                {
                    personInfo.map(({title, data}) =>{
                       return(
                        data && (
                            <li key={title} className={styles.item}>
                                <span  className={styles.item__title}>{title} </span>: {data}
                            </li>
                        )
                       )
                    })
                }
            </ul>
    )
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}
export default PersonInfo;
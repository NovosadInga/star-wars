import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.css';
const SearchPageInfo = ({people}) =>{
    return <>
    {
        people.length ?
            <ul className={styles.list}>
                {people.map(({id, name,img})=>{
                    return (
                        <li key={id} className={styles.item}>
                            <Link to={`/people/${id}`}>
                                <img className={styles.img} src={img} alt={name} />
                                <p className={styles.text}>{name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            :
            <h2 className={styles.comment}>No result</h2>
    }
    </>
}

SearchPageInfo.propTypes = {
    people: PropTypes.array
}
export default SearchPageInfo;
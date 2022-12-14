import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PeopleList.module.css';

const PeopleList = ({people}) =>{
    return (
        <ul className={styles.list__container}>
        { people.map(({id, name, img})=>{
          return <li key={id} className={styles.list__item}>
            <Link to={`/people/${id}`}>
                <img src={img} alt={name} className={styles.person__img}/>
                <p>{name}</p>
           </Link>
           </li>
        })}
    </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;
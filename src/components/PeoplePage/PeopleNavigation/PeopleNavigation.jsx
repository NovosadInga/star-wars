import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui/UiButton';
import styles from './PeopleNavigation.module.css';
const PeopleNavigation = ({
    getResourse,
    prevPage,
    nextPage,
    counterPage
}) =>{
    const handleChangeNext = ()=> getResourse(nextPage);
    const handleChangePrev = ()=> getResourse(prevPage);
    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
                <UiButton
                    text='Previus'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
 
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.link}>
            <UiButton
                    text='Next'
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
}
export default PeopleNavigation;
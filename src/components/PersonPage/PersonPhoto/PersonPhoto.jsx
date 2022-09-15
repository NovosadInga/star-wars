import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonFromFavorite, setPersonToFavorite } from '../../../store/actions';
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favorite-fill.svg'

import styles from './PersonPhoto.module.css';
const PersonPhoto = ({
    personPhoto,
    personName,
    personId,
    personFavorite,
    setPersonFavorite
}) =>{

    const dispatch = useDispatch()
    const dispatchFovoritePeopel = () => {
        if(personFavorite){
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto,
                }
            }))
            setPersonFavorite(true)
        }
    }
    return (
        <>
            <div className={styles.container}>
                <img  className={styles.photo} src={personPhoto} alt={personName} />
                <img 
                src={personFavorite? iconFavoriteFill : iconFavorite}
                alt=""
                onClick={dispatchFovoritePeopel}
                className={styles.favorite}
                 />
            </div>
            
          
        </>
    )
}

PersonPhoto.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}
export default PersonPhoto;
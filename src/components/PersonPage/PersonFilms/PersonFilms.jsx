import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { makeConcurrentRequest, changeHTTP } from '@utils/network';

import styles from './PersonFilms.module.css';
const PersonFilms = ({personFilms}) =>{
    const [filmsName, setFilmsName] = useState([]);
    useEffect(() => {
       (async ()=>{
        const filmsHTTPS =  personFilms.map(url => changeHTTP(url)) 
        const response = await makeConcurrentRequest(filmsHTTPS);
        setFilmsName(response)
       })()
       
    }, []);


    return (
        <ul className={styles.list}>
            {filmsName
                .sort((a,b) => a.episode_id - b.episode_id )
                .map(({title, episode_id})=>{
                return  <li 
                            key={episode_id} 
                            className={styles.item}
                        >
                        <span className={styles.episode}>Episode {episode_id}</span>
                        <span className={styles.colon}>:</span>
                        <span className={styles.title}>{title}</span>
                    </li>
                })
            }
        </ul>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}
export default PersonFilms;
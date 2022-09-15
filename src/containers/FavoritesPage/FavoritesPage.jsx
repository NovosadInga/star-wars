
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () =>{
    const [people, setPeople] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer)
    useEffect(()=>{
        const arr = Object.entries(storeData)
        if(arr.length){
            const res = arr.map(el => {
                return {
                    id: el[0],
                    ...el[1]
                }
            })
            setPeople(res)
        }
        
    }, [])
    return (
        <>
            <h1 className='title'>Favorites Page</h1>
            {
                people.length ?
                <PeopleList people={people}/> :
                <h2 >No data</h2>
            }
        </>
       
    )
}
export default FavoritesPage;
import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { widthErrorApi } from '@hoc-helpers/widthErrorApi';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonInfo from '@components/PersonPage/PersonInfo';
import UiLoading from '@ui/UiLoading';
import { getApiResourse } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import {API_PERSON} from '@constants/api';

import styles from './PersonPage.module.css';


const PersonFilms = React.lazy(()=> import('@components/PersonPage/PersonFilms'))



const PersonPage = ({seterrorApi}) =>{
    const id  = useParams().id;
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);    
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async ()=>{
          const res = await getApiResourse(`${API_PERSON}/${id}/`)

          storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)
         
          if(res){
            setPersonInfo([
                { title: 'Height', data: res.height},
                { title: 'Mass', data: res.mass},
                { title: 'Hair Color', data: res.hair_color},
                { title: 'Skin Color', data:  res.skin_color},
                { title: 'Eye Color', data: res.eye_color},
                { title: 'Birth year', data: res.birth_year},
                { title: 'Gender', data: res.gender},
            ])
            setPersonName(res.name)
            setPersonPhoto(getPeopleImage(id))
            res.films.length && setPersonFilms(res.films)
            seterrorApi(false);
          }
          else{
            seterrorApi(true);
        }
        })()
     }, []);
    
    return (
        <>
        
            <PersonLinkBack/>
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto 
                        personPhoto={personPhoto}
                        personName={personName}
                        personId={id}
                        personFavorite = {personFavorite}
                        setPersonFavorite = {setPersonFavorite}
                    />
                    { personInfo && <PersonInfo personInfo={personInfo}/> }
                    { 
                        personFilms && (
                            <Suspense fallback={ <UiLoading theme="blue" isShadow />}>
                                <PersonFilms personFilms={personFilms}/> 
                            </Suspense>
                        )
                    }
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    seterrorApi: PropTypes.func
}
export default widthErrorApi(PersonPage);
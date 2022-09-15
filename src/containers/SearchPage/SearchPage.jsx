import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { getApiResourse } from '@utils/network';
import { getPeopleId, getPeopleImage} from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPage/SearchPageInfo';
import UiInput from '@components/UI/UiInput';
import { API_SEARCH } from '@constants/api';
import { widthErrorApi } from '@hoc-helpers/widthErrorApi';

import styles from './SearchPage.module.css';
import { result } from 'lodash';


const SearchPage = ({seterrorApi}) =>{
    const [inputSearchValue, setInputSearchValue ] = useState('')
    const [people, setPeople ] = useState([])

    const getResponse = async params =>{
       const res = await getApiResourse(API_SEARCH + params)
       if(res){
        const peopleList  = res.results.map(({name, url}) => {
            const id = getPeopleId(url)
            const img = getPeopleImage(id)
            return {
                id,
                img,
                name
            }
            
        })
        setPeople(peopleList)
        seterrorApi(false);
       } else{
        seterrorApi(true);
       }
    }

    useEffect(() => {
        getResponse('')
    }, []);
    
    const debounceGetResponse = useCallback(debounce(value => getResponse(value), 300), [])
    const handleInputChange = (value)=>{
        setInputSearchValue(value)
        debounceGetResponse(value)

    }
    return <div>
        <h1 className='title'>Search Page</h1>
        <UiInput
            placeholder="Input charactets's value"
            value={inputSearchValue}
            handleInputChange={handleInputChange}
            classes={styles.search}
        />
        <SearchPageInfo people={people}/>
    </div>
}

SearchPage.propTypes = {
    seterrorApi: PropTypes.func
}
export default widthErrorApi(SearchPage);
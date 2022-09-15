// файл для работы с сетью

import { HTTP, HTTPS } from "@constants/api"

/**
 * Изменяет url из HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url запроса
 * @returns {Promise} - Promise с результатом запроса
 */

export const getApiResourse = async (url) =>{
    try{
        const res = await fetch(url)
        if(!res.ok){
            console.error("Could not featch.", res.status)
            return false
        }
        return await res.json();
    } catch(error){
         console.error("Could not featch.", error.message)
         return false
    }


}
/**
 * Отправляет запрос Fetch на каждый url масива
 * @param {Array} url - масив с url-ами для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const makeConcurrentRequest = async (url) => {
   const res = await Promise.all(url.map(res=>{
        return fetch(res).then(res => res.json())
    }));
    return res;
}
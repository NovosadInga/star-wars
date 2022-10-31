
import { useLocation } from "react-router";
import img from "./img/not_found.png"
import styles from './NotFoundPage.module.css';
const NotFoundPage = () =>{
    let location = useLocation()
    return <>
   <h1 className='title'>Not Found</h1>
    <img className={styles.img} src={img} alt="Not Found" />
    <h1 className={styles.text}>No match for <u>{location.pathname}</u></h1>
    </>
}

export default NotFoundPage;
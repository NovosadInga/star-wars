import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import styles from './ErrorPage.module.css';

const ErrorPage = () =>{
    return <>
    <h1 className='title'>Error Page</h1>
    <div>
        <ErrorMessage/>
    </div>
</>
}


export default ErrorPage;
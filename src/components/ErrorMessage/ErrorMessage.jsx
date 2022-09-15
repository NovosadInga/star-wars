import UiVideo from '@ui/UiVideo';
import video from "./video/error-video.mp4"
import styles from './ErrorMessage.module.css';

const ErrorMessage = () =>{
    return <>
    <p className={styles.text}>
        The dark side of the force has won. <br/>
        We cotton display data.<br/>
        Come back when we fix everithing
    </p>
    <UiVideo src={video} classes={styles.video} playbackRate={2}/>
    </>
}

export default ErrorMessage;
import PropTypes from 'prop-types';
import cm from "classnames"


import styles from './UiVideo.module.css';
import { useEffect, useRef } from 'react';
const UiVideo = ({
    src,
    playbackRate = 1.0,
    classes
}) =>{
    const videoRef = useRef(null)
    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    }, []);

    return <video 
    className={cm(styles.video, classes)}
    autoPlay
    loop
    muted
    ref={videoRef}
    >
        <source src={src}/>
    </video>
}

UiVideo.propTypes = {
   src: PropTypes.string,
   playbackRate: PropTypes.number,
   classes: PropTypes.string
}
export default UiVideo;
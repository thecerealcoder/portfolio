import React from 'react';
import styles from './Overlay.module.css';

function Overlay({project: {path, description}}) {
    return(
        <div id="overlay">
            <div className={styles.projectCard}>
                <video src={path} autoPlay loop muted></video>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <i id="close" className="far fa-window-close fa-2x"></i>
        </div>
    )
}

export default Overlay;
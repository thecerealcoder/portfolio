import React from 'react';
import styles from './Overlay.module.css';

function Overlay({project: {name, path, description}}) {
    return(
        <div id="overlay">
            <div className={styles.projectCard}>
                <div className={styles.vidContainer}>
                    <video src={path} autoPlay loop muted playsInline></video>
                </div>
                <div className={styles.details}>
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
            <i id="close" className="far fa-window-close fa-2x"></i>
        </div>
    )
}

export default Overlay;
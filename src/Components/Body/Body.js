import React from 'react';
import styles from './Body.module.css';
import Dragger from 'react-physics-dragger';

function Body() {

    return(
        <div>
            <div id={styles.blurb}>
                <p id={styles.mission}>
                    : software engineer continuously looking for opportunites to collaborate with others and learn new ways to program my creativity into actuality
                </p>
            </div>
            <Dragger className={styles.work}>
                <video src="/demos/covid.mp4" autoPlay loop></video>
                <video src="/demos/brewguru.mp4" autoPlay loop></video>
                <video src="/demos/weather.mp4" autoPlay loop></video>
            </Dragger>
        </div>
    )
};

export default Body;
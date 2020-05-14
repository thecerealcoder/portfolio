import React from 'react';
import styles from './Body.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Body() {

    return(
        <div>
            <div id={styles.blurb}>
                <p id={styles.mission}>
                    : software engineer continuously looking for opportunites to collaborate with others and learn new ways to program creativity into actuality
                </p>
            </div>
            <hr/>
                <Carousel infiniteLoop autoPlay centerMode interval={4500} showStatus={false} showThumbs={false} className={styles.work}>
                    <video className="open" src="/demos/covid.mp4" autoPlay loop muted></video>
                    <video className="open" src="/demos/brewguru.mp4" autoPlay loop muted></video>
                    <video className="open" src="/demos/weather.mp4" autoPlay loop muted></video>
                </Carousel>
            <hr/>
        </div>
    )
};

export default Body;
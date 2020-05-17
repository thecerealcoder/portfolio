import React, {useState} from 'react';
import styles from './Body.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Overlay from '../Overlay/Overlay';

function Body() {

    const [project, setProject] = useState({});

    const work = {
        brewguru: {
            path: "demos/brewguru.mp4",
            description: "ddd"
        },
        covid: {
            path: "demos/covid.mp4",
            description: "ddd"
        },
        weather: {
            path: "demos/weather.mp4",
            description: "ddd"
        },
        thecerealcoder: {
            path: "demos/thecerealcoder.mp4",
            description: "ddd"
        }
    };

    function handleClick(ev) {
        setProject(work[`${ev.target.value}`]);
    }

    return (
        <div>
            <div id={styles.blurb}>
                <p id={styles.mission}>
                    : software engineer continuously looking for opportunites to collaborate with others and learn new ways to program creativity into actuality
                </p>
            </div>
            <hr />
            <Carousel infiniteLoop interval={4500} showStatus={false} showThumbs={false} className={styles.work}>
                <div className={styles.imgContainer}>
                    <img src="demos/screen.png"></img>
                    <div className={styles.readMore}>
                        <h1>COVID Tracker</h1>
                        <button value="covid" className="open" onClick={ev => handleClick(ev)}>
                            Read More
                            </button>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src="demos/screen.png"></img>
                    <div className={styles.readMore}>
                        <h1>BrewGuru</h1>
                        <button value="brewguru" className="open" onClick={ev => handleClick(ev)}>
                            Read More
                        </button>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src="demos/screen.png"></img>
                    <div className={styles.readMore}>
                        <h1>Weather</h1>
                        <button value="weather" className="open" onClick={ev => handleClick(ev)}>
                            Read More
                            </button>
                    </div>
                </div>
            </Carousel>
            <hr />
            <Overlay project={project}/>
        </div>
    )
};

export default Body;
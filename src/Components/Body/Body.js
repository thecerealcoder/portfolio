import React, {useState} from 'react';
import styles from './Body.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Overlay from '../Overlay/Overlay';

function Body() {

    const [project, setProject] = useState({});

    const work = {
        brewguru: {
            name: "BrewGuru",
            path: "demos/brewguru.mp4",
            description: "Aliquip eiusmod enim aliqua ea ad laboris reprehenderit ea dolore fugiat adipisicing velit minim dolore. Lorem id ad ullamco labore ex ipsum mollit non nostrud Lorem adipisicing id quis. Anim incididunt mollit veniam cillum pariatur aliqua non duis ex veniam exercitation eu duis."
        },
        covid: {
            name: "COVID-19 Tracker",
            path: "demos/covid.mp4",
            description: "Aliqua dolore pariatur aliquip quis id eu aliquip. Ex est fugiat magna commodo aliquip non excepteur officia id mollit eu. Dolore ipsum reprehenderit ut dolore minim minim sunt nisi labore eiusmod. Do nulla dolore et esse quis ea adipisicing aute cillum esse. Velit elit duis aliquip do eiusmod labore eiusmod sunt aute proident esse aute exercitation. Consequat veniam minim qui ut mollit culpa id laborum. Incididunt non cupidatat amet esse laboris Lorem dolore occaecat."  
        },
        weather: {
            name: "WeatherMe",
            path: "demos/weather.mp4",
            description: "Consequat ad deserunt cupidatat velit laborum. Anim veniam est eu minim sint duis tempor ex sit pariatur cillum adipisicing dolore irure. Adipisicing aliqua labore amet eu dolore deserunt nulla. Minim proident ad voluptate amet voluptate incididunt culpa laboris ad do magna ad cillum. Quis dolore non minim ad esse ipsum et laborum deserunt velit labore voluptate laborum Lorem."
        },
        thecerealcoder: {
            name: "TheCerealCoder",
            path: "demos/thecerealcoder.mp4",
            description: "Aute mollit nisi eu voluptate. Cillum labore eu enim exercitation ea ipsum esse cillum ad sint minim exercitation. In aliqua quis officia aute aliqua ipsum amet elit cupidatat adipisicing do. Culpa ut culpa id qui amet aute aute. Pariatur id dolore excepteur id non et est cillum mollit est incididunt ipsum excepteur incididunt. Dolor tempor fugiat tempor deserunt aute ea duis sint ut est. Nostrud velit deserunt aliquip reprehenderit occaecat duis id."
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
            <div className={styles.carouselContainer}>
                <Carousel infiniteLoop interval={4500} showStatus={false} showThumbs={false} className={styles.work}>
                    <button value="covid" className={`${styles.imgContainer} open`} onClick={ev => handleClick(ev)}>
                        <img src="demos/screen.png"></img>
                    </button>
                    <button value="brewguru" className={`${styles.imgContainer} open`} onClick={ev => handleClick(ev)}>
                        <img src="demos/screen.png"></img>
                    </button>
                    <button value="weather" className={`${styles.imgContainer} open`} onClick={ev => handleClick(ev)}>
                        <img src="demos/screen.png"></img>
                    </button>
                </Carousel>
                <hr />
                <Overlay project={project}/>
            </div>
        </div>
    )
};

export default Body;
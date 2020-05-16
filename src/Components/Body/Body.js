import React from 'react';
import styles from './Body.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Body() {

    return (
        <div>
            <div id={styles.blurb}>
                <p id={styles.mission}>
                    : software engineer continuously looking for opportunites to collaborate with others and learn new ways to program creativity into actuality
                </p>
            </div>
            <hr />
            <Carousel infiniteLoop autoPlay centerMode interval={4500} showStatus={false} showThumbs={false} className={styles.work}>
                <div className={styles.imgContainer}>
                    <img src="https://images.unsplash.com/photo-1589618770139-043ba3b30542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1066&q=80"></img>
                    <div className={styles.readMore}>
                        <button className="open">
                            Read More
                            </button>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://images.unsplash.com/photo-1589618770139-043ba3b30542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1066&q=80"></img>
                    <div className={styles.readMore}>
                        <button className="open">
                            Read More
                            </button>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://images.unsplash.com/photo-1589618770139-043ba3b30542?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1066&q=80"></img>
                    <div className={styles.readMore}>
                        <button className="open">
                            Read More
                            </button>
                    </div>
                </div>
            </Carousel>
            <hr />
        </div>
    )
};

export default Body;
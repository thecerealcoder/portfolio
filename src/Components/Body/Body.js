import React from 'react';
import styles from './Body.module.css';

function Body() {
    return(
        <div className={styles.container}>
            <div id={styles.blurb}>
                <p id={styles.title}>
                    Software Engineer
                    &nbsp;
                    <span>noun</span>
                </p>
                <p id={styles.mission}>
                    : continuously looking for opportunites to collaborate with others and learning new ways to program my creativity into actuality.
                </p>
            </div>
        </div>
    )
};

export default Body;
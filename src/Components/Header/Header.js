import React, {useEffect, useState} from "react";
import styles from "./Header.module.css";

function Header() {

    const [animationDone, setAnimationDone] = useState({});
    
    useEffect(()=> {
        setTimeout(() => {
            setAnimationDone({animation: 'none'})
        },900);
    }, [setAnimationDone]);


    return(
        <div className={styles.container}>
            <div id={styles.name}>
                <span id={styles.fname}>Chris </span>
                <span id={styles.lname}>Elliott</span>
            </div>
            <div className={styles.badges}>
                <a >
                    <i style={animationDone} className="fas fa-envelope fa-2x"></i>
                </a>
                <a target="_blank" href="https://github.com/thecerealcoder">
                    <i style={animationDone} className="fab fa-github-square fa-2x"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/christopher-elliott-15a954139/">
                    <i style={animationDone} className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a target="_blank" href="https://www.thecerealcoder.com/">
                    <i style={animationDone} className="fas fa-comment fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;


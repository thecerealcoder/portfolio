import React from "react";
import styles from "./Header.module.css";

function Header() {
    return(
        <div className={styles.container}>
            <div id={styles.name}>
                <span id={styles.fname}>Chris </span>
                <span id={styles.lname}>Elliott</span>
            </div>
            <div className={styles.badges}>
                <i className="fas fa-envelope fa-2x"></i>
                <i className="fab fa-github-square fa-2x"></i>
                <i className="fab fa-linkedin-in fa-2x"></i>
                <i className="fas fa-comment fa-2x"></i>
            </div>
        </div>
    )
}

export default Header;


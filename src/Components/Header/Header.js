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
                <i className="fas fa-envelope"></i>
                <i className="fab fa-github-square"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fas fa-comment"></i>
            </div>
        </div>
    )
}

export default Header;


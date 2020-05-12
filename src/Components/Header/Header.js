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
                <i class="fas fa-envelope"></i>
                <i class="fab fa-github-square"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fas fa-comment"></i>
            </div>
        </div>
    )
}

export default Header;


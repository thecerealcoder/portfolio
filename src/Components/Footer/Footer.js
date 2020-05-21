import React from 'react';
import styles from './Footer.module.css';

function Footer() {

    return(
        <div className={styles.badgeContainer}>
            <div className={styles.badges}>
                <a href="mailto:thecerealcoder@gmail.com?subject:Contact Inquiry">
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/thecerealcoder">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-elliott-15a954139/">
                    <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.thecerealcoder.com/">
                    <i className="fas fa-comment fa-2x"></i>
                </a>
            </div>
        </div>
    )
}


export default Footer;
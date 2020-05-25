import React from "react";
import styles from "./Overlay.module.css";

function Overlay({
  project: { name, path, description, tools, live, source },
}) {
  return (
    <div id="overlay">
      <div className={styles.projectCard}>
        <div className={styles.vidContainer}>
          <video src={path} autoPlay loop muted playsInline></video>
        </div>
        <div className={styles.links}>
          <a className={(styles.link, styles.live)} href={live}>
            Live <i className="fas fa-external-link-square-alt"></i>
          </a>
          <a className={(styles.link, styles.source)} href={source}>
            Source <i className="fas fa-code"></i>
          </a>
        </div>
        <div className={styles.details}>
          <h1>{name}</h1>
          <div className={styles.tools}>
            {tools &&
              Array.from(tools).map((element, i) => {
                return (
                  <span key={i} className={styles.tool}>
                    {element}
                  </span>
                );
              })}
          </div>
          <p>{description}</p>
        </div>
      </div>
      <i id="close" className="far fa-window-close fa-2x"></i>
    </div>
  );
}

export default Overlay;

import React, { useState } from "react";
import styles from "./Body.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Overlay from "../Overlay/Overlay";

function Body() {
  const [project, setProject] = useState({});

  const work = {
    brewguru: {
      name: "BrewGuru",
      path: "demos/brewguru.mp4",
      tools: ["HTML5", "CSS3", "JavaScript", "React"],
      description:
        "BrewGuru uses a public brewery API in unison with the Google Maps Static API to provide an intuitive interface for end users. You can filter by city, state, or name to search for a list of breweries that match your query. In addition, each brewery listing can generate a static Google Maps image of its location.",
    },
    covid: {
      name: "COVID-19 Tracker",
      path: "demos/covid.mp4",
      tools: ["HTML5", "CSS3", "JavaScript", "React", "Material-UI"],
      description:
        "COVID-19 Tracker uses a coronavirus statistics API to efficiently visualize significant parameters such as cases, recoveries, and deaths for each country. In addition to this data, you can also view a timeline of daily cases and daily deaths for an easy interpretation of the historic activity of coronavirus infection rate.",
    },
    flowly: {
      name: "Flowly",
      path: "demos/flowly.mp4",
      tools: ["HTML5", "CSS3", "JavaScript", "React"],
      description:
        "Flowly uses the OpenWeather API to gather weather location data and displays it. Just enter your location and receive not only real-time weather data such as temperature, wind, and weather condition, but also a weekly weather forecast that is visualized along a dynamic linear gradient background.",
    },
    thecerealcoder: {
      name: "TheCerealCoder",
      path: "demos/thecerealcoder.mp4",
      tools: ["HTML5", "CSS3", "JavaScript", "Express", "Mongoose", "Passport"],
      description:
        "TheCerealCoder is a platform where I document my journey as a programmer and share the material I learn along the way. The blog site was created with HTML5, CSS3, and JavaScript. I used the Express framework to create the blueprint of routes and mongoose to connect with MongoDB and store data such as posts, comments, and user information. With the addition of account creation, I used Passport for authentication and Express Validator for form validation.",
    },
  };

  function handleClick(ev) {
    setProject(work[`${ev.target.value}`]);
  }

  return (
    <div>
      <div id={styles.blurb}>
        <p id={styles.mission}>
          : software engineer continuously looking for opportunites to
          collaborate with others and learn new ways to program creativity into
          actuality
        </p>
      </div>
      <hr />
      <div className={styles.carouselContainer}>
        <Carousel
          infiniteLoop
          interval={4500}
          showStatus={false}
          showThumbs={false}
          className={styles.work}
        >
          <button
            value="covid"
            className={`${styles.imgContainer} open`}
            onClick={(ev) => handleClick(ev)}
          >
            <img src="demos/covid.png" alt=""></img>
          </button>
          <button
            value="brewguru"
            className={`${styles.imgContainer} open`}
            onClick={(ev) => handleClick(ev)}
          >
            <img src="demos/brewguru.png" alt=""></img>
          </button>
          <button
            value="thecerealcoder"
            className={`${styles.imgContainer} open`}
            onClick={(ev) => handleClick(ev)}
          >
            <img src="demos/thecerealcoder.png" alt=""></img>
          </button>
          <button
            value="flowly"
            className={`${styles.imgContainer} open`}
            onClick={(ev) => handleClick(ev)}
          >
            <img src="demos/flowly.png" alt=""></img>
          </button>
        </Carousel>
        <hr />
        <Overlay project={project} />
      </div>
    </div>
  );
}

export default Body;

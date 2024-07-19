import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Contact.module.css";

export const Contact=()=>{
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Fell Free to reach out!!</p>
        </div>
        <ul className={styles.links}>
        <li className={styles.link}>
            <img  src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
            <a href="mailto:yteewari@gmail.com">yteewari@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img  src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"></img>
            <a href="https://www.linkedin.com/in/yogendra-teewari/">linkedin.com/Yogendra-Tiwari</a>
        </li>
        <li className={styles.link}>
            <img  src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
            <a href="https://github.com/yt7406">github.com/yt7406</a>
        </li>
        <li className={styles.link}>
            <img  src={getImageUrl("contact/instagram.png")} alt="Instagram Icon"></img>
            <a href="https://www.instagram.com/yogendra_tiwari4/">instagram.com/yogendra_tiwari4</a>
        </li>
        </ul>
    </footer>
}
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero=()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} >Hi, I'm Yogendra</h1>
            <p className={styles.description} >I am a full-stack developer who works on all aspects of web development, from front-end design to back-end functionality. Reach out if you'd like to learn more!</p>
            <a href="mailto:yogiteewari@gmail.com" className={styles.contactBtn}>Contact Me</a>
            <a href="https://drive.google.com/file/d/1s--2XwXVYqYFiYox1wZHckO69bWA2r1D/view?usp=sharing" className={styles.contactBtn2}>Download Resume</a>
        </div>
        <img src={getImageUrl("hero/fotor-20240319225842.png")} alt="Hero image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}></div>
    </section>
}
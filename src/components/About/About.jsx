import React from 'react';
import styles from './About.module.css'
import img from '../../images/img1.png'

const About = () => {
    return (
        <>
            <header class="sub-header">
                <div class="navbar">
                    <nav class="nav">
                        <a href="index.html" id="logo">
                            <img src="images/header_logo.png" />
                        </a>
                        <div class="nav-links" id="navlinks">
                            <i class="fa fa-times" onclick="hideMenu()"></i>

                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="">Discussion Forum</a></li>
                                <li><a href="">Login</a></li>
                                <li><a href="">Signup</a></li>
                            </ul>
                        </div>
                        <i class="fa fa-bars" onclick="showMenu()"></i>
                    </nav>
                </div>
            </header>
            <div className={`${styles.textBox} ${styles.text1Box}`}>
                <h1>About Us</h1>
            </div>
            <section className={styles.aboutUs}>
                <div className={styles.row}>
                    <div className={styles.aboutCol}>
                        <h2>EASY PROFILE MANAGER</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                            asperiores tenetur tempora, earum dicta ipsam, aperiam, explicabo
                            magnam nihil harum labore adipisci nisi accusamus quia officia atque
                            enim quaerat animi.
                        </p>
                        <a href="" className={styles.btnn}>EXPLORE NOW</a>
                    </div>
                    <div className={styles.aboutCol}>
                        <img src={img} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
import React from 'react';
import styles from './About.module.css'
import img from '../../images/img1.png'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <header class={styles.subHeader}>
                <Navbar/>      
    </header>
            <div className={`${styles.textBox} ${styles.textBox1}`}>
                <h1>About Us</h1>
            </div>
            <section className={styles.aboutUs}>
                <div className={styles.row}>
                    <div className={styles.aboutCol}>
                        <h2 className={styles.aboutHead}>EASY PROFILE MANAGER</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
                            asperiores tenetur tempora, earum dicta ipsam, aperiam, explicabo
                            magnam nihil harum labore adipisci nisi accusamus quia officia atque
                            enim quaerat animi.
                        </p>
                        <Link to="/register" className={styles.btnn}>EXPLORE NOW</Link>
                    </div>
                    <div className={styles.aboutCol}>
                        <img src={img} alt="about img"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default About;
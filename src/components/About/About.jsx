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
                        With the increase in interest of the public on the stock market recently, a stock portfolio tracker is an essential tool that every investor needs to know about. A proper portfolio tracker tool can help the investors create a correct investing and trading plan, make essential decisions regarding the stock transactions. Merofolio, a stock portfolio tracker, is a progressive web application that will suit investors who want to monitor their portfolio's true performance with minimal hassle. There are many tools to support their investing journey, like market update emails, alerts, discussion forums and watchlists. All an investor needs to do is enter their transactions whenever they buy or sell stocks. It is targeted to Nepal Stock Market Investors.


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
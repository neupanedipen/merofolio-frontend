import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.header}></div>
            <div className={styles.textBox}>
                <h1>MEROFOLIO</h1>
                <p>EASY PROFILE MANAGER</p>
                <a href="/about" className={styles.btn}>Visit Us To Know More</a>
            </div>
        </>
    )
}

export default Header
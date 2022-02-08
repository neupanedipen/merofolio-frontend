import React from 'react';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header>
            {/* <a className={logo" href="/"><img src="images/logo.svg" alt="logo"/></a> */}
            <div className={styles.logo}>MeroFolio</div>
            <nav>
                <ul className={styles.nav__links}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/forum">Forum</a></li>
                </ul>
            </nav>
            <a className={styles.cta} href="/login">Login</a>
        </header>
    )
}

export default Navbar;
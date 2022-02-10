import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <header>
            {/* <a className={logo" href="/"><img src="images/logo.svg" alt="logo"/></a> */}
            <div className={styles.logo}><NavLink to="/">MeroFolio</NavLink></div>
            <nav>
                <ul className={styles.nav__links}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/forum">Forum</NavLink></li>
                </ul>
            </nav>
            <NavLink className={styles.cta} to="/login">Login</NavLink>
        </header>
    )
}

export default Navbar;
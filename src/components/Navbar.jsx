import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"
import logo from "../images/header_logo.png"

const Navbar = () => {
  function showMenu() {
    styles.navlinks.style.right = "0";
  }

  function hideMenu() {
    styles.navlinks.style.right = "-400px";
  }

 

  return (
    <>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <NavLink to="/" id={styles.logo}>
            <img src={logo} alt="logo"/>
          </NavLink>
          <div className={styles.navLinks} id={styles.navlinks}>
            <i className={`fa fa-times ${styles.fa}`} onClick={hideMenu}></i>

            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/forum">Discussion Forum</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/register">Signup</NavLink></li>
              <li><NavLink to="/market">Live Market</NavLink></li>
            </ul>
          </div>
          <i className={`fa fa-bars ${styles.fa}`} onClick={showMenu}></i>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
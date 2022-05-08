import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css"
import logo from "../images/header_logo.png"
import { userContext } from './Context/UserContext'

const Navbar = () => {
  let navigate = useNavigate();
  function showMenu() {
    styles.navlinks.style.right = "0";
  }

  function hideMenu() {
    styles.navlinks.style.right = "-400px";
  }

  const user = useContext(userContext);

  const handleLogout = () => {
            localStorage.clear()
            console.log('logged out')
            navigate("/")
            window.location.reload();
  }

  return (
    <>
      <div className={styles.navbar}>
        <nav className={styles.nav}>
          <NavLink to="/" id={styles.logo}>
            <img src={logo} alt="logo" />
          </NavLink>
          <div className={styles.navLinks} id={styles.navlinks}>
            <i className={`fa fa-times ${styles.fa}`} onClick={hideMenu}></i>

            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/forum">Discussion Forum</NavLink></li>
              <li><NavLink to="/market">Live Market</NavLink></li>
              {
                user.userId ? (
                  <>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/profile">Profile</NavLink></li>
                  <li><button className={`${styles.btn} ${styles.logout}`} onClick={handleLogout}>Logout</button></li>
                  </>
                ) : (
                  <>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Signup</NavLink></li>
                  </>
                )
              }
            </ul>
          </div>
          <i className={`fa fa-bars ${styles.fa}`} onClick={showMenu}></i>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
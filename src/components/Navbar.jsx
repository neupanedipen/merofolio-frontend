import React, {useEffect} from 'react';
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

  useEffect(() => {
    const onScroll = (event) => {
      {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          // headerDom.style.height = "5rem";
          // headerDom.classList.add(`${styles.navBackground}`);
          console.log("true");
        } else {
          console.log("false")
          // headerDom.style.height = "8rem";
          // headerDom.classList.remove(`${styles.navBackground}`);
        }
      }
    }
      
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

    return (
      <>
        <div className={styles.navbar}>
        <nav className={styles.nav}>
          <NavLink to="/" id={styles.logo}>
            <img src={logo} />
          </NavLink>
          <div className={styles.navLinks} id={styles.navlinks}>
            <i className={`fa fa-times ${styles.fa}`} onClick={hideMenu}></i>

            <ul>
              <li><NavLink to="#how can we help">How can we help you</NavLink></li>
              <li><NavLink to="#feature">Features</NavLink></li>
              <li><NavLink to="/forum">Discussion Forum</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/register">Signup</NavLink></li>
            </ul>
          </div>
          <i className={`fa fa-bars ${styles.fa}`} onClick={showMenu}></i>
        </nav>
      </div>
      </>
    )
}

export default Navbar;
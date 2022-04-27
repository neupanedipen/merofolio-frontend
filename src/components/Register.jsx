import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import loginBanner from '../images/login.jpeg'
import styles from './Login.module.css';
import Footer from './Footer';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className={styles.loginBox}>
                    <div className={styles.login}>
                    <div className={styles.image}><img src={loginBanner} alt=""/></div>
                    <div className={styles.details}>
                        <h1 className={styles.title}>Register</h1>
                        <div className={styles.input}><label htmlFor="">Email
                            </label>
                            <input type="text" placeholder="Enter your email address"/>
                        </div>
                        <div className={styles.input}><label htmlFor="">Username
                            </label>
                            <input type="text" placeholder="Enter your desired username"/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password
                            </label><input type="text" placeholder="Enter your password"/>
                        </div>
                        <button className={styles.loginButton}>Register</button>
                        <span className={styles.signup}><Link to="/login">Already Have an account? ∙ Log In now</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
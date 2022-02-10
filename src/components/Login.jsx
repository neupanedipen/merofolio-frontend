import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import loginBanner from '../images/login.jpeg'
import styles from './Login.module.css';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className={styles.loginBox}>
                    <div className={styles.login}>
                    <div className={styles.image}><img src={loginBanner} alt=""/></div>
                    <div className={styles.details}>
                        <h1 className={styles.title}>Log in</h1>
                        <div className={styles.input}><label htmlFor="">Email
                            </label>
                            <input type="text" placeholder="Enter your email address"/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password
                            </label><input type="text" placeholder="Enter your password"/>
                        </div>
                        <button className={styles.loginButton}>Log in</button>
                        <span className={styles.signup}><Link to="/register">Can’t log in? ∙ Sign up for an account</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
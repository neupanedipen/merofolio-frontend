import React, { useState, useContext, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Profile.module.css'
import { userContext } from './Context/UserContext';
import axios from 'axios';
import { Link, useNavigate, Navigate } from 'react-router-dom';

const Profile = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const user = useContext(userContext)

    if (user.userId === null) {
        return <Navigate to="/login" replace />;
    }

    if (user.userId) {
        axios.get(`http://localhost:5000/user/${user.userId}`)
            .then(res => {
                console.log(res.data);
                setUsername(res.data.name)
                setEmail(res.data.email)
            })
    }




    return (
        <>
            <Navbar />
            <section class={styles.profile}>
                <header class={styles.header}>
                    <div class={styles.details}>
                        <div className={styles.profilePic}><p className={styles.userLetter}>{username.charAt(0).toUpperCase()}</p></div>
                        <h1 class={styles.heading}>{username}</h1>
                        <div class={styles.location}>
                            <p>{email}</p>
                        </div>

                        <div>
                            <button className={styles.btn}><Link to="/dashboard">Go to Dashboard</Link></button>
                        </div>

                        <div class={styles.stats}>
                            <div class={styles.col4}>
                                <h4>130000</h4>
                                <p>Total Portfolio Balacne</p>
                            </div>
                            <div class={styles.col4}>
                                <h4>10</h4>
                                <p>Stocks Invested</p>
                            </div>
                            <div class={styles.col4}>
                                <h4>0</h4>
                                <p>Discussions</p>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <Footer />
        </>
    )
}

export default Profile;
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <>
            <Navbar/>
            <section class={styles.profile}>
                <header class={styles.header}>
                    <div class={styles.details}>
                    <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=b38c22a46932485790a3f52c61fcbe5a" alt="John Doe" class={styles.profilePic}/>
                    <h1 class={styles.heading}>Claire Doe</h1>
                    <div class={styles.location}>
                        <p>Pokhara, Nepal</p>
                    </div>

                    <div>
                        <button className={styles.btn}>Edit Profile</button>
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
            <Footer/>
        </>
    )
}

export default Profile;
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar'
import styles from './Forum.module.css'
import Footer from './Footer';
import ForumForm from './ForumForm';

const Forum = () => {
    return (
        <>
            <Navbar />
                <div className={styles.content}>
                    <div className={styles.main}>
                    <h2 className={styles.forumHead}>Recent Discussions</h2>
                    <ul className={styles.posts}>
                        <li>
                        <a href="#">
                            <div className={styles.txt}>
                            <h5>How to apply for IPOS?</h5>
                            <div className={styles.sub}>
                                <strong className={styles.author}>neupanedipen</strong>
                                <span>&nbsp;-&nbsp;</span>
                                <span>2nd November 2021</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span>
                                <i className={`${styles.fas} ${styles.faComments}`}></i>
                                &nbsp;3 Replies
                                </span>
                                
                                
                            </div>
                            </div>
                        </a>
                        </li>
                        <li >
                        <a href="#">
                            <div className={styles.txt}>
                            <h5>What is a demat account?</h5>
                            <div className={styles.sub}>
                                <strong className={styles.author}>neupanedipen</strong>
                                <span>&nbsp;-&nbsp;</span>
                                <span>2nd November 2021</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span>
                                <i className={`${styles.fas} ${styles.faComments}`}></i>
                                &nbsp;3 Replies
                                </span>
                                
                                
                            </div>
                            </div>
                        </a>
                        </li>
                        <li >
                        <a href="#">
                            <div className={styles.txt}>
                            <h5>How to buy and sell shares with TMS?</h5>
                            <div className={styles.sub}>
                                <strong className={styles.author}>neupanedipen</strong>
                                <span>&nbsp;-&nbsp;</span>
                                <span>3rd November 2021</span>
                                <span>&nbsp;-&nbsp;</span>
                                <span>
                                <i className={`${styles.fas} ${styles.faComments}`}></i>
                                &nbsp;3 Replies
                                </span>
                                
                                
                            </div>
                            </div>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className={styles.side}>
                        <h5><Link to="/dashboard">Dashboard</Link></h5>
                        <h5><Link to="/profile">Profile</Link></h5>
                        <h5><Link to="home">Home</Link></h5>
                    </div>
                </div>
                <ForumForm/>
            <Footer/>    
        </>
    )
}

export default Forum;
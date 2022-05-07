import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import styles from './Forum.module.css'
import Footer from './Footer';
import ForumForm from './ForumForm';
import { userContext } from './Context/UserContext'
import axios from 'axios';


const Forum = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/discussionForum/question').then(res => setQuestions(res.data))
    }, [])

    const user = useContext(userContext)
    return (
        <>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.main}>
                    <h2 className={styles.forumHead}>Recent Discussions</h2>
                    <ul className={styles.posts}>
                        {
                            questions.map(question => {
                                return (
                                    <li>
                                        <a href="#">
                                            <div className={styles.txt}>
                                                <h5>{question.text}</h5>
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
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.side}>
                    <h5><Link to="/dashboard">Dashboard</Link></h5>
                    <h5><Link to="/profile">Profile</Link></h5>
                    <h5><Link to="home">Home</Link></h5>
                </div>
            </div>
            {
                user.userId && (
                    <ForumForm />
                )
            }
            <Footer />
        </>
    )
}

export default Forum;
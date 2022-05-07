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
    const [name, setName] = useState("");
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
                                axios.get(`http://localhost:5000/user/${question.createdBy}`).then(res => setName(res.data.name))
                                return (
                                    <li>
                                        <Link to={`${question._id}`}>
                                            <div className={styles.txt} key={question._id}>
                                                <h5>{question.text}</h5>
                                                <div className={styles.sub}>
                                                    <strong className={styles.author}>{name}</strong>
                                                    <span>&nbsp;-&nbsp;</span>
                                                    <span>{(question.createdAt).toLocaleString()}</span>
                                                    <span>&nbsp;-&nbsp;</span>
                                                    <span>
                                                        <i className={`${styles.fas} ${styles.faComments}`}></i>
                                                        &nbsp;3 Replies
                                                    </span>


                                                </div>
                                            </div>
                                        </Link>
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
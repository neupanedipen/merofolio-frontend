import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Forum.module.css'

const SingleQuestion = () => {
    const { id } = useParams();
    const [question, setQuestion] = useState("")
    const [reply, setReply] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:5000/discussionForum/question/${id}`)
            .then(res => {setQuestion(res.data.text)})
    }, [])

    const handleSubmit = () => {
        console.log("Submit");
    }

    return (
        <>
            <Navbar />
            <div className={`${styles.content} ${styles.SingleQuestion}`}>
                <div className={styles.main}>
                    <h2 className={styles.forumHead}>Forum</h2>
                    <h3 id={styles.question}>{question}</h3>
                </div>
            </div>

            <div className={styles.answer}>
                <h2>Reply to this Question</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <textarea className={styles.textArea} rows={5} columns={5} value={reply} onChange={e => setReply(e.target.value)} placeholder="Enter your reply" />
                    <button className={`${styles.formSubmit} ${styles.ansBtn}`}>Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default SingleQuestion;
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Forum.module.css'
import { userContext } from './Context/UserContext'

const SingleQuestion = (props) => {
    // let navigate = useNavigate();
    const user = useContext(userContext);
    const [author, setAuthor] = useState("");
    const { id } = useParams();
    const [question, setQuestion] = useState("")
    const [reply, setReply] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:5000/discussionForum/question/${id}`)
            .then(res => {
                setQuestion(res.data.text);
                setAuthor(res.data.createdBy)
            })
    }, [])

    const handleSubmit = () => {
        console.log("Submit");
    }

    const handleDelete = () => {
        const config = {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
          window.confirm("Are you sure you wish to delete this item?") && axios.delete(`http://localhost:5000/discussionForum/question/${id}`, config)
        .then(res => {
            console.log(res.data)
            window.location.href="/forum"
        })
    }

    return (
        <>
            <Navbar />
            <div className={`${styles.content} ${styles.SingleQuestion}`}>
                <div className={styles.main}>
                    <h2 className={styles.forumHead}>Forum</h2>
                    <h3 id={styles.question}>{question}{
                        user.userId === author && (
                            <span className={styles.temperBtns}><i className={`fa fa-pencil-square-o ${styles.edit}`}></i><i onClick={handleDelete} className={`fa fa-trash-o ${styles.delete}`} ></i></span>
                        )
                    }</h3>
                </div>
            </div>

            {
                user.userId && (
                    <div className={styles.answer}>
                        <h2>Reply to this Question</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <textarea className={styles.textArea} rows={5} columns={5} value={reply} onChange={e => setReply(e.target.value)} placeholder="Enter your reply" />
                            <button className={`${styles.formSubmit} ${styles.ansBtn}`}>Submit</button>
                        </form>
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default SingleQuestion;
import React, {useState, } from 'react';
import styles from './ForumForm.module.css'
import axios from 'axios';

const ForumForm = () => {
    const [question, setQuestion] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const config = {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }

          const data = {
              text: question
          }

          axios.post('http://localhost:5000/discussionForum/question', data, config)
            .then(res => {
                console.log(res)
                setQuestion(""); 
                window.location.reload();               
            })
    }
    
    

    return (
        <>
            <div className={styles.askQuestions}>
                <h2>Ask Questions</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <textarea rows={5} columns={5} value={question} onChange={e=> setQuestion(e.target.value)} placeholder="Enter your question"/>
                    <button className={styles.formSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ForumForm;
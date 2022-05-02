import React from 'react';
import styles from './ForumForm.module.css'

const ForumForm = () => {
    return (
        <>
            <div className={styles.askQuestions}>
                <h2>Ask Questions</h2>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Enter Title'/>
                    <textarea rows={5} columns={5} placeholder="Enter queries"/>
                    <button className={styles.formSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ForumForm;
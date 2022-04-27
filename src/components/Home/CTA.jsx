import React from 'react';
import {Link} from 'react-router-dom'
import styles from './CTA.module.css'

const CTA = () => {
    return (
    <section className={styles.cta}>
        <h1>MEROFOLIO is free to use</h1>
        <Link to="/register" className={styles.btn}>GET STARTED!!</Link>
   </section>
    )
}

export default CTA;
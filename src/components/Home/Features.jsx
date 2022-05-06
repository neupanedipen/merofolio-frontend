import React from 'react';
import styles from './Features.module.css'

const Features = () => {
    return (
        <>
            <section id={styles.feature} className={styles.features}>
                <h1>FEATURES</h1>
                <p>A detailed look at the features we provide.</p>
                <div className={styles.row}>
                    <div className={styles.courseCol}>
                        <h3>Portfolio Monitoring</h3>
                        <p>
                            Measure the true performance of your portfolio and check if it is
                            aligned with your goals
                        </p>
                    </div>
                    <div className={styles.courseCol}>
                        <h3>Alert System</h3>
                        <p>
                            Notify user on reaching the predetermined value on the watchlist
                            section
                        </p>
                    </div>
                    <div className={styles.courseCol}>
                        <h3>Discussion Forum</h3>
                        <p>
                            Helps new investors to clear their queries related to stock market
                            where anybody familiar can answer the questions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;
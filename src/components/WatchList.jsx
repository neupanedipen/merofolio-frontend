import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './WatchList.module.css'
const WatchList = () => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get('https://nepstockapi.herokuapp.com/')
            .then(res => {
                setOptions(res.data);
                // console.log(res.data);
            })
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div id={styles.data}>
                    <select>
                        <option value="Select Stock Symbol"></option>
                        {options.map((option, index) => (
                            <option value={option.Symbol} key={index}>{option.Symbol}</option>
                        ))}
                    </select>
                    <button>Add</button>
                </div>
            </div>

            <div className={styles.cards}>
                <div className={`${styles.card} ${styles.investment} ${styles.watchCard}`}>
                    <h3 id={styles.watchlistHead}>MNBBL</h3>
                    <p>LTP: 800</p>
                    <p>Close: 800</p>
                    <p>%change: +2</p>
                    <p>Prev Closing: 720</p>

                    <div className={`${styles.tableCell} ${styles.lastCell}`}>

                        <a className={`${styles.icons} ${styles.trash}`}>
                            <i className={`fa fa-trash fa-lg ${styles.fa} ${styles.trash}`} ></i>
                        </a>

                        <a className={`${styles.icons} ${styles.bell}`}>
                            <i className={`fa fa-bell fa-lg ${styles.fa} ${styles.bell}`} ></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchList;
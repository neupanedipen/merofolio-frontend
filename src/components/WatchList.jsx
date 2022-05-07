import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './WatchList.module.css'
// import {useNavigate} from 'react-router-dom'
const WatchList = () => {
    // let navigate = useNavigate();

    const [options, setOptions] = useState([]);
    const [value, setValue] = useState("");
    const [stocks, setStocks] = useState([]);
    const [targetPrice, setTargetPrice] = useState();

    useEffect(() => {
        axios.get('https://nepstockapi.herokuapp.com/')
            .then(res => {
                setOptions(res.data);
                // console.log(res.data);
            })
    }, [])

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get('http://localhost:5000/watchlist', config)
            .then(res => setStocks(res.data))
    }, [])

    const handleClick = async () => {
        const data = {
            nameOfCompany: value,
            targetPrice
        }

        axios.post('http://localhost:5000/watchlist', data, config)
            .then(res => {
                console.log(res)
                setOptions("");
                setValue("")

            })
        console.log("handleclick");
        // window.location.reload();
    }

    const handleDelete = (e) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`http://localhost:5000/watchlist/${e}`, config).then((res) => {
                console.log(res.data)
                window.location.href = "/dashboard"

            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <div className={styles.container}>
                <div id={styles.data}>
                    <select value={value} onChange={e => setValue(e.currentTarget.value)}>
                        <option value="Select Stock Symbol"></option>
                        {options.map((option, index) => (
                            <option value={option.Symbol} key={index}>{option.Symbol}</option>
                        ))}
                    </select>
                    <input type="number" id={styles.age} placeholder="Set Your Limit" value={targetPrice} onChange={e => setTargetPrice(e.target.value)} />
                    <button onClick={handleClick}>Add</button>
                </div>

            </div>

            <div className={styles.cards}>
                {
                    stocks.map(stock => {
                        return (
                            <div key={stock._id} className={`${styles.card} ${styles.investment} ${styles.watchCard}`}>
                                <h3 id={styles.watchlistHead} >{stock.nameOfCompany}</h3>
                                <p>Target Price: {stock.targetPrice}</p>
                                <p>Close: {stock.ltp}</p>

                                <div className={`${styles.tableCell} ${styles.lastCell}`}>

                                    <a className={`${styles.icons} ${styles.trash}`}>
                                        <i onClick={() => handleDelete(stock._id)} className={`fa fa-trash fa-lg ${styles.fa} ${styles.trash}`} ></i>
                                    </a>

                                    <a className={`${styles.icons} ${styles.bell}`}>
                                        <i className={`fa fa-bell fa-lg ${styles.fa} ${styles.bell}`} ></i>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default WatchList;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './AddModal.module.css'
import {Navigate} from 'react-router-dom'

const Modal = (props) => {
    const [options, setOptions] = useState([]);
    const [numberOfShares, setNoOfShares] = useState();
    const [price, setPrice] = useState();
    const [value, setValue] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        axios.get('https://nepstockapi.herokuapp.com/')
        .then(res => {
            setOptions(res.data);
            // console.log(res.data);
        })
    }, [])

    // console.log(allStocks)
    

    const handleSubmit = e => {
        if(!value || !numberOfShares || !price){
            alert("Enter all details before clicking the Add button")
        }
        e.preventDefault();
        const data = {nameOfCompany: value, numberOfShares, price};
        // console.log(data);
        // const data = {  }

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        axios.post(`http://localhost:5000/stocks`, data, config).then((res) => {
            if (res.data.errorMessage) {
                return console.log(res.data.errorMessage);
            }
            setSuccess(true);
            console.log(res.data, "Stock Added")
            return <Navigate to="/dashboard" replace/>
        })
            .catch((error) => {
                console.log(error);
            });
        
        setValue("");
        setNoOfShares("");
        setPrice("")
        
        

    }

    return (
        <>
        <div className ={styles.container}>
            <div className ={styles.interior}>
                <a className ={styles.btn} href="#open-modal"> Add Stock</a>
            </div>
        </div>
        <div id="open-modal" className ={styles.modalWindow}>
            <div>
                <a href="" title="Close" className ={styles.modalClose}>Close</a>
                <h1>Add Stock</h1>
                {
                    success && (
                        <div>
                            <p className={styles.green}>Stock Added successfully!</p>
                        </div>
                    )
                }
                <form onSubmit={handleSubmit}>
                    <select value={value} onChange={e => setValue(e.currentTarget.value)}>
                        <option value= "Select Stock Symbol"></option>
                        {options.map((option, index) => (
                        <option value={option.Symbol} key={index}>{option.Symbol}</option>
                        ))}
                    </select>
					<input type="number" name="holdings" placeholder="Holding Units" value={numberOfShares} onChange={e => setNoOfShares(e.target.value)}/>
					<input type="number" step=".01" name="avgPrice" placeholder="Average Price" value={price} onChange={e => setPrice(e.target.value)}/>
					<button className={styles.btn} onClick={handleSubmit}>Add</button>
				  </form>
            </div>
        </div>
        </>
    )
}

export default Modal;
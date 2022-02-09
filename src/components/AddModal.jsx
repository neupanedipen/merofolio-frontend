import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './AddModal.module.css'

const Modal = () => {
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
        <div className ={styles.container}>
            <div className ={styles.interior}>
                <a className ={styles.btn} href="#open-modal"> Add Stock</a>
            </div>
        </div>
        <div id="open-modal" className ={styles.modalWindow}>
            <div>
                <a href="" title="Close" className ={styles.modalClose}>Close</a>
                <h1>Add Stock</h1>
                <form>
                    <select>
                        <option value= "Select Stock Symbol"></option>
                        {options.map((option, index) => (
                        <option value={option.Symbol} key={index}>{option.Symbol}</option>
                        ))}
                    </select>
					<input type="number" name="holdings" placeholder="Holding Units"/>
					<input type="number" step=".01" name="avgPrice" placeholder="Average Price"/>
					<button className={styles.btn}>Add</button>
				  </form>
            </div>
        </div>
        </>
    )
}

export default Modal;
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styles from './ProfitAlert.module.css'
const ProfitAlert = () => {
    const [targetProfit, setTargetProfit] = useState(0);
    const [profitVal, setProfitVal] = useState(0);

    const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
      axios.get(`http://localhost:5000/targetProfit`, config).then(res => {
          setTargetProfit(res.data.targetProfit);
      })
    }, [])
    
    const handleClick = () => {
        axios.post(`http://localhost:5000/targetProfit`,{targetProfit: profitVal},config).then(res => {
            setProfitVal("");
            window.location.reload();            
        })
    }

    const handleDel = () => {
        window.confirm("Are you sure you wish to delete this item?") && axios.delete(`http://localhost:5000/targetProfit`, config).then(res => {
            console.log(res.data);
            window.location.reload();
        })
    }

    
    return (
        <div className={styles.profitAlert}>
                <h2>Profit Alert</h2>
                <p style={{"color":"black" , "margin": "1rem 0"}}>Target Profit: {targetProfit}<span className={styles.btnicons}><i onClick={() => handleDel()} className={`fa fa-trash-o ${styles.delete}`} ></i></span></p>
                <p style={{"color": "black", "fontWeight": "300"}}>You'll receive an email alert when the total portfolio profit surpasses the set Profit.</p>
                <input type="number" id="profit" placeholder="Enter Minimum Profit for alert" value={profitVal} onChange={e => setProfitVal(e.target.value)}/>
                <button style={{"margin": "1rem 0"}} onClick = {handleClick}>Add Alert</button>
            </div>
    )
}

export default ProfitAlert;
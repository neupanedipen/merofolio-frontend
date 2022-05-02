import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styles from './LiveMarket.module.css'
import Navbar from './Navbar';
import Footer from './Footer';

const LiveMarket = () => {
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        axios.get('https://nepstockapi.herokuapp.com/')
        .then(res => {
            setStocks(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <>
            <Navbar/>
            <div className={styles.assetTable}>
                <table className={styles.styledTable}>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Stock Symbol</th>
                        <th>Close</th>
                        <th>Prev. Close</th>
                        <th>Point Change</th>
                        <th>% Change</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    
                        stocks.map(stock => {
                        return (
                            <tr>
                            <td key={stock["S.No"]}>{stock["S.No"]}</td>
                            <td>{stock.Symbol}</td>
                            <td>{stock.Close}</td>
                            <td>{stock['Prev. Close']}</td>
                            <td>{stock.Diff}</td>
                            <td>{stock['Diff %']}</td>
                            <td>{stock.Open}</td>
                            <td>{stock.High}</td>
                            <td>{stock.Low}</td>
                            </tr>                        
                        )
                        })
                    }
                   
                </tbody>
            </table>
            </div>
            <Footer/>
        </>
    )    
}

export default LiveMarket;
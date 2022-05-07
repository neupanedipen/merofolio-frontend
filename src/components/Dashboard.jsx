import React, {useContext, useState, useEffect} from 'react';
import Navbar from './Navbar';
import styles from './Dashboard.module.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import Modal from './AddModal';
import Footer from './Footer'
import WatchList from './WatchList';
import {userContext} from './Context/UserContext'
import { Navigate } from 'react-router-dom';
import { StocksContext } from './Context/StocksContext';

const data = {
  labels: ["Jan 1", "Jan 2", "Jan 3", "Jan 5", "Jan 6", "Jan 8", "Jan 11"],
  datasets: [
    {
      label: "Profit/ Loss",
      data: [22000, 21870, 20200, 24391, 26780, 26311, 24879],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const Dashboard = () => {
    const [investment, setInvestment] = useState(0);
    const [profit, setProfit]= useState(0);
    const [balance, setBalance] = useState(0);
    const allstocks = useContext(StocksContext);

  
    // if(allstocks){
    //     allstocks.reduce((acc, curr) => {
    //         setProfit(acc + curr.profit);
    //         setBalance(acc+curr.ltp*curr.numberOfShares);
    //         setInvestment(acc+curr.numberOfShares+curr.price)
    // })
    // }
    

    
    const user = useContext(userContext);
    if(user.userId === null){
        return <Navigate to="/login" replace />;
    }


    // useEffect(() => {
    //     axios.get('https://nepstockapi.herokuapp.com/')
    //     .then(res => console.log(res.data))
    // }, [])
    // profit = allstocks.reduce((acc, curr) => {
    //     return acc+ curr.profit
    // })
    return (
        <div className={styles.dashboard}>
            <Navbar/>
            <h2>Portfolio Summary</h2>
            <div className={styles.cards}>
            <div className={`${styles.card} ${styles.investment}`}>
                <h3 id="investment">{investment}</h3>
                <p>Total Investment</p>
            </div>
            <div className={`${styles.card} ${styles.profit} ${styles.loss}`}>
                <h3 id="profitLoss">{profit}</h3>
                <p>Total Profilt/Loss</p>
            </div>
            <div className={`${styles.card} ${styles.balance}`}>
                <h3 id="balance">{balance}</h3>
                <p>Current Balance</p>
            </div>
            </div>
            <div>
            <h2>Profit/Loss Summary</h2>
            <Line data={data} 
            width={800}
            height={300}
            options={{ maintainAspectRatio: false, responsive: false }}
            className={styles.chartBox}            
            />
            </div>

            <h2>Your Assets</h2>
            <Modal/>
            <div className={styles.assetTable}>
                <table className={styles.styledTable}>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>LTP</th>
                        <th>Holdings</th>
                        <th>Avg. Buy Price</th>
                        <th>Profit/Loss</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allstocks.map(stock => {
                            return (
                                <tr>
                                <td>{stock.nameOfCompany}</td>
                                <td>{stock.ltp}</td>
                                <td>{stock.numberOfShares}</td>
                                <td>{stock.price}</td>
                                <td>{stock.profit}</td>
                                <td>+ -</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
            <h2>Watchlist</h2>
            <WatchList/>
            <Footer/>
        </div>
    )
}

export default Dashboard;

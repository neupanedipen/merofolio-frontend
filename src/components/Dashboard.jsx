import React from 'react';
import Navbar from './Navbar';
import styles from './Dashboard.module.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import Modal from './AddModal';
import Footer from './Footer'

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

    // useEffect(() => {
    //     axios.get('https://nepstockapi.herokuapp.com/')
    //     .then(res => console.log(res.data))
    // }, [])

    return (
        <div className={styles.dashboard}>
            <Navbar/>
            <h2>Portfolio Summary</h2>
            <div className={styles.cards}>
            <div className={`${styles.card} ${styles.investment}`}>
                <h3 id="investment">100000</h3>
                <p>Total Investment</p>
            </div>
            <div className={`${styles.card} ${styles.profit} ${styles.loss}`}>
                <h3 id="profitLoss">+30000</h3>
                <p>Total Profilt/Loss</p>
            </div>
            <div className={`${styles.card} ${styles.balance}`}>
                <h3 id="balance">130000</h3>
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
                    <tr>
                        <td>MNBBL</td>
                        <td>545</td>
                        <td>50</td>
                        <td>398</td>
                        <td>147</td>
                        <td>+ -</td>
                    </tr>
                    <tr>
                        <td>NICLBL</td>
                        <td>545</td>
                        <td>50</td>
                        <td>398</td>
                        <td>147</td>
                        <td>+ -</td>
                    </tr>
                    <tr className={styles.activeRow}>
                        <td>GBBL</td>
                        <td>600</td>
                        <td>35</td>
                        <td>650</td>
                        <td>50</td>
                        <td>+-</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <h2>Watchlist</h2>
            <div className={styles.cards}>
            <div className={`${styles.card} ${styles.investment} ${styles.watchCard}`}>
                <h3 id={styles.watchlistHead}>MNBBL</h3>
                <p>LTP: 800</p> 
                <p>Close: 800</p> 
                <p>%change: +2</p>
                <p>Prev Closing: 720</p>
            </div>
            </div>            
            <Footer/>
        </div>
    )
}

export default Dashboard;

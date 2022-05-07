import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import styles from './Dashboard.module.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import Modal from './AddModal';
import Footer from './Footer'
import WatchList from './WatchList';
import { userContext } from './Context/UserContext'
import { Navigate } from 'react-router-dom';
import { StocksContext } from './Context/StocksContext';
import axios from 'axios';

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
    const [editedUnits, setEditedUnits] = useState(0);
    const [editedPrice, setEditedPrice] = useState(0);
    const [editStock, setEditStock] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [investment, setInvestment] = useState(0);
    const [profit, setProfit] = useState(0);
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
    if (user.userId === null) {
        return <Navigate to="/login" replace />;
    }

    // useEffect(() -> {
    //     axios.get(`http://localhost:5000/user/${user.userId}`)
    //     .then(res => setProfit(res.data.dashboardProfit))
    // }, [])

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    if (user.userId) {
        axios.get(`http://localhost:5000/user/${user.userId}`)
            .then(res => setProfit(res.data.dashboardProfit))
    }

    // useEffect(() => {
    //     axios.get('https://nepstockapi.herokuapp.com/')
    //     .then(res => console.log(res.data))
    // }, [])
    // profit = allstocks.reduce((acc, curr) => {
    //     return acc+ curr.profit
    // })
    const handleDelete = (e) => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`http://localhost:5000/stocks/${e}`, config).then((res) => {
                console.log(res.data)
                window.location.href = "/dashboard"

            }).catch((error) => {
                console.log(error)
            })
    }

    const handleEdit = (e) => {
        setShowEdit(!showEdit);
        axios.get(`http://localhost:5000/stocks/${e}`, config).then(res=> {
            console.log(res.data);
        })
    }


    return (
        <div className={styles.dashboard}>
            <Navbar />
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
            <Modal />
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
                                        <td><span className={styles.btnicons}><i onClick={() => handleEdit(stock._id)} className={`fa fa-pencil-square-o ${styles.edit}`}></i><i onClick={() => handleDelete(stock._id)} className={`fa fa-trash-o ${styles.delete}`} ></i></span></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    showEdit && (
                        <div id={styles.editStocks}>
                            <input type="text" id="name" placeholder="Stock Name" />
                            <input type="number" id="age" placeholder="Set Your Limit" />
                            <input type="number" id="avPrice" placeholder="Average Price"/>
                            <button>Update</button> <button className={styles.cancel} onClick={() => setShowEdit(false)}>Cancel</button>
                        </div>
                    )
                }
            </div>
            <h2>Watchlist</h2>
            <WatchList />
            <Footer />
        </div>
    )
}

export default Dashboard;

import React, { useState, useContext } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './Profile.module.css'
import { userContext } from './Context/UserContext';
import {StocksContext} from './Context/StocksContext';
import {ForumContext} from './Context/ForumContext';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

const Profile = () => {
    // let navigate = useNavigate();
    const [balance, setBalance] = useState(0);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPass, setEditPass] = useState("");
    const [showEdit, setShowEdit] = useState(false);
    const [message, setMessage] = useState(false);
    const user = useContext(userContext)
    const stocks = useContext(StocksContext);
    const forums = useContext(ForumContext);

    if (user.userId === null) {
        return <Navigate to="/login" replace />;
    }

    const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }

    if (user.userId) {
        axios.get(`http://localhost:5000/user/${user.userId}`)
            .then(res => {
                //console.log(res.data);
                setUsername(res.data.name)
                setEmail(res.data.email)
                setBalance(res.data.totalBalance)
            })
    }

    const handleUserDelete = () => {
        window.confirm("Are you sure you wish to delete this item?") &&
            axios.delete(`http://localhost:5000/user/delete`, config).then((res) => {
                console.log(res.data)
                window.location.href = "/"
                localStorage.clear();

            }).catch((error) => {
                console.log(error)
            })
    }
    
    const handleUserEdit = () => {
        setShowEdit(!showEdit);
        axios.get(`http://localhost:5000/user/${user.userId}`, config).then(res => {
            setEditName(res.data.name);
            setEditEmail(res.data.email);
            // setEditPass(res.data.password);
        })
    }

    const handleUserUpdate = () => {
        const data = {
            email: editEmail,
            password: editPass
        }
        axios.patch(`http://localhost:5000/user/update`, data, config).then(res => {
            setMessage(true);
            console.log(res.data);
        })
    }

    return (
        <>
            <Navbar />
            <section class={styles.profile}>
                <header class={styles.header}>
                    <div class={styles.details}>
                        <div className={styles.profilePic}><p className={styles.userLetter}>{username.charAt(0).toUpperCase()}</p></div>
                        <h1 class={styles.heading}>{username}<span className={styles.btnicons}><i onClick={handleUserEdit} className={`fa fa-pencil-square-o ${styles.edit}`}></i><i onClick={() => handleUserDelete()} className={`fa fa-trash-o ${styles.delete}`} ></i></span></h1>
                        <div class={styles.location}>
                            <p>{email}</p>
                        </div>

                        <div>
                            <button className={styles.btn}><Link to="/dashboard">Go to Dashboard</Link></button>
                        </div>

                        <div class={styles.stats}>
                            <div class={styles.col4}>
                                <h4>{balance}</h4>
                                <p>Total Portfolio Balance</p>
                            </div>
                            <div class={styles.col4}>
                                <h4>{stocks.length}</h4>
                                <p>Stocks Invested</p>
                            </div>
                            <div class={styles.col4}>
                                <h4>{forums.length}</h4>
                                <p>Discussions</p>
                            </div>
                        </div>
                    </div>
                </header>
                {
                    showEdit && (
                        <div className={styles.editProfile}>
                        <h3 style={{"color": "black"}}>Edit Profile</h3>
                        {
                            message && (
                                <p style={{"color": "green"}}>Profile update successfully</p>
                            )
                        }
                        <input type="text" id="username" placeholder="Enter username " value={editName} onChange={e => setEditName(e.target.value)} disabled/>
                        <input type="email" id="email" placeholder="Enter edited email " value={editEmail} onChange={e => setEditEmail(e.target.value)}/>
                        <input type="text" id="password" placeholder="Enter current password or new password to update " value={editPass} onChange={e => setEditPass(e.target.value)}/>
                        <button style={{"marginBottom": "1rem"}} onClick={handleUserUpdate}>Update Profile</button>
                        </div>
                    )
                }
            </section>
            <Footer />
        </>
    )
}

export default Profile;
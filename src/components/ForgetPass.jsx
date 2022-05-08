import React, {useState} from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Dashboard.module.css'
import axios from 'axios';

const ForgetPass = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState();
    const [newPass, setNewPass] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSendOtp = () => {
        axios.post(`http://localhost:5000/user/sendotp`, {email}).then(res => {
            // if(res.data.errorMessage){
            //     console.log(res.);
            // }
            if(res.data){
                setShow(true);
            }else{
                setError(true);
            }
        })
    }

    const handleUpdate = () => {
        const data = {
            email,
            otp,
            password: newPass
        }
        axios.post(`http://localhost:5000/user/changepassword`, data).then(res => {
            setSuccess(true);
            console.log(res.data);
            setEmail("");
            setNewPass("");
            setOtp("");
        })
    }
    return (
        <>
            <Navbar/>
            <div id={styles.changePass}>
            <h2>Forgot Password</h2>
            {
                success && (
                    <p style={{"color": "green", "fontSize": "1rem"}}>Password Changed Successfully! Proceed to login.</p>
                )
            }
            <div id={styles.editStocks}>
                <p style={{"color": "black", "fontWeight": "300"}}>Enter email associated with your account</p>
                {
                    error && (
                        <p style={{"color": "red", "fontWeight": 300}}>Email doesn't xistx</p>
                    )
                }
                <input type="email" id="email" placeholder="Enter email " value={email} onChange={e => setEmail(e.target.value)}/>
                {
                    show && (
                        <>
                            <input type="number" id="otp" placeholder="Enter OTP " value={otp} onChange={e => setOtp(e.target.value)}/>
                            <input type="password" id="password" placeholder="Enter new password " value={newPass} onChange={e => setNewPass(e.target.value)}/>
                            <button onClick={handleUpdate}>Update Password</button>
                        </>
                    )
                }
                            
                    {
                        !show && (
                            <button onClick={handleSendOtp}>Send OTP</button> 

                        )
                    }
                        </div>
            </div>
        <Footer/>
        </>
    )
}

export default ForgetPass;
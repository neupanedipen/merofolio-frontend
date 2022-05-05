import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from './Navbar'
import loginBanner from '../images/login.jpeg'
import styles from './Login.module.css';
import axios from 'axios';
import {userContext} from './Context/UserContext'

const Login = (props) => {
    const user = useContext(userContext)
    // user.userId ? console.log("true"):console.log("false");
    let navigate = useNavigate();
    if(user.userId){
        navigate("/dashboard")
    }
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [errorMessage, setErrormessage] = useState("");
    const handleLogin = async () => {
        if (!email || !password){
            alert("Enter both email and password")
        }
        const data = { email, password }
        axios.post(`http://localhost:5000/user/login`, data).then((res) => {
            if (res.data.errorMessage) {
                return setErrormessage(res.data.errorMessage)
            }
            console.log(res.data.publicProfile, "LOGIN SUCESSFULL")
            // setUserSession(res.data.token, res.data.publicProfile);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('_id', res.data.publicProfile._id)
            navigate("/dashboard")

        })
            .catch((error) => {
                console.log(error);
            });
        console.log(email, password);

        setEmail("");
        setPassword("");
    }
    return (
        <>
            <Navbar />
            <div className={styles.loginBox}>
                    <div className={styles.login}>
                    <div className={styles.image}><img src={loginBanner} alt=""/></div>
                    <div className={styles.details}>
                        <h1 className={styles.title}>Log in</h1>
                        <div>
                            {errorMessage && (
                                <p className={styles.red}>{errorMessage}</p>
                            )}
                        </div>
                        <div className={styles.input}><label htmlFor="">Email
                            </label>
                            <input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password
                            </label><input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button className={styles.loginButton} onClick= {handleLogin}>Log in</button>
                        
                        <span className={styles.signup}><Link to="/register">Can’t log in? ∙ Sign up for an account</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
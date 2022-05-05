import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from './Navbar'
import loginBanner from '../images/login.jpeg'
import styles from './Login.module.css';
import axios from 'axios';
import {userContext} from './Context/UserContext'

const Register = (props) => {
    const user = useContext(userContext);
    let navigate = useNavigate();
    if(user.userId){
        navigate("/dashboard")
    }
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage,setErrormessage]=useState("");

    const handleRegister = async () => {
        console.log(username, email, password);

        const data = { name: username, email, password }
        axios.post(`http://localhost:5000/user/signup`, data).then((res) => {
            if(res.data.errorMessage){
               return setErrormessage(res.data.errorMessage);
            }
                console.log(res.data, "NEW USER CREATED")
                setSuccess(true);
                setErrormessage("")
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('_id', res.data.publicProfile._id)
                navigate("/dashboard")

        })
            .catch((error) => {
                console.log(error);
            });

        setUsername("");
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
                        <h1 className={styles.title}>Register</h1>
                        <div className={styles.input}><label htmlFor="">Email
                            </label>
                            <input type="text" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className={styles.input}><label htmlFor="">Username
                            </label>
                            <input type="text" placeholder="Enter your desired username" value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password
                            </label><input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button className={styles.loginButton} onClick={handleRegister}>Register</button>
                        {
                            success && (
                                <div>
                                    <p className={styles.green}>Account created successfully!</p>
                                </div>
                            )
                        }
                        {
                            errorMessage && (
                                <div>
                                    <p className={styles.red}>{errorMessage}</p>
                                </div>
                            )
                        }
                        <span className={styles.signup}><Link to="/login">Already Have an account? ∙ Log In now</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
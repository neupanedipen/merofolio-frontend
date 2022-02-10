import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const ErrorPage = () => {
    return (
        <>
            <Navbar/>
            <h2>Page Not Found!</h2>
            <p style={{color: 'black'}}>Go back to <Link to="/">Home Page.</Link></p>
        </>
    )
}

export default ErrorPage;
import React from 'react';
import Navbar from './Navbar';

const ErrorPage = () => {
    return (
        <>
            <Navbar/>
            <h2>Page Not Found!</h2>
            <p style={{color: 'black'}}>Go back to <a href="/">Home Page.</a></p>
        </>
    )
}

export default ErrorPage;
import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';




export const Authorization = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleNewUserClick = () => {
        setIsSignUpMode(true);
    };

    const handleBackToLoginClick = () => {
        setIsSignUpMode(false);
    };

    return(
        <>
        {isSignUpMode?<Signup/>:<Login/>}
        </>
    );

}

export default Authorization;
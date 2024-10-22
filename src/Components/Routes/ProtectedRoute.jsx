import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SignIn from '../../Pages/SignIn';

const ProtectedRoute = () => {
    const location = useLocation();
    
    // Get userData from localStorage and parse it
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    // Check if the user is signed in
    return userData && userData.isSignIn ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;

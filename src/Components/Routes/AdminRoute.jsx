import React from 'react'
import SignIn from '../../Pages/SignIn';
import { Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const isSignIn = true;
    const isAdmin = true;
    return isSignIn && isAdmin ? <Outlet/> : <SignIn/>
}

export default AdminRoute

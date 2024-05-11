import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar'
const Parent = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Parent;
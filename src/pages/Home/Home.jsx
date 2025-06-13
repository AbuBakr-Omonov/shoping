import React from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Home = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        if (!localStorage.getItem("token")) {
            return navigate("/login");
        }
    };
    
    return (
       <Dashboard logOut={logOut}/>
    );
}

export default Home
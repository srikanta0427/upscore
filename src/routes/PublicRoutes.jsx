import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Landing from '../pages/Landing';
import { Navigate } from 'react-router-dom';
const PublicRoutes = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [isLoggedin, setIsLoggedin] = useState(false);
    useEffect(()=>{
        
        axios.get("http://localhost:8080/get-user",{
            withCredentials:true
        })
        .then((data)=>{
            setIsLoggedin(true);
        })
        .catch(()=>{
            setLoading(false);
        })
        .finally(()=>{
            setLoading(false);
        });

    },[]);
    console.log("hii");
    if (loading) return <div><h1>Loading....</h1></div>
        return isLoggedin ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoutes;

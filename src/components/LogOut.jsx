import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogOut({ onLogout }) { 
    
    const navigate = useNavigate();

    useEffect(() => {
        onLogout();
        navigate('/login');
    }, []);
}

export default LogOut;
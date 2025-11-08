import axios from "axios";
import React, { useEffect } from "react";



// https://chatgpt.com/s/t_690ddd0e8fe88191a2ba878e1dbe86d1
function KeepLogin({ children }) { 

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://localhost/session_check.php').then(function (res) {
                console.log(res.data);
            });
        }, 5 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return children;
}



export default KeepLogin;
import axios from "axios";
import React, { useEffect } from "react";



// https://chatgpt.com/s/t_690ddd0e8fe88191a2ba878e1dbe86d1
function KeepLogin({ children }) { 

    useEffect(() => {
        const interval = setInterval(() => {
            /// session_check.php 부분이 사라졌다.
            // 그렇다면 어떻게 프론트엔드와 통신할 것인가?
            /// 똑같이 하면 되지 않을까?\
            /// 그러면 SessionManager에서의 어디와 통신할 것인가?
            axios.get('http://localhost/session_check.php').then(res => { 
                console.log("interval 진입");
            });
        }, 1000 * 60 * 24);

        

        return () => clearInterval(interval);
    }, []);

    return children;
}



export default KeepLogin;
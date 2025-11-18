import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { LoginContainer,
    LoginBox,
    LoginTitle,
    LoginInput,
    LoginButton,
    SignUpButton
} from "../styles/UseLoginStyle";


function Login({ onLoginSuccess }) { 
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [name]: value
        }));
    }

    const loginSubmit = () => { 
        req_login();
    }

    const singUpSubmit = () => { 
        req_signUp();
    }

    function req_signUp() { 
        axios.post('http://localhost/sigiup.php', data, { withCredentials: true }).then(res => {
            
        });
    }

    function req_login() { 
        axios.post('http://localhost/login.php', data, {withCredentials: true}).then(res => {

            const result = res.data.auth;
            console.log(res.data);

            if (result === "CORRECT") {
                onLoginSuccess();
                navigate('/');
            }
            else if(result === "WRONG"){
                alert("?");
            }
        });
    }

    return (
            <LoginContainer>
                <LoginBox>
                    <LoginTitle>로그인</LoginTitle>
                    <LoginInput name="id" type="id" placeholder="ID" onChange={handleChange} />
                    <LoginInput name="password" type="password" placeholder="P/W" onChange={handleChange} />
                    <LoginButton onClick={loginSubmit}>로그인</LoginButton>
                    <SignUpButton onClick={singUpSubmit}>회원 가입</SignUpButton>
                </LoginBox>
            </LoginContainer>
    );
}


export default Login;
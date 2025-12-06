import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import AuthService from "../services/AuthService";
import LoginValidator from "../utils/LoginValidator";
import LoginStatus from "../utils/LoginStatus";


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
        AuthService.login(data).then(res => {
            const result = res.data.status;
            if (LoginStatus.checkStatus(result)) { 
                onLoginSuccess();
                navigate('/');
            }
            else { 
                alert("status is diff");
            }
        });
    }

    const signUpSubmit = () => { 
        AuthService.signUp(data).then(res => {
            navigate('/signUp');
        });
    }

    return (
            <LoginContainer>
                <LoginBox>
                    <LoginTitle>로그인</LoginTitle>
                    <LoginInput name="id" type="id" placeholder="ID" onChange={handleChange} />
                    <LoginInput name="password" type="password" placeholder="P/W" onChange={handleChange} />
                    <LoginButton onClick={loginSubmit}>로그인</LoginButton>
                    <SignUpButton onClick={signUpSubmit}>회원 가입</SignUpButton>
                </LoginBox>
            </LoginContainer>
    );
}


export default Login;
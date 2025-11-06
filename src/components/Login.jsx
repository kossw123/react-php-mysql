import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { LoginContainer,
    LoginBox,
    LoginTitle,
    LoginInput,
    LoginButton
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

    const handleSubmit = () => { 
        //req_login();
        req_login_test();
    }

    function req_login() {
        axios.post('http://localhost/login.php', data).then(res => {
            if (res.data.auth === "CORRECT") {
                onLoginSuccess();
                navigate('/');
            }
            else {
                alert("?");
            }
        });
    }

    function req_login_test() { 
        /**
         * withCredentials을 true가 되어 이제 다른 도메인에 요청을 보낼 때 인증 정보를 담을 수 있다.
         * 클라이언트, 서버 양쪽단에서 withCredentials 옵션을 설정해줘야 한다.
         * 그로 인해, Session ID가 조냊하게 된다.
         */
        axios.post('http://localhost/login.php', data, {withCredentials: true}).then(res => {

            const result = res.data.post_result.validate.auth;

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
                <LoginButton onClick={handleSubmit}>로그인</LoginButton>
            </LoginBox>
        </LoginContainer>
    );
}


export default Login;
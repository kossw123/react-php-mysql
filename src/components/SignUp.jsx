import React, { useState } from "react";
import { Container, Card, Title, WrapperLi, WrapperLabel, WrapperInput, WrapperButton } from "../styles/UseFormStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthService from "../services/AuthService";


function SignUp() { 

    const [data, setData] = useState({});
    const navigate = useNavigate();
    
    const changeHandle = (e) => { 
    const target = e.target.name;
    const value = e.target.value;
        setData(values => ({
            ...values,
            [target]: value
        }));
    }

    const submitHandle = async (e) => {
        e.preventDefault();
        setAccount();
        navigate('/login');
    };

    function setAccount() {
        AuthService.signUp(data).then(res => {
            console.log(res.data);
        });
    }


    return <Container>
                <Card>
                    <form onSubmit={submitHandle}>
                        <Title>Sign Up</Title>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <WrapperLi>
                            <WrapperLabel>ID:</WrapperLabel>
                                <WrapperInput type="text" name="id" placeholder="ID" onChange={changeHandle} />
                        </WrapperLi>
                        <WrapperLi>
                            <WrapperLabel>Password:</WrapperLabel>
                                <WrapperInput type="password" name="password" placeholder="P/W" onChange={changeHandle} />
                        </WrapperLi>
                        <WrapperLi>
                            <WrapperLabel>Email:</WrapperLabel>
                                <WrapperInput type="text" name="email" placeholder="Email" onChange={changeHandle} />
                        </WrapperLi>
                        <WrapperLi>
                                <WrapperButton>Save</WrapperButton>
                        </WrapperLi>
                    </ul>
                    </form>
                </Card>
            </Container>
}


export default SignUp;
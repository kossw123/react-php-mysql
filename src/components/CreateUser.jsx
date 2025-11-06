import React, { useState } from "react";
import { Container, Card, Title, WrapperLi, WrapperLabel, WrapperInput, WrapperButton } from "../styles/UseFormStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function CreateUser() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        req();
        navigate('/');
    };

    const changeHandle = (e) => { 
        const target = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [target]: value
        }));
    }


    function req() { 
        axios.post('http://localhost/user/create', data).then(function (response) { 
            console.log(response.data);
        });
    }

    return (
        <Container>
            <Card>
                <form onSubmit={submitHandle}>
                    <Title>Create User</Title>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <WrapperLi>
                        <WrapperLabel>Name:</WrapperLabel>
                            <WrapperInput type="text" name="name" onChange={changeHandle} />
                    </WrapperLi>
                    <WrapperLi>
                        <WrapperLabel>Email:</WrapperLabel>
                            <WrapperInput type="text" name="email" onChange={changeHandle} />
                    </WrapperLi>
                    <WrapperLi>
                        <WrapperLabel>Mobile:</WrapperLabel>
                            <WrapperInput type="text" name="mobile" onChange={changeHandle} />
                    </WrapperLi>
                    <WrapperLi>
                            <WrapperButton>Save</WrapperButton>
                    </WrapperLi>
                </ul>
                </form>
            </Card>
        </Container>
        );
}

export default CreateUser;

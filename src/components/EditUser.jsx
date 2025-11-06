import React, { useState, useEffect } from "react";
import { Container, Card, Title, WrapperLi, WrapperLabel, WrapperInput, WrapperButton } from "../styles/UseFormStyle";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function EditUser() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        req_user();
    }, []); 

    const submitHandle = (e) => {
        e.preventDefault();
        req_edit();
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

    function req_edit() { 
        axios.put(`http://localhost/user/list/${id}/edit`, 
            {...data, id: id}
        ).then(function (response) { 
            setData(response.data);
        });
    }

    function req_user() { 
        axios.get(`http://localhost/user/list/${id}`).then(function (response) { 
            setData(response.data);
        })
    }

    return (
        <Container>
            <Card>
                <form onSubmit={submitHandle}>
                    <Title>Edit User</Title>
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

export default EditUser;

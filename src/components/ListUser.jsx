import React, { useState, useEffect } from "react";
import { Table, Thead, Th, Tr, Td, ActionLink } from '../styles/UseListStyle';
import axios from "axios";

export default function ListUser() { 

    const [users, setUsers] = useState([]);

    useEffect(() => {  
        getUsers();
    }, []);


    function getUsers() { 
        axios.get('http://localhost/user/list')
            .then(function (response) {
                setUsers(response.data);
            });
    }

    const deleteHandle = (id) => {
        axios.delete(`http://localhost/user/list/${id}/delete`).then(function (response) {
            getUsers();
        });
    }


    return (
        <div style={{ width: "80%", margin: "50px auto" }}>
        <h2 style={{ textAlign: "center", color: "#333" }}>User List</h2>
        <Table>
            <Thead>
            <tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Mobile</Th>
                <Th>Actions</Th>
            </tr>
            </Thead>
            <tbody>
            {users.map((user) => (
                <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.mobile}</Td>
                <Td>
                        <ActionLink to={`user/list/${user.id}/edit`} $variant="edit">Edit</ActionLink>
                        <ActionLink onClick={() => deleteHandle(user.id)} $variant="delete">Delete</ActionLink>
                        <ActionLink to={`user/list/${user.id}/info`} $variant="view">View</ActionLink>
                </Td>
                </Tr>
            ))}
            </tbody>
        </Table>
        </div>
    );
}
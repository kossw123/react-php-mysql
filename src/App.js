import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import React, { useState } from 'react';

import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import {
    NavWrapper,
    NavList,
    NavItem
} from './styles/UseNavStyle'
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import ProfileSidebar from './components/ProfileSidebar';
import KeepLogin from './components/KeepLogin';



function Layout() {
    return (
        <div>
            <NavWrapper>
                <NavList>
                    <NavItem>
                        <Link to="/">List User</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/user/create">Create User</Link>
                    </NavItem>
                    <NavItem style={{ marginLeft: "auto" }}>
                        <ProfileSidebar />
                    </NavItem>
                </NavList>

            </NavWrapper>

            <Routes>
                <Route path="/" index element={<ListUser />} />
                <Route path="/user/create" element={<CreateUser />} />
                <Route path="/user/list/:id/edit" element={<EditUser />} />
                <Route path="/user/list/info" element={<ViewUser />} />
                <Route path="/user/profile" element={<ProfileSidebar />} />
            </Routes>
        </div>
    );
}

function App() {

    const [isLogged, setLogged] = useState(false);

    return (
        <div>
            <KeepLogin>
                <BrowserRouter>
                    <Routes>
                        <Route path="login/" element={
                            <KeepLogin>
                                <Login onLoginSuccess={() => setLogged(!isLogged)} />
                            </KeepLogin>
                        } />
                        <Route path="/*" element={isLogged ? <Layout /> : <Navigate to="login/" replace />} />
                    </Routes>
                </BrowserRouter>
            </KeepLogin>
        </div>

    );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
import SignUp from './components/SignUp';
import LogOut from './components/LogOut';


import useLoggedStore from './stores/Logged';
import ProtectedRoute from './utils/ProtectedRoute';






function Layout() {
    const loggedAction = useLoggedStore(state => state.setLogged);


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
                <Route path="/Logout" element={<LogOut onLogout={() => loggedAction(false)} />} />
            </Routes>
        </div>
    );
}

function App() {

    //const [isLogged, setLogged] = useState(false);

    const loggedState = useLoggedStore(state => state.isLogged);
    const loggedAction = useLoggedStore(state => state.setLogged);

    return (
        <div>
            <KeepLogin>
                <BrowserRouter>
                    <Routes>
                        <Route path="login/" element={
                            <Login onLoginSuccess={() => loggedAction(true)} />
                        } />
                        <Route path="/*" element={
                            <ProtectedRoute>
                                <Layout />
                            </ProtectedRoute>
                        } />
                        <Route path="/signUp" element={<SignUp />} />
                    </Routes>
                </BrowserRouter>
            </KeepLogin>
        </div>

    );
}

export default App;

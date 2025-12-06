import axios from "axios";


class AuthService { 
    static login(data) { 
        return axios.post('http://localhost/login.php', data, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    }

    static signUp(data) { 
        return axios.post('http://localhost/signUp.php', data, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
    }

    static getList() { 
        return axios.get(`http://localhost/user/list?t=${Date.now()}`, {
            withCredentials: true
        });
    }

    static delete(data) { 
        return axios.delete(`http://localhost/user/list/${data}/delete`, { withCredentials: true });
    }

    static logout() { 
        return axios.get(`http://localhost/logout.php}`, {
            withCredentials: true
        });
    }
}


export default AuthService;

class LoginValidator {
    static isValid(data) {
        if (!data.id || !data.password) return false;
        return true;
    }
}


export default LoginValidator;
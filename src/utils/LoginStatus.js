class LoginStatus { 
    static checkStatus(status) {
        switch (status) {
            case "CORRECT":
                return true;
            
            case "WRONG":
                alert("아이디 또는 비밀번호 오류");
                return false;

            case "BLOCKED":
                alert("계정이 정지되었습니다.");
                return false;

            case "EXPIRED":
                alert("세션이 만료되었습니다.");
                return false;

            default:
                console.error("알 수 없는 응답:", status);
                return false;
        }
    }
}

export default LoginStatus;
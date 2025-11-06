// src/styles/LoginStyle.js
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4f6f8;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 380px;
  box-sizing: border-box; /* ✅ 추가 */
`;

const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const LoginInput = styled.input`
  display: block; /* ✅ 추가 */
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  box-sizing: border-box; /* ✅ 핵심 */
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const LoginButton = styled.button`
  display: block; /* ✅ 추가 */
  width: 100%;
  padding: 12px 0;
  background: #007bff;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box; /* ✅ 핵심 */
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export {
    LoginContainer,
    LoginBox,
    LoginTitle,
    LoginInput,
    LoginButton
};

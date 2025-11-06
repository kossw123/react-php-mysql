import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f4f8;
`;

const Card = styled.div`
  background: white;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 24px;
`;

const WrapperLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    justify-content: center; /* 마지막 줄 버튼 중앙 정렬 */
  }
`;

const WrapperLabel = styled.label`
  width: 80px;
  font-weight: bold;
  color: #555;
  text-align: right;
  margin-right: 10px;
`;

const WrapperInput = styled.input`
  flex: 1;
  width: 50%;
  max-width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-color: navy;
  }
`;

const WrapperButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  cursor: pointer;

  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  transition: all 0.2s;

  ${(props) =>
        props.primary &&
        css`
      color: white;
      background: navy;
      border-color: navy;

      &:hover {
        background: #001f6b;
      }
    `}
`;


export {
    Container,
    Card,
    Title,
    WrapperLi,
    WrapperLabel,
    WrapperInput,
    WrapperButton
};
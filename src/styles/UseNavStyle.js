// src/styles/UserFormStyle.js
import styled, { css } from "styled-components";

/* Nav 관련 */
const NavWrapper = styled.nav`
  background: #fff;
  padding: 12px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
  border-radius: 8px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: navy;
    }
  }

  a.active {
    color: navy;
    font-weight: bold;
  }
`;


export {
    NavWrapper,
    NavList,
    NavItem
};
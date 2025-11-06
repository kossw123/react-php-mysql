import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
  font-size: 0.95rem;
  color: #333;
`;

const Thead = styled.thead`
  background: #f2f4f8;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #eee;
`;

const Tr = styled.tr`
  &:hover {
    background: #f9fbff;
  }
`;

const colors = {
    delete: "red",
    edit: "orange",
    view: "green",
    default: "navy"
};

const ActionLink = styled(Link)`
  padding: 6px 12px;
  margin-right: 8px;
  border: 1px solid ${({ $variant }) => colors[$variant] || colors.default};
  background: ${({ $variant }) => colors[$variant] || colors.default};
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    opacity: 0.85;
  }
`;


export {
    Table,
    Thead,
    Th,
    Tr,
    Td,
    ActionLink
}

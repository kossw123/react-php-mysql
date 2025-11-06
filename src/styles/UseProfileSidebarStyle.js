import styled from "styled-components";
import { Link } from "react-router-dom";

const navColor = "#0b3b66";
const navHover = "#1e4b91";
const textColor = "#333";
const headerBg = "#f2f4f8";
const rowHover = "#f9fbff";
const overlayColor = "rgba(0,0,0,0.25)";

export const ProfileButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 14px;
  margin-left: auto;
  font-size: 0.95rem;
  color: white;
  background: ${navColor};
  border: 1px solid ${navColor};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${navHover};
  }
`;

/* 오버레이 (화면 어둡게) */
export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${overlayColor};
  z-index: 1000;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: opacity 0.25s ease, visibility 0.25s ease;
`;

/* 사이드 패널 */
export const SidebarPanel = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 90%;
  height: 100%;
  background: #fff;
  box-shadow: -6px 0 18px rgba(0, 0, 0, 0.08);
  transform: translateX(${({ $open }) => ($open ? "0%" : "100%")});
  transition: transform 0.25s ease;
  z-index: 1001;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
`;

/* 헤더 */
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 12px;
  margin-bottom: 16px;

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${headerBg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: ${navColor};
  }

  .meta {
    display: flex;
    flex-direction: column;
    .name {
      font-weight: 600;
      color: ${textColor};
    }
    .email {
      font-size: 0.85rem;
      color: #777;
    }
  }
`;

export const SidebarSectionTitle = styled.div`
  margin: 10px 0 8px;
  font-size: 0.85rem;
  color: #777;
  text-transform: uppercase;
`;

export const SidebarItem = styled.button`
  text-align: left;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: ${textColor};
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.15s ease;

  &:hover {
    background: ${rowHover};
  }
`;

import React, { useState, useEffect } from "react";
import {
  SidebarOverlay,
  SidebarPanel,
  SidebarHeader,
  SidebarItem,
  SidebarSectionTitle,
} from "../styles/UseProfileSidebarStyle";
import { useNavigate } from "react-router-dom";

export default function ProfileSidebar({user = { name: "kossw123", email: "test@example.com" },})
{
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const itemClickHandle = (path) => { 
        navigate(path);
        setOpen(false);
    }

    return (
        <>
        <button
            onClick={() => setOpen(true)}
            style={{
            background: "transparent",
            border: "none",
            color: "black",
            fontSize: "1rem",
            cursor: "pointer",
            }}
        >
            Profile
        </button>

        <SidebarOverlay $open={open} onClick={() => setOpen(false)} />
        <SidebarPanel $open={open}>
            <SidebarHeader>
            <div className="avatar">{user.name[0].toUpperCase()}</div>
            <div className="meta">
                <div className="name">{user.name}</div>
                <div className="email">{user.email}</div>
            </div>
            </SidebarHeader>

            <SidebarSectionTitle>Account</SidebarSectionTitle>
                <SidebarItem onClick={() => itemClickHandle("user/list/info")}>내 정보 보기</SidebarItem>
            <SidebarItem>비밀번호 변경</SidebarItem>

            <SidebarSectionTitle>Actions</SidebarSectionTitle>
            <SidebarItem>로그아웃</SidebarItem>
            <SidebarItem>설정</SidebarItem>
        </SidebarPanel>
        </>
    );
}

import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Orbit, MessagesSquare, Phone, UserRound, Lock, Settings, LogOut, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const iconComponents = {
    Orbit: Orbit,
    Message: MessagesSquare,
    Phone,
    User: UserRound,
    Lock,
    Settings
};

const list = [
    {
        icon: "Orbit",
        name: "Explore",
        navigate: "",
    },
    {
        icon: "Message",
        name: "Chats",
        navigate: "",
    },
    {
        icon: "Phone",
        name: "Calls",
        navigate: "",
    },
    {
        icon: "Lock",
        name: "Privacy",
        navigate: "",
    },
    {
        icon: "Settings",
        name: "Setting",
        navigate: "",
    },
];

function TopBar({ user }) {
    const navigate = useNavigate();
    const hasNotifications = true;

    const handleLogOut = () => {
        localStorage.removeItem("vootel");
        localStorage.removeItem("vootelToken");
        navigate("/signin");
    };

    return (
        <div className=" bg-background-lighter w-full rounded-xl  flex-col ">
            <div className="flex items-center justify-between p-4 ">
                <div>
                    <p className="text-lg md:text-2xl font-medium text-white">Chats</p>
                </div>
                <div className="flex items-center gap-4 md:gap-7 relative">
                    <div>
                        <Button className="hidden md:block">+ New Chat</Button>
                    </div>
                    <div>
                        <Bell color="white" />
                    </div>
                    <div className="rounded-full overflow-hidden flex items-center">
                        <img src={profile} className="h-8 md:h-10 rounded-full w-8 md:w-10" alt="logo" />
                    </div>
                    <div>
                        <p className="text-sm md:text-md font-medium text-white">{user.name || "Ameay Pande"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;



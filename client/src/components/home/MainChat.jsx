import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Orbit, MessagesSquare, Phone, UserRound, Lock, Settings, LogOut, Bell, Grid2X2, Video, PhoneCall, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Inbox from "./Inbox";
import chatbg from "../../assets/image/chat-bg.jpg"

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

function MainChat({ user }) {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("Primary");

    const handleLogOut = () => {
        localStorage.removeItem("vootel");
        localStorage.removeItem("vootelToken");
        navigate("/signin")
    }

    return (
        <div className="h-full flex flex-col ">
            <div className="no-scrollbar overflow-y-auto">
                <div className="mt-5 h-20 mx-4 rounded-lg flex items-center px-4 hover:cursor-pointer ">
                    <div >
                        <img src={profile} className="w-12 h-12 bg-gray-300 rounded-full" />
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="flex justify-between">
                            <p className="text-white font-semibold">John Doe</p>
                        </div>
                        <p className="text-gray-300 text-sm tracking-tight line-clamp-1">Active</p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div>
                            <Button className="hidden md:block px-1.5"><Video /></Button>
                        </div>
                        <div>
                            <Button className="hidden md:block px-1.5"><PhoneCall /></Button>
                        </div>
                        <div>
                            <Button className="hidden md:block px-1.5"><X /></Button>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mx-3 rounded-xl min-h-full" style={{ backgroundImage: `url(${chatbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <Inbox />
                </div>

            </div>
        </div>

    );
}

export default MainChat;

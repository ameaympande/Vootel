import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function TopBar({ user }) {
    const navigate = useNavigate();

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
                        <p className="text-sm md:text-md font-medium text-white">{user.name || "Your Name"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;



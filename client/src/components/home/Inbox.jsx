import React, { useEffect, useState } from "react";
import profile from "../../assets/image/profile.png";
import { Grid2X2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import chatbg from "../../assets/image/chat-bg.jpg";
import MainChat from "./MainChat";
import { useSelector } from "react-redux";

function Inbox({ user, socket }) {
    const navigate = useNavigate();
    const stateUser = useSelector((state) => state.User);
    const [selectedTab, setSelectedTab] = useState("Primary");
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-2/6 ">
                <div className="flex items-center justify-between gap-5 p-4 ">
                    <div>
                        <p className="text-lg md:text-2xl font-medium text-white">Inbox</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-7 relative">
                        <div>
                            <Button className="hidden md:block">
                                <Grid2X2 />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="bg-background-secondary px-1 py-1.5 rounded-full hover:cursor-pointer">
                        <div className="flex items-center justify-center gap-3 md:gap-3">
                            <div className={`hover:bg-background-darker px-3 py-1 relative rounded-full ${selectedTab === "Primary" ? "bg-background-darker" : ""}`} onClick={() => setSelectedTab("Primary")}>
                                <p className="text-sm font-medium text-white">Primary</p>
                            </div>
                            <div className={`hover:bg-background-darker px-3 py-1 rounded-full ${selectedTab === "Group" ? "bg-background-darker" : ""}`} onClick={() => setSelectedTab("Group")}>
                                <p className="text-sm font-medium text-white">Group</p>
                            </div>
                            <div className={`hover:bg-background-darker px-3 py-1 rounded-full ${selectedTab === "Archive" ? "bg-background-darker" : ""}`} onClick={() => setSelectedTab("Archive")}>
                                <p className="text-sm font-medium text-white">Archive</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto overflow-hidden h-[400px] scrollbar">
                    {stateUser.chatList.length > 0 && stateUser.chatList.map((chat, key) => (
                        <div className="mt-5 bg-background-secondary h-20 mx-4 rounded-lg flex items-center px-4 hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out shadow-md" key={chat._id} onClick={() => setSelectedUser(chat)}>
                            <div>
                                <img src={profile} className="w-12 h-12 bg-gray-300 rounded-full" alt="Profile" />
                            </div>
                            <div className="flex-1 ml-4">
                                <div className="flex justify-between">
                                    <p className="text-white font-semibold">{chat.name}</p>
                                    <p className="text-gray-400 text-sm">{chat.time || "12:30 PM"}</p>
                                </div>
                                <p className="text-gray-300 text-sm tracking-tight line-clamp-1">{user.messages[0]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedUser?._id && (
                <div className="mt-4 mr-3 rounded-xl flex-1 p-1" style={{ backgroundImage: `url(${chatbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <MainChat user={selectedUser} setSelectedUser={setSelectedUser} socket={socket} />
                </div>
            )}
        </div>
    );
}

export default Inbox;

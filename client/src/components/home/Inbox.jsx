import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Orbit, MessagesSquare, Phone, UserRound, Lock, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

function Inbox({ user }) {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState(1);

    const handleLogOut = () => {
        localStorage.removeItem("vootel");
        localStorage.removeItem("vootelToken");
        navigate("/signin")
    }

    return (
        <div className="h-full  flex flex-col justify-between">
            <div>
                {list.map((item, index) => (
                    <div
                        className={"flex items-center mt-7 cursor-pointer text-white "}
                        key={index}
                        onClick={() => setSelectedTab(index)}
                        style={{ width: "100%" }}
                    >
                        {selectedTab === index ? (
                            <div className="bg-white w-1 h-8 flex justify-start" />
                        ) : (
                            <div className="w-1 h-8" />
                        )}
                        <div className="rounded-full flex ml-6">
                            {item.icon &&
                                React.createElement(iconComponents[item.icon], {
                                    style: { color: selectedTab === index ? "white" : "" },
                                })}
                        </div>
                        <p className="text-md font-medium ml-4">{item.name}</p>
                    </div>
                ))}
            </div>

            <div className="flex ml-6 mb-5 cursor-pointer" onClick={handleLogOut}>
                <div className="rounded-full flex items-center justify-center">
                    <LogOut style={{ color: "white" }} />
                </div>
                <p className="text-md font-medium ml-4 text-white">Log Out</p>
            </div>
        </div>
    );
}

export default Inbox;

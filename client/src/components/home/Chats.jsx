import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Orbit, MessagesSquare, Phone, UserRound, Lock, Settings, LogOut } from "lucide-react";

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

function Chats({ user }) {
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <div className="h-full p-2">
      <div className="h-full bg-background-primary lg:w-[15%] rounded-xl hidden lg:flex flex-col ">
        <div className="flex items-center m-4">
          <div className="rounded-full overflow-hidden w-16 h-16 flex items-center">
            <img src={profile} className="h-12 rounded-full w-12" alt="logo" />
          </div>
          <p className="text-sm font-medium text-white">Hi, Ameay</p>
        </div>
        {list.map((item, index) => (
          <div
            className={`flex items-center ml-6 mt-7 hover:cursor-pointer ${selectedTab === index ? 'text-white' : ''
              }`}
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            <div className="rounded-full flex items-center justify-center ">
              {item.icon && React.createElement(iconComponents[item.icon], { style: { color: selectedTab === index ? 'white' : '' } })}
            </div>
            <p className="text-md font-medium ml-4">{item.name}</p>
          </div>
        ))}
        <div className="flex-grow"></div>
        <div className="flex items-end ml-6 mb-5  ">
          <div className="rounded-full flex items-center justify-center ">
            <LogOut style={{ color: 'white' }} />
          </div>
          <p className="text-md font-medium ml-4 text-white">Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;

import React from "react";
import profile from "../../assets/image/profile.png";
import { Orbit } from "lucide-react";

const list = [
  {
    icon: "",
    name: "Explore",
    navigate: "",
  },
  {
    icon: "",
    name: "Chats",
    navigate: "",
  },
  {
    icon: "",
    name: "Calls",
    navigate: "",
  },
  {
    icon: "",
    name: "Privacy",
    navigate: "",
  },
  {
    icon: "",
    name: "Setting",
    navigate: "",
  },
];
function Chats() {
  return (
    <div className="h-full p-2">
      <div className="h-full bg-background-primary lg:w-[20%] rounded-xl hidden lg:flex flex-col ">
        <div className="flex items-center m-5">
          <div className="rounded-full overflow-hidden w-16 h-16 flex items-center">
            <img src={profile} className="h-12 rounded-full w-12" alt="logo" />
          </div>
          <p className="text-xl font-medium ml-3">Hi, Parag</p>
        </div>

        <div className="flex items-center ml-6 mt-7">
          <div className="rounded-full flex items-center justify-center ">
            <Orbit />
          </div>
          <p className="text-lg font-medium ml-4">Explore</p>
        </div>
        <div className="flex items-center ml-6 mt-7">
          <div className="rounded-full flex items-center justify-center ">
            <Orbit />
          </div>
          <p className="text-lg font-medium ml-4">Explore</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;

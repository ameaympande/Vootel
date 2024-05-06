import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Popup from 'reactjs-popup';

function TopBar({ user }) {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleAddChat = () => {
        // Open the popup
        setShowPopup(true);
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = () => {
        // Handle search logic here
        console.log("Searching for:", searchInput);
    };

    return (
        <div className="bg-background-lighter w-full rounded-xl flex-col">
            <div className="flex items-center justify-between p-4">
                <div>
                    <p className="text-lg md:text-2xl font-medium text-white">Chats</p>
                </div>
                <div className="flex items-center gap-4 md:gap-7 relative">
                    <div>
                        <Button className="hidden md:block" onClick={handleAddChat}>+ New Chat</Button>
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
            <Popup
                open={showPopup}
                position="top center"
                onClose={() => setShowPopup(false)}
                closeOnDocumentClick
                contentStyle={{ marginTop: "100px" }}
            >
                <div className="bg-background-secondary p-4 w-80 rounded-xl min-h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Search User</h2>
                        <input
                            type="text"
                            placeholder="Enter email or name"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                        />
                    </div>
                    <div className="flex ">
                        <Button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Search
                        </Button>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default TopBar;

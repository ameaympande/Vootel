import React, { useEffect, useState } from "react";
import profile from "../../assets/image/profile.png";
import { BadgePlus, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Popup from 'reactjs-popup';
import axios from 'axios';
import { useDebounce } from "../../hooks/hooks";
import { setChatList } from "../../redux/features/User/UserSlice";
import { useDispatch } from "react-redux";

function TopBar({ user }) {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const debounceSearch = useDebounce(searchInput);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (searchInput.length > 0)
            loadUser();
    }, [debounceSearch]);

    const loadUser = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await axios.get(`https://vootel.onrender.com/users/search?term=${debounceSearch}`);
            if (response.data.length > 0) {
                setSearchResults(response.data);
            } else {
                setError("No users found.");
            }
        } catch (error) {
            console.error("Error searching users:", error);
            setError(error.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    console.log(searchResults);
    const handleAddChat = () => {
        setShowPopup(true);
    };

    const handleSearchInputChange = (e) => {
        setSearchResults([]);
        setSearchInput(e.target.value);
    };

    const handleClose = () => {
        setShowPopup(false);
        setSearchInput("")
        setSearchResults([]);
    }

    const handleAdd = (user) => {
        dispatch(setChatList(user))
    }
    return (
        <div className="bg-background-lighter w-full rounded-xl flex-col">
            <div className="flex items-center justify-between p-4">
                <div>
                    <p className="text-lg md:text-2xl font-medium text-white">Chats</p>
                </div>
                <div className="flex items-center gap-4 md:gap-7 relative">
                    <div>
                        <Button className="hidden md:block font-inter" onClick={handleAddChat}>+ New Chat</Button>
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
                onClose={handleClose}
                closeOnDocumentClick
                contentStyle={{ marginTop: "100px" }}
            >
                <div className="bg-background-secondary p-4 min-w-84 rounded-xl min-h-80 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Search User</h2>
                        <input
                            type="text"
                            placeholder="Enter email or name"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                        />
                        {loading && <p className="text-white">Loading...</p>}
                        {error && <p className="text-white">{error}</p>}
                        {searchResults.length > 0 && searchInput.length > 0 && (
                            <div className="bg-background-secondary mt-2 rounded-xl">
                                <ul>
                                    {searchResults.map((user) => (
                                        <li className="flex justify-between items-center text-white mt-4 hover:cursor-pointer" key={user._id}>
                                            <span>{user.name}</span>
                                            <div>
                                                <BadgePlus color="lightgreen" onClick={() => handleAdd(user)} />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="flex ">
                        <Button onClick={loadUser} className="bg-blue-500 text-white px-4 py-2 rounded">
                            Search
                        </Button>
                    </div>
                </div>
            </Popup>

        </div>
    );
}

export default TopBar;

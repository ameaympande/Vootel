import React, { useState } from "react";
import profile from "../../assets/image/profile.png";
import { Video, PhoneCall, X, Send, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import chatbg from "../../assets/image/chat-bg.jpg";

function MainChat({ user }) {
    const navigate = useNavigate();
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSendMessage = () => {
        const newMessage = {
            text: messageInput,
            sender: user,
            timestamp: new Date(),
            sent: true
        };
        setMessages([...messages, newMessage]);
        setMessageInput("");
    };

    const handleLogOut = () => {
        localStorage.removeItem("vootel");
        localStorage.removeItem("vootelToken");
        navigate("/signin");
    };

    const formatTime = (timestamp) => {
        return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            <div className="scrollbar overflow-y-auto">
                <div className="h-20 mx-4 rounded-lg flex items-center px-4 ">
                    <div >
                        <img src={profile} className="w-12 h-12 bg-gray-300 rounded-full" alt="Profile" />
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

                <div className="mt-5 mx-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === user ? "justify-end" : "justify-start"} mb-2`}>
                            <div className={`bg-gray-300 rounded-lg p-2 ${msg.sender === user ? "text-left bg-green-500 text-color-secondary" : "text-right"} text-sm text-gray-800`}>
                                <p className="mb-1">{msg.text}</p>
                                <div className="flex justify-end items-center">
                                    <span className="text-xs mr-1">{msg.timestamp && formatTime(msg.timestamp)}</span>
                                    {msg.sent && <Check size={14} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="fixed bottom-12 right-14 flex items-center justify-between p-3 w-1/2">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <div className="flex items-center justify-center">
                    <Button onClick={handleSendMessage} className="ml-2 w-18"><Send size={20} /></Button>
                </div>
            </div>
        </>
    );
}

export default MainChat;

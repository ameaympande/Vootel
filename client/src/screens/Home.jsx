import React from "react";
import Chats from "../components/home/Chats";
import { useSelector } from 'react-redux'

function Home() {
  const user = useSelector((state) => state.User)
  return (
    <div className="h-screen">

      <Chats user={user} />
    </div>
  );
}

export default Home;

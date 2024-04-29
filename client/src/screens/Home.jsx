import React, { useEffect, useMemo } from "react";
import { useSelector } from 'react-redux'
import TopBar from "../components/home/TopBar";
import { io } from "socket.io-client"
import Inbox from "../components/home/Inbox";
import SideBar from "../components/home/SideBar";
import MainChat from "../components/home/MainChat";

function Home() {
  const user = useSelector((state) => state.User)
  const socket = useMemo(() => io("http://localhost:4000"), [])

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected", socket.id);
    })

    socket.on("message", (message) => {
      console.log(message);
    })

  }, [])

  return (
    <div className="h-screen p-2 flex flex-col">
      <div className="flex flex-1">
        <div className="w-1/6 my-2 bg-background-lighter  rounded-xl">
          <SideBar />
        </div>
        <div className="flex-1 flex flex-col p-2">
          <div className="h-16 flex items-center justify-between mx-3">
            <TopBar user={user} />
          </div>
          <div className="flex flex-1">
            <div className="w-2/6 bg-background-lighter mt-4 mx-3 rounded-xl">

              <Inbox />
            </div>
            <div className="flex-1 bg-background-lighter mt-4 mr-3 rounded-xl">
              {/* <MainChat /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

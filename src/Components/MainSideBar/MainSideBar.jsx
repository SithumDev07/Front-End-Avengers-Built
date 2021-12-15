import React from 'react'
import IconButton from "../IconButton";
import { HomeIcon } from "@heroicons/react/solid";
import { ChatIcon, CogIcon, XIcon, ClipboardCheckIcon, CollectionIcon } from "@heroicons/react/outline";
import "../../FoodOrder/style.css"
import { Link } from 'react-router-dom';


function MainSideBarComponent(type) {
    const homeIcon = <HomeIcon className={`w-14 h-14 block ${type.type === "Home" ? "text-white" : "text-gray-500"}`} />;
    const kitchenIcon = <ClipboardCheckIcon className={`w-14 h-14 block ${type.type ==="Kitchen" ? "text-white" : "text-gray-500"}`} />
    const chatIcon = <ChatIcon className="w-14 h-14 text-gray-500 block" />;
    const cogIcon = <CogIcon className="w-14 h-14 text-gray-500 block" />;
    const closeIcon = <XIcon className="w-14 h-14 text-gray-500 block" />;
    const dashboardIcon = <CollectionIcon className={`w-14 h-14 block ${type.type === "Dashboard" ? "text-white" : "text-gray-500"}`} />;
    return (
        <>
        <div className="w-1/12 flex flex-col justify-between pb-1 fixed left-0 top-0 bottom-0 bg-gray-100">
          <div className="flex flex-col h-3/4 justify-around items-center overflow-hidden">
            <div className="w-20 h-20 overflow-hidden flex items-center justify-center border-2 mt-3 mb-6">
              <img
                src={process.env.PUBLIC_URL + `/images/logo.png`}
                alt="LOGO"
                className="logo object-contain"
              />
            </div>
            {(type.type === "Home") && (
              <IconButton icon={homeIcon} name={"Home"} active={true} />
            )} 
            {(type.type === "Kitchen") && (
              <IconButton icon={kitchenIcon} name={"Kitchen"} active={true} />
            )} 
            {(type.type === "Dashboard") && (
              <IconButton icon={dashboardIcon} name={"Dashboard"} active={true} />
            )} 
            <IconButton icon={chatIcon} name={"Chat"} active={type.type === "Chat"} />
            <IconButton icon={cogIcon} name={"Settings"} active={type.type === "Settings"} />
          </div>
          <Link to="/">
            <IconButton icon={closeIcon} name={"Close"} active={false} />
          </Link>
        </div>
        </>
    )
}

export default MainSideBarComponent;
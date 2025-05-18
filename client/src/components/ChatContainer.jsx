import React from "react";
import assets, { messagesDummyData } from "../assets/assets";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return selectedUser ? (
    <div>
      {/* =====Chat Header Section===== */}
      <div className="flex items-center gap-3 py-4 mx-4 border-b border-stone-500">
        <img
          src={assets.profile_martin}
          alt="Profile Pic"
          className="w-8 rounded-full"
        />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin Johnson
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden max-w-7"
        />
        <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
      </div>
      {/* =====Chat Body Section===== */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((message, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 justify-end ${
              message.senderId !== "680f571ff10f3cd28382f094" &&
              "flex-row-reverse"
            }`}
          >
            {message.image ? (
              <img
                src={message.image}
                alt="Message Image"
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  message.senderId === "680f571ff10f3cd28382f094"
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {message.text}
              </p>
            )}
            <div className="text-center text-xs ">
              <img
                src={
                  message.senderId === "680f571ff10f3cd28382f094"
                    ? assets.avatar_icon
                    : assets.profile_alison
                }
                alt="Profile Pic"
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">{message.createdAt}</p>
            </div>
          </div>
        ))}
        <div className="" ref={scrollEnd}></div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="Logo Icon" className="max-w-16" />
      <p className="text-lg font-medium text-white">
        Chat with your Developer Friends...
      </p>
    </div>
  );
};

export default ChatContainer;

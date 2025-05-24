import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../lib/ulits";

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return selectedUser ? (
    <div className="relative">
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
              message.senderId !== "680f5116f10f3cd28382ed02" &&
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
                  message.senderId === "680f5116f10f3cd28382ed02"
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
              <p className="text-gray-500">
                {formatMessageTime(message.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div className="" ref={scrollEnd}></div>
      </div>

      {/* Bottom Area for sending messages */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400"
          />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="image icon"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img
          src={assets.send_button}
          alt="send icon"
          className="w-7 cursor-pointer"
        />
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

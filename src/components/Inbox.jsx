import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox } from "react-icons/md";

const mailType = [
  {
    icons: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icons: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icons: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

function Inbox() {
  const [mailTypeSeleted, setMailTypeSeleted] = useState(0);
  return (
    <div className=" flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between  px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
      </div>
      <div className=" h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                className={`${
                  mailTypeSeleted === index
                    ? "border-b-4 border-b-blue-600 text-blue-600 transition-all"
                    : "border-b-4 border-b-transparent transition-all"
                } flex items-center p-4 w-52 hover:bg-gray-100 transition-all`}
                key={index}
                onClick={() => setMailTypeSeleted(index)}
              >
                {item.icons} <span className="pl-5">{item.text}</span>{" "}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inbox;

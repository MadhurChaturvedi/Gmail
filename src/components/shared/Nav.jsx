import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

function Nav() {
  return (
    <div className=" flex items-center justify-between mx-3 h-16 ">
      <div className=" flex items-center gap-10">
        <div className=" flex items-center gap-2">
          {/* hamburger & Logo */}
          <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"
            alt="gmail"
            className=" w-8"
          />
          <h1 className="text-2xl text=gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      {/* search and input */}
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex item-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"25px"} className="ml-4" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className=" flex items-center gap-2">
          <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"25px"} />
          </div>
          <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsSharp size={"20px"} />
          </div>
          <div className=" p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <TbGridDots size={"20px"} />
          </div>
          <div className="  cursor-pointer">
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwNeG2Yr4x9FFo3D5HCr3aCC5eO0uHePAVQ&s"
              size="40"
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React from "react";
import { FaBookReader } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdNaturePeople } from "react-icons/md";
import Typewriter from "typewriter-effect";
const Aim = () => {
  return (
    <div className="lg:w-[1170px] mx-auto mt-[120px]">
      <div className="lg:flex lg:flex-row-reverse ">
      <div className="lg:flex-2 lg:w-[350px] lg:flex-grow  text-center lg:flex-col lg:justify-center lg:items-center lg:my-auto">
          <h3 className="text-3xl font-extrabold mb-4">
          <Typewriter
                  options={{
                    strings: ["Our Focus and Aim"],
                    autoStart: true,
                    loop: true,
                    delay:75,
                    typeSpeed:120,
                    deleteSpeed:80,
                  }}
                />
          </h3>
          <p className="lg:w-[70%] w-[90%] mx-auto">
          Our volunteer hub connects passionate individuals with meaningful opportunities, empowering them to make a positive impact in their communities. Join us in fostering change and spreading kindness worldwide.
          </p>
        </div>
        <div className="lg:flex-1 mt-[20px] lg:mt-[0px]  mx-[25%] lg:mx-[0%] grid grid-cols-1 lg:grid-cols-2  gap-1">
          <div className="w-[200px] h-[200px] bg-[#4D869C] rounded-2xl flex justify-center items-center transition delay-150 hover:scale-110 hover:bg-[#7AB2B2] ">
            <div className="w-[130px] h-[130px] border-2 border-white p-2 rounded-full flex justify-center items-center">
              <FaBookReader className="text-white text-6xl" />
            </div>
          </div>
          <div className="w-[200px] h-[200px] bg-[#4D869C] rounded-2xl flex justify-center items-center transition delay-150 hover:scale-110 hover:bg-[#7AB2B2] ">
            <div className="w-[130px] h-[130px] border-2 border-white p-2 rounded-full flex justify-center items-center">
              <MdVolunteerActivism className="text-white text-6xl" />
            </div>
          </div>
          <div className="w-[200px] h-[200px] bg-[#4D869C] rounded-2xl flex justify-center items-center transition delay-150 hover:scale-110 hover:bg-[#7AB2B2] ">
            <div className="w-[130px] h-[130px] border-2 border-white p-2 rounded-full flex justify-center items-center">
              <FaBriefcaseMedical className="text-white text-6xl" />
            </div>
          </div>
          <div className="w-[200px] h-[200px] bg-[#4D869C] rounded-2xl flex justify-center items-center transition delay-150 hover:scale-110 hover:bg-[#7AB2B2] ">
            <div className="w-[130px] h-[130px] border-2 border-white p-2 rounded-full flex justify-center items-center">
              <MdNaturePeople className="text-white text-6xl" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Aim;

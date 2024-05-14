import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
const VolunteerDetails = () => {
  const volunteers = useLoaderData();

  return (
    <div className="lg:w-[1170px] mx-auto my-[60px]">
      <div className="flex space-x-8">
        <div className="relative flex-1 flex-grow ">
          <img
            className="relative h-[450px] rounded-tr-full rounded-br-full"
            src={volunteers.image}
            alt=""
          />
          <div className="absolute p-4 bg-[#4D869C] rounded-tr-full rounded-br-full  top-[40%]">
            <h3 className="text-white font-bold text-3xl">{volunteers.name}</h3>
            <p>{volunteers.category}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex-col space-y-2">
            <div className="flex space-x-2 items-center">
              <FaCalendarAlt className="text-[#4D869C]" />
              <p>{volunteers.deadline.slice(0, 10)}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaUsers className="text-[#4D869C]" />
              <p>{volunteers.no_of_volunteer}</p>
            </div>
            <div className="flex space-x-2 items-center">
              <FaMapLocationDot className="text-[#4D869C]" />
              <p>{volunteers.location}</p>
            </div>
            <div className="flex-col space-y-8">
              <div>
                <p className="border-r-2 px-4 border-r-[#4D869C] border-l-2 border-l-[#4D869C]">
                  {volunteers.description}
                </p>
              </div>
              <div className="">
                <Link
                  className=" btn py-2 px-4 bg-[#4D869C] text-white"
                  to={`/bevolunteer/${volunteers._id}`}
                >
                  Be a Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;

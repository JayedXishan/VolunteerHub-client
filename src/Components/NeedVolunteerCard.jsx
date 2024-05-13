import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const NeedVolunteerCard = ({ volunteer }) => {
  const {
    name,
    category,
    location,
    image,
    no_of_volunteer,
    deadline,
    description,
  } = volunteer;
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-[200px] h-full" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-[#4D869C]" />
                <p className="text-xs">{deadline.slice(0, 10)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaUsers className="text-[#4D869C]" />
                <p className="text-xs">{no_of_volunteer}</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapLocationDot className="text-[#4D869C]" />
                <p className="text-xs">{location}</p>
              </div>
            </div>
            <div className="mt-[16px]">
              <Link
                to={`/volunteer/${volunteer._id}`}
                className="btn text-white bg-[#4D869C]"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;

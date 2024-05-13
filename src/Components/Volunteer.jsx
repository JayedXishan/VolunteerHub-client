import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const Volunteer = ({ volunteer }) => {
  const {
    name,
    category,
    location,
    image,
    no_of_volunteer,
    deadline,
    description,
  } = volunteer;
  //console.log(volunteer._id);
  return (
    <div>
      <div>
        <div className="card card-compact w-96 h-[435px] bg-base-100 shadow-xl">
          <figure>
            <img className="h-[230px] w-full" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title w-[70%]  text-[#4D869C] border-b-2 border-b-[#4D869C]">
              {name}
            </h2>
            <p>{description}</p>
            <div className="flex justify-between">
              <div className="flex text-[#4D869C] space-x-2 items-center">
                <FaUsers />
                <p>{no_of_volunteer}</p>
              </div>
              <div className="flex text-[#4D869C] space-x-2 items-center">
                <FaCalendarAlt />
                <div>{deadline.slice(0, 10)}</div>
              </div>
            </div>
            <div className=" card-actions justify-end">
              <Link
                to={`/volunteer/${volunteer._id}`}
                className="btn bg-[#4D869C] text-white"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

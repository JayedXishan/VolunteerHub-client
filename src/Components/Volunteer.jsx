import React from "react";
import { Link } from "react-router-dom";

const Volunteer = ({ volunteer }) => {
  const {
    No,
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
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                {/* <LuBadgeDollarSign className="text-[#D1BB9E]" /> */}
                <p>{no_of_volunteer}</p>
              </div>
              <div className="flex space-x-2 items-center">
                {/* <FaRegStar className="text-[#D1BB9E]" /> */}
                <div>{
                    deadline.slice(0,10)
                }</div>
              </div>
            </div>
            <div className=" card-actions justify-end">
              <Link
                to={`/volunteer/${volunteer._id}`}
                className="btn bg-[#D1BB9E] text-white"
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

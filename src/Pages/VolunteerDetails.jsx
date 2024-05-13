import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const VolunteerDetails = () => {
  const volunteers = useLoaderData();

  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="flex">
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
          <div>
            <p>{volunteers.description}</p>
            <p>{volunteers.deadline.slice(0,10)}</p>
            <p>{volunteers.location}</p>
            <p>{volunteers.no_of_volunteer}</p>
            <Link to={`/bevolunteer/${volunteers._id}`}>Be a Volunteer</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerDetails;

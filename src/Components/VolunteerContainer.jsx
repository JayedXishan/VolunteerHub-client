import React from "react";
import Volunteer from "./Volunteer";
import { Link, useLoaderData } from "react-router-dom";
import Typewriter from "typewriter-effect";
const VolunteerContainer = () => {
  const volunteers = useLoaderData();

  return (
    <div className="lg:w-[1170px] mx-auto my-[100px]">
      <div className="w-full mb-[60px]">
        <h3 className="text-center text-2xl font-bold mb-4">
          
          <Typewriter
                  options={{
                    strings: ["Volunteer Needed Posts"],
                    autoStart: true,
                    loop: true,
                    delay:75,
                    typeSpeed:120,
                    deleteSpeed:80,
                  }}
                />
        </h3>
        <p className="w-[70%] text-center mx-auto">
          Explore our Art and Volunteer Section: A sanctuary for creatives,
          where inspiration flourishes and every project becomes a masterpiece
          waiting to be born.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {volunteers.slice(0, 6).map((volunteer) => (
          <Volunteer volunteer={volunteer} key={volunteer._id}></Volunteer>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-8">
        <Link
          to="/needvolunteer"
          className=" btn  p-2 px-6 rounded-xl text-white bg-[#4D869C]"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default VolunteerContainer;

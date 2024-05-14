import React, { useState } from "react";

const Banner = () => {
  const [isActice, setActive] = useState("1");
  return (
    <div className="lg:w-[1170px] mx-auto mt-[25px]">
      <div className="relative">
        <div className="carousel w-full">
          <div
            id="item1"
            className="carousel-item w-full h-[90vh] bgImg1 rounded-3xl"
          >
            <div className="flex-col justify-center items-center mx-20 my-20 text-center">
              <h3 className=" text-white text-4xl font-extrabold">
                Unleash Your Potential
              </h3>
              <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%]">
                VolunteerHub Your Gateway to Fulfilling Volunteerism. From Local
                Initiatives to Global Causes, Find Your Ideal Project and Start
                Making a Meaningful Impact Today
              </p>
            </div>
          </div>
          <div
            id="item2"
            className="carousel-item w-full h-[90vh] bgImg2 rounded-3xl"
          >
            <div className="flex-col text-center mx-20 my-20">
              <h3 className="text-white text-4xl font-extrabold">
                Empower Your Community
              </h3>
              <p className="mx-auto text-white opacity-75 mt-6 lg:mt-8 w-[90%] lg:w-[70%]">
                {" "}
                VolunteerHub Connects Passion with Purpose - Join Today for
                Meaningful Opportunities, Impactful Projects, and Lasting
                Relationships. Make a Difference, One Click at a Time
              </p>
            </div>
          </div>
          <div
            id="item3"
            className="carousel-item w-full h-[90vh] bgImg3 rounded-3xl"
          >
            <div className="flex-col text-center mx-20 my-20">
              <h3 className="text-white text-4xl font-extrabold">
                Discover Your Purpose
              </h3>
              <p className="mx-auto text-white mt-6 opacity-75 lg:mt-8 w-[90%] lg:w-[70%]">
                Where Compassion Meets Action. Find Volunteer Roles Tailored to
                Your Skills, Interests, and Availability. Be the Change Your
                Community Needs
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[10%] right-[45%] flex space-x-4">
          <div>
            <a
              href="#item1"
              onClick={() => setActive("1")}
              className={
                isActice == "1"
                  ? "btn btn-xs rounded-full bg-[#4D869C]  text-white hover:bg-[#4D869C] hover:text-white animate-bounce"
                  : "btn btn-xs rounded-full hover:bg-[#4D869C] hover:text-white"
              }
            >
              1
            </a>
          </div>
          <div>
            <a
              href="#item2"
              onClick={() => setActive("2")}
              className={
                isActice == "2"
                  ? "btn btn-xs rounded-full bg-[#4D869C]  text-white hover:bg-[#4D869C] hover:text-white animate-bounce"
                  : "btn btn-xs rounded-full hover:bg-[#4D869C] hover:text-white "
              }
            >
              2
            </a>
          </div>
          <div>
            <a
              href="#item3"
              onClick={() => setActive("3")}
              className={
                isActice == "3"
                  ? "btn btn-xs rounded-full bg-[#4D869C]  text-white hover:bg-[#4D869C] hover:text-white animate-bounce"
                  : "btn btn-xs rounded-full hover:bg-[#4D869C] hover:text-white "
              }
            >
              3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

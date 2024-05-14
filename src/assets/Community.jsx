import React from "react";

const Community = () => {
  return (
    <div className="lg:w-[1170px] mx-auto mb-[100px]">
      <div className="hero lg:h-[400px] h-[800px] p-5 rounded-2xl bg-[#4D869C]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/rf52VKG/environmental-protection-683437-1280.jpg"
            className=" w-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="lg:text-5xl text-3xl text-white font-bold">
              Join Our Community Fast !
            </h1>
            <p className="py-6 text-white lg:w-[70%]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn px-[4] w-[110px] bg-[#7AB2B2]">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

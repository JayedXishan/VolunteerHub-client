import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import MypostCard from "../Components/MypostCard";
import Myreqcard from "../Components/Myreqcard";

const Mypost = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  const [req, setReq] = useState([]);
  useEffect(() => {
    fetch(`https://volunteer-hub-server.vercel.app/mypost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  useEffect(() => {
    fetch(`https://volunteer-hub-server.vercel.app/request/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReq(data);
      });
  }, [user]);

  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="w-full mb-[60px] mt-[100px]">
        <h3 className="text-center text-2xl font-bold mb-4">My Post</h3>
        <p className="w-[70%] text-center mx-auto">
          Browse through diverse volunteer postings tailored to your interests
          and skills. Find the perfect opportunity to lend a helping hand and
          make a meaningful impact in your community.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {item?.map((volunteer) => (
          <div>
            <MypostCard volunteer={volunteer}></MypostCard>
          </div>
        ))}
      </div>

      <div className="w-full mb-[60px] mt-[100px]">
        <h3 className="text-center text-2xl font-bold mb-4">
          My Requested Post
        </h3>
        <p className="w-[70%] text-center mx-auto">
          Seeking dedicated volunteers for various projects and causes. Post
          your volunteer opportunities and connect with passionate individuals
          ready to contribute their time and skills for positive change.
        </p>
      </div>
      <div className="mb-[100px] grid grid-cols-1 lg:grid-cols-3">
        {req?.map((volunteer) => (
          <div>
            <Myreqcard volunteer={volunteer}></Myreqcard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypost;

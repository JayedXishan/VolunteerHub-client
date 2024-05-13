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
    fetch(`http://localhost:5000/mypost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  useEffect(() => {
    fetch(`http://localhost:5000/request/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReq(data);
      });
  }, [user]);

  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="w-full mb-[60px] mt-[100px]">
        <h3 className="text-center text-2xl font-bold mb-4">
          My Post
        </h3>
        <p className="w-[70%] text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente saepe beatae, doloremque numquam eum maiores rerum totam voluptas velit molestiae architecto explicabo cupiditate commodi autem sed? Maxime, expedita esse
        </p>
      </div>
      <div className="grid grid-cols-3">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sapiente saepe beatae, doloremque numquam eum maiores rerum totam voluptas velit molestiae architecto explicabo cupiditate commodi autem sed? Maxime, expedita esse
        </p>
      </div>
      <div className="grid grid-cols-3">
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

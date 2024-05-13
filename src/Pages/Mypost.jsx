import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import MypostCard from "../Components/MypostCard";

const Mypost = () => {
  const { user } = useAuth() || {};
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mypost/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
  
  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="grid grid-cols-3">
        {item?.map((volunteer) => (
          <div >
            <MypostCard volunteer={volunteer}></MypostCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypost;

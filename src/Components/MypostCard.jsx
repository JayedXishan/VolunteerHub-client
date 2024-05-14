import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MypostCard = ({ volunteer }) => {
  const {
    _id,
    name,
    category,
    location,
    image,
    no_of_volunteer,
    deadline,
    description,
    email,
  } = volunteer;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://volunteer-hub-server.vercel.app/volunteer/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="h-[160px] w-[280px] rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <Link to={`/updatepost/${_id}`} className="btn text-white  bg-[#4D869C]">Update</Link>
              <button onClick={() => handleDelete(_id)} className="btn text-white bg-red-600">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypostCard;

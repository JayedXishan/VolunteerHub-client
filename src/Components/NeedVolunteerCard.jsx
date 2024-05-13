import React from "react";
import { Link } from "react-router-dom";

const NeedVolunteerCard = ({volunteer}) => {
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
  return (
    <div>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link to={`/volunteer/${volunteer._id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerCard;

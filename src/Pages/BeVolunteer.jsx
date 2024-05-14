import React from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const BeVolunteer = () => {
  const volunteers = useLoaderData();
  const { user } = useAuth() || {};
  

  const handleReq = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.post_title.value;
    const image = form.image.value;
    const category = form.category.value;
    const location = form.location.value;
    const no_of_volunteer = form.no_of_volunteer.value;
    const deadline = form.deadline.value;
    const suggestion = form.suggestion.value;
    const organizer_mail = form.organizer_mail.value;
    const status = form.status.value;
    const description = form.description.value;
    const email = user?.email;

    

    const item = {
      name,
      category,
      location,
      image,
      no_of_volunteer,
      deadline,
      description,
      suggestion,
      organizer_mail,
      status,
      email,
    };

    fetch("https://volunteer-hub-server.vercel.app/request", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Swal.fire({
        //   title: "Good job!",
        //   text: "Successfully Added a item!",
        //   icon: "success",
        // });
      });

    // fetch("https://pictura-server.vercel.app/Category", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div>
      <div className="flex">
        <div className="flex-grow flex-1 bg-gradient-to-br from-[#4D869C] via-[#7AB2B2] to-[#CDE8E5] flex justify-center items-center">
          <div className="w-[300px] h-[100px] border-2 p-4 flex justify-center items-center">
            <h3 className="text-4xl font-extrabold text-white">
              Apply Volunteer
            </h3>
          </div>
        </div>
        <div className="p-6 flex-1 bg-[#CDE8E5] ">
          <form onSubmit={handleReq} className="container flex flex-col mx-auto space-y-12">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Post Title</label>
                <input
                  name="post_title"
                  type="text"
                  value={volunteers.name}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image URL</label>
                <input
                  name="image"
                  type="text"
                  value={volunteers.image}
                  readOnly
                 
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Category</label>
                <input
                  name="category"
                  type="text"
                  value={volunteers.category}
                  readOnly
                  placeholder="https://"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input
                  name="location"
                  type="text"
                  value={volunteers.location}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">No of volunteer</label>
                <input
                  name="no_of_volunteer"
                  type="text"
                  value={volunteers.no_of_volunteer}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div>
                <label className="text-sm">Deadline</label>
                <input
                  name="deadline"
                  type="text"
                  value={volunteers.deadline.slice(0,10)}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              
              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  name="description"
                  value={volunteers.description}
                  readOnly
                  className="p-2 w-full rounded-md"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Organizer Mail</label>
                <input
                  name="organizer_mail"
                  type="text"
                  value={volunteers.email}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Volunteer Mail</label>
                <input
                  name="volunteer_mail"
                  type="text"
                  value={user?.email}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Suggestion</label>
                <input
                  name="suggestion"
                  type="text"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Status</label>
                <input
                  name="status"
                  type="text"
                  defaultValue="Requested"
                 
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
            </div>
            <input
              type="submit"
              value="Request"
              className="btn bg-gray-700 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteer;

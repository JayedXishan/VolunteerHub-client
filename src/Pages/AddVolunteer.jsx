import React from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const AddVolunteer = () => {
  const { user } = useAuth() || {};

  const [startDate, setStartDate] = useState(new Date());
  
  const handleAdd = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.post_title.value;
    const image = form.image.value;
    const category = form.Category.value;
    const location = form.location.value;
    const no_of_volunteer = form.no_of_volunteer.value;
    const deadline = startDate;

    const description = form.description.value;
    const email = user.email;

    
    const item = {
      
      name,
      category,
      location,
      image,
      no_of_volunteer,
      deadline,
      description,
      email,
    };

    fetch("https://volunteer-hub-server.vercel.app/volunteer", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Good job!",
          text: "Successfully Posted!",
          icon: "success",
        });
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
    <div className="lg:w-[1170px] mx-auto">
      <div className="flex">
        <div className="flex-grow flex-1 bg-gradient-to-br from-[#4D869C] via-[#7AB2B2] to-[#CDE8E5] flex justify-center items-center">
          <div className="w-[300px] h-[100px] border-2 p-4 flex justify-center items-center">
            <h3 className="text-4xl font-extrabold text-white">VolunteerHub</h3>
          </div>
        </div>
        <div className="p-6 flex-1 bg-[#CDE8E5] ">
          <form
            onSubmit={handleAdd}
            className="container flex flex-col mx-auto space-y-12"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Post Title</label>
                <input
                  name="post_title"
                  type="text"
                  placeholder="Item name"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image URL</label>
                <input
                  name="image"
                  type="text"
                  placeholder="https://"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Category
                </label>
                <select
                  name="Category"
                  className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                >
                  {/* <option disabled selected>Select</option> */}
                  <option selected>Healthcare</option>
                  <option>Education</option>
                  <option>Social Service</option>
                  <option>Animal welfare</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Location</label>
                <input
                  name="location"
                  type="text"
                  placeholder="Item name"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">No of volunteer</label>
                <input
                  name="no_of_volunteer"
                  type="text"
                  placeholder="no_of_volunteer"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Organizer Mail</label>
                <input
                  name="organizer_mail"
                  type="text"
                  value={user.email}
                  readOnly
                  
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
              <p className="text-sm">Deadline : </p>
                <DatePicker className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                />
              </div>
              
              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  name="description"
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Post"
              className="btn bg-gray-700 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;

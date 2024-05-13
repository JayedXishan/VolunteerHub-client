import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const UpdatePost = () => {
    const volunteers = useLoaderData();
    const { user } = useAuth() || {};
    const [startDate, setStartDate] = useState(new Date());
    const { _id, name, category, deadline, image, email,no_of_volunteer, location, description } = volunteers;
    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const category = form.category.value;
        const deadline = startDate;
        const no_of_volunteer = form.no_of_volunteer.value;
        const location = form.location.value;
        const email = form.organizer_mail.value;
        const description = form.description.value;


        const item = { _id,name,category, deadline, image,email, location,no_of_volunteer,description };


        fetch(`http://localhost:5000/volunteer/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "You have successfulLy updated!",
                        icon: "success"
                    });
                }
            })

    }
  return (
    <div className="lg:w-[1170px] mx-auto">
      <div className="flex">
        <div className="flex-grow flex-1 bg-gradient-to-br from-[#4D869C] via-[#7AB2B2] to-[#CDE8E5] flex justify-center items-center">
          <div className="w-[300px] h-[100px] border-2 p-4 flex justify-center items-center">
            <h3 className="text-4xl font-extrabold text-white">Update Post</h3>
          </div>
        </div>
        <div className="p-6 flex-1 bg-[#CDE8E5] ">
          <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Post Title</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={volunteers.name}
                  placeholder="Item name"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image URL</label>
                <input
                  name="image"
                  type="text"
                  defaultValue={volunteers.image}
                  placeholder="https://"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={volunteers.category}
                  className="select select-bordered select-sm w-full  rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                >
                  {/* <option disabled selected>Select</option> */}
                  <option >Healthcare</option>
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
                  defaultValue={volunteers.location}
                  placeholder="Item name"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">No of volunteer</label>
                <input
                  name="no_of_volunteer"
                  type="text"
                  defaultValue={volunteers.no_of_volunteer}
                  placeholder="no_of_volunteer"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                />
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
                <p className="text-sm">Deadline : </p>
                <DatePicker
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                />
              </div>

              <div className="col-span-full">
                <label className="text-sm">Description</label>
                <textarea
                  name="description"
                  defaultValue={volunteers.description}
                  placeholder=""
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Update"
              className="btn bg-gray-700 text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;

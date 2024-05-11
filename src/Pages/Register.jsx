import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [error, setError] = useState(null);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(null);
    //console.log(data.photoUrl);
    //console.log(data.name);
    if (data.password.length < 6) {
      setError("Password length must be 6");
      return;
    }
    if (!/^(?=.*[A-Z]).+$/.test(data.password)) {
      setError("Password must have uppercase letter");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(data.password)) {
      setError("Password must have Lower letter");
      return;
    }

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        notify();
        updateUserProfile(data.name, data.photoUrl);
      })
      .catch((error) => {
        notifyFailed();
        console.log(error);
      });
  };
  const notify = () => toast("Registration Successful!");
  const notifyFailed = () => toast("Registration Failed !");

  return (
    <div>
      <div className="hero min-h-screen bg-[#EEF7FF]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img src="https://i.ibb.co/ySBNCNX/register.png" alt="" />
            <div className="flex justify-between items-center text-[14px] px-8 mb-[24px]">
              <p className="text-[#4D869C]">Already have an account?</p>
              <Link
                to="/login"
                className="py-2 px-5 rounded-[8px] bg-[#4D869C] text-white"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-lg bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-4xl text-center font-extrabold text-[#4D869C]">
                Register
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#7AB2B2]">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="John Wick"
                  className="border-b-2 border-b-[#4D869C] p-[3px]"
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#7AB2B2]">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="John@gmail.com"
                  className="border-b-2 border-b-[#4D869C] p-[3px]"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#7AB2B2]">Photo Url</span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  placeholder="https://"
                  className="border-b-2 border-b-[#4D869C] p-[3px]"
                />
                {errors.photoUrl && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#7AB2B2]">Password</span>
                </label>

                <div className="relative flex space-x-2 items-center">
                  <input
                    {...register("password", { required: true })}
                    type={isVisible ? "text" : "password"}
                    placeholder="********"
                    className="border-b-2 border-b-[#4D869C] p-[3px] flex-grow"
                  />
                  <div
                    className="absolute right-4 text-[#7AB2B2]"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>

                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              {error && <small className="text-red-500">{error}</small>}
              <div className="form-control mt-6">
                <button className="btn bg-[#4D869C] text-white">
                  Register
                </button>
              </div>
            </form>
            <ToastContainer></ToastContainer>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

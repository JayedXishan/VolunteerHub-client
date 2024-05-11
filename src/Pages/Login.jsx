import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "../Components/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        notifySuccess();
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        notifyFailed();
        console.log(error);
      });
  };
  const notifySuccess = () => toast("Successfully Logged in!");
  const notifyFailed = () => toast("Logged in Failed !");
  return (
    <div className="lg:w[1170px] mx-auto">
      <div className="hero min-h-screen bg-[#EEF7FF] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img className="w-[500px] h-[350px]" src='https://i.ibb.co/9YRM4pB/login.png' alt="" />
            <div className="text-center font-semibold text-[14px] px-8 mb-[30px]">
                <p className="text-[#7AB2B2]">Want to Login with ?</p>
                <SocialLogin></SocialLogin>
              </div>
          </div>
          <div className="card shrink-0 shadow-lg w-full max-w-sm bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h3 className="text-4xl font-extrabold text-center text-[#4D869C]">
                Log in
              </h3>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#7AB2B2]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="John@gmail.com"
                  className=" p-[5px] border-b-2 border-b-[#4D869C]"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label text-[#7AB2B2]">
                  <span className="label-text text-[#7AB2B2]">Password</span>
                </label>
                <div className="relative flex space-x-2 justify-center items-center">
                  <input
                    type={isVisible ? "text" : "password"}
                    placeholder="********"
                    className=" p-[3px] flex-grow border-b-2 border-b-[#4D869C]"
                    {...register("password", { required: true })}
                  />
                  <div className="absolute right-4 text-[#7AB2B2]" onClick={toggleVisibility}>
                    {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#4D869C] text-white">Login</button>
              </div>
            </form>
            <ToastContainer></ToastContainer>

            <div className="flex justify-between items-center text-[14px] px-8 mb-[12px]">
              <p>Don't have account?</p>
              <Link
                to="/register"
                className="py-2 px-4 rounded-xl bg-[#4D869C] text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

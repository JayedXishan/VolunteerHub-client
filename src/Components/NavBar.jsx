import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
const NavBar = () => {
  const { logout, user } = useAuth();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive,setActive]=useState('1');
  return (
    <div>
      <div className=" bg-[#EEF7FF]">
        <header className="lg:w-[1170px] mx-auto p-4">
          <div className="container flex justify-between items-center h-16 mx-auto">
            <div className="lg:hidden">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to="/" className="">
                    Home
                  </Link>
                  <Link to="/needvolunteer" className="">
                    Need Volunteer
                  </Link>
                  <div className="dropdown dropdown-end">

                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <p className="font-bold">My Profile</p>
                        <Link to="/addpost">Add Post</Link>
                        <Link to="/managepost">Manage Post</Link>
                        <Link to="/requestedpost">Requested Post</Link>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>

            <Link to="/" onClick={()=>setActive('1')}  className="flex items-center p-2  ">
              <span className="text-[#4D869C] lg:text-5xl text-3xl ">VolunteerHub</span>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex text-gray-700 font-extralight ">
              <li className="flex">
                <Link to="/" onClick={()=>setActive('1')} className= {isActive==='1' ? 'text-[#4D869C] flex items-center px-4 border-b-2 border-[#4D869C] font-normal' : 'text-[#7AB2B2] flex items-center px-4 '}>
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link to="/needvolunteer" onClick={()=>setActive('2')} className= {isActive==='2' ? 'text-[#4D869C] flex items-center px-4 border-b-2 border-[#4D869C] font-normal' : 'text-[#7AB2B2] flex items-center px-4 '}>
                  Need Volunteer
                </Link>
              </li>
              <li className="flex">
                <div className="dropdown ">
                  <span tabIndex={0} role="button" onClick={()=>setActive('3')} className= {isActive==='3' ? 'text-[#4D869C] flex items-center px-4 border-b-2 border-[#4D869C] font-normal' : 'text-[#7AB2B2] flex items-center px-4 '}>
                    My Profile
                  </span>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/addpost">Add Post</Link>
                      <Link to="/managepost">Manage Post</Link>
                      <Link to="/requestedpost">Requested Post</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div>
              {user?.email ? (
                <div className="flex space-x-2">
                  <div>
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user.photoURL}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          />

                          {isHovered && (
                            <div className="absolute bg-gray-800 text-white px-2 py-1 rounded-lg text-xs whitespace-nowrap bottom-0 left-1/2">
                              <span>{user.displayName}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between text-primary">
                            Profile
                            <span className="badge">New</span>
                          </a>
                          <small className="text-xs">{user.displayName}</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="text-[#4D869C]" onClick={logout}>
                    Logout
                  </button>
                </div>
              ) : (
                <div className="items-center space-x-2 flex-shrink-0  lg:flex">
                  <Link
                    to="/login" onClick={()=>setActive('0')}
                    className="self-center px-7 py-2 rounded border-2 border-[#4D869C] text-[#4D869C] hidden lg:flex  transition ease-linear delay-200 duration-300 hover:bg-[#4D869C] hover:text-white "
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    onClick={()=>setActive('0')}
                    className="self-center px-8 py-3  rounded bg-[#4D869C] text-white transition ease-linear delay-200 duration-300 hover:bg-[#102C57] hover:text-white "
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default NavBar;

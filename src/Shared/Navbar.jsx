import { Link, NavLink } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
import profilepic from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = ()=> {
    logOut()
      .then()
      .catch()
  }



  const navLinks = (
    <>
      <ul className="lg:flex lg:gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-3xl text-orange-500">devWeb</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* {<BsFillPersonFill className="w-10"></BsFillPersonFill>} */}
              {
                user ? <img className="" src={user.photoURL} alt="" />
                : <img className="" src={profilepic} alt="" />
              }
             
              
            </div>
          </label>

          {
            user ?
               <>
                  <span>{user.displayName}</span>
                  <button onClick={handleLogOut} className="w-16 text-[10px] bg-pink-600 p-1  text-base-300 lg:w-24
                  rounded-xl">Log Out</button>
               </>
                :
                <Link to="/login">
                    <button className="bg-pink-600 p-1 w-24 text-base-300 rounded-xl">Login</button>
                </Link>

          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

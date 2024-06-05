import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export function SignupPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="glass-morphi container-box w-4/6 h-3/5 rounded-3xl flex justify-between flex-start ">
        <div className="w-2/6">
        <Link to="/"><img className="w-8 h-8 mt-7 ml-10" src="icons-left-64.png" alt="back"/></Link>
          <img className="h-4/5 ml-6" src="reg-png.png" alt="Register"/>
        </div>
        <form className=" flex w-2/3 h-full gap-8 ">
          {/* <h2 className="ml-36 mt-3 font-sans font-extrabold text-lg ">
            Log in
          </h2> */}
          <div className=" w-1/2 flex flex-col gap-2 ">
            <h2 className=" mt-3 font-sans font-extrabold text-lg ">Sign Up</h2>
            <label className="font-bold" htmlfor="username">
              Username
            </label>
            <input
              className="rounded-xl border-black border-2 h-14"
              type="text"
              placeholder="Email or Phone"
              id="username"
            />

            <label className="font-bold" htmlfor="password">
              Password
            </label>
            <input
              className="rounded-xl border-black border-2 h-14"
              type="password"
              placeholder="Password"
              id="password"
            />
            <Link to="/" className="mt-10 text-red-500 ml-16">Already have Account? log in</Link>
          </div>
          <div className="w-1/2 mt-12 flex flex-col gap-2 ">
            <label className="font-bold" htmlfor="name">
              Name
            </label>
            <input
              className="rounded-xl border-black border-2 h-14 w-11/12  "
              type="text"
              placeholder="Enter your Name "
              id="fullName"
            />

            <label className="font-bold" htmlfor="password">
              Confirm Password
            </label>
            <input
              className="rounded-xl border-black border-2 h-14 w-11/12"
              type="password"
              placeholder=" Confirm Password"
              id=" conf-password"
            />
            <button className="rounded xl font-extrabold text-lg text-red-500 bg-blue-500 w-36 h-10 mt-8">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

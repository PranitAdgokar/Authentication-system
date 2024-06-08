import React from "react";
import ShimmerButton from "../components/button";
import Input from "../components/input";

import { Link } from "react-router-dom";

export function SignupPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="glass-morphi container-box w-4/6 h-3/5 rounded-3xl flex justify-between flex-start ">
        <div className="w-2/6">
          <Link to="/">
            <img
              className="w-8 h-8 mt-7 ml-10"
              src="/Images/icons-left-64.png"
              alt="back"
            />
          </Link>
          <img
            className="h-auto max-w-full ml-8 mb-8"
            src="/Images/reg-png.png"
            alt="Register"
          />
        </div>
        <form className=" flex w-2/3 h-full gap-8 mr-8 ">
          {/* <h2 className="ml-36 mt-3 font-sans font-extrabold text-lg ">
            Log in
          </h2> */}
          <div className=" w-1/2 flex flex-col gap-2">
            <h2 className=" mt-3 font-sans font-extrabold text-lg ">Sign Up</h2>
            <label className="font-bold" htmlfor="username">
              Username
            </label>
            <Input type="text" placeholder="Email or Phone" id="username" />

            <label className="font-bold" htmlfor="password">
              Password
            </label>
            <Input type="password" placeholder="Password" id="password" />
            <Link to="/" className="mt-10 text-red-500 ml-10">
              Already have Account? log in
            </Link>
          </div>
          <div className="w-1/2 mt-12 flex flex-col gap-2 ">
            <label className="font-bold" htmlfor="name">
              Name
            </label>
            <Input type="text" placeholder="Enter your Name " id="fullName" />

            <label className="font-bold" htmlfor="password">
              Confirm Password
            </label>
            <Input
              type="password"
              placeholder=" Confirm Password"
              id=" conf-password"
            />
            <ShimmerButton className="shadow-2xl mt-4">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Register
              </span>
            </ShimmerButton>
          </div>
        </form>
      </div>
    </div>
  );
}

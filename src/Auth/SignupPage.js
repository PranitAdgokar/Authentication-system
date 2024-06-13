import React from "react";
import ShimmerButton from "../components/button";
import Input from "../components/input";

import { Link } from "react-router-dom";

export function SignupPage() {
  return (
    <div className="h-screen container sm:px-8 flex justify-center items-center">
      <div className="glass-morphi py-8 rounded-3xl sm:grid grid-cols-2  ">
        <div className="w-full flex justify-center">
          <Link to="/">
            <img
              className="w-8 h-8"
              src="/Images/icons-left-64.png"
              alt="back"
            />
          </Link>
          <img
            className="w-200px sm:max-w-[400px]"
            src="/Images/reg-png.png"
            alt="Register"
          />
        </div>
        <div className=" grid justify-center">
          <span>
            <h2 className=" text-center items-center font-sans font-extrabold text-lg ">
              Sign Up
            </h2>{" "}
          </span>

          <form className=" grid grid-cols-1 sm:grid-cols-2">
            {/* <h2 className="ml-36 mt-3 font-sans font-extrabold text-lg ">
            Log in
          </h2> */}

            <div className="px-8">
              <label className="font-bold" htmlfor="username">
                Username
              </label>
              <Input type="text" placeholder="Email or Phone" id="username" />

              <label className="font-bold" htmlfor="password">
                Password
              </label>
              <Input type="password" placeholder="Password" id="password" />
              <Link to="/" className="text-gray-300">
                Already have Account?{" "}
                <span className=" text-white">
                  <b>log in</b>
                </span>
              </Link>
            </div>
            <div className="px-8">
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
              <ShimmerButton className="shadow-2xl mt-6">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Register
                </span>
              </ShimmerButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

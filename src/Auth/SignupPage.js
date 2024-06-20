import React from "react";

import Input from "../components/input";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

export function SignupPage() {
  return (
    <div className="h-screen container sm:px-8 flex justify-center items-center">
      <div className="glass-morphi py-8 rounded-3xl sm:grid grid-cols-2  ">
        <div className="w-full flex justify-center">
          <Button aschild className="bg-white" variant="outline" size="icon">
            <ChevronLeftIcon className=" h-4 w-4" />
          </Button>
          <img
            className="w-200px sm:max-w-[400px]"
            src="/Images/reg-png.png"
            alt="Register"
          />
        </div>
        <div className=" grid justify-center">
          <span className=" flex justify-center items-center ">
            <h2 className=" text-white text-center font-sans font-extrabold text-lg ">
              Sign Up
            </h2>{" "}
          </span>

          <form className="text-white grid grid-cols-1 sm:grid-cols-2">
            {/* <h2 className="ml-36 mt-3 font-sans font-extrabold text-lg ">
            Log in
          </h2> */}

            <div className="  px-8">
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
              <Button className="bg-black shadow-2xl mt-6">
                <span className=" whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Register
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

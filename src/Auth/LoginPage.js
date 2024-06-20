import React from "react";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
import Input from "../components/input";
import { Button } from "../components/button";

export default function LoginPage() {
  return (
    <main className="container px-4 sm:px-8 lg:px-12  mx-auto max-w-7xl flex items-center justify-center h-screen">
      <div className="glass-morphi grid gap-4 grid-cols-1 md:grid-cols-2 w-full max-w-[600px] p-4 px-8 sm:px-4 rounded-3xl">
        <div className="flex justify-center items-center">
          <img
            className="w-full max-w-[350px] m-16"
            src="/Images/illustration.png"
            alt="Login"
          />
        </div>
        <form className=" text-white w-full max-w-full md:max-w-[400px] flex flex-col justify-center gap-2 ">
          <h2 className=" font-sans font-extrabold text-lg ">Log in</h2>
          <label className="font-bold" htmlfor="username">
            Username
          </label>
          <Input type="email" placeholder="Email or Phone" id="username" />

          <label className="font-bold" htmlfor="password">
            Password
          </label>
          <Input type="password" placeholder="Password" id="password" />
          <Button className=" bg-gray-950 mt-4">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Log in
            </span>
          </Button>
          <div className="contents text-center">
            <span className="text-gray-300">
              <Link to="../Auth/PassForget">Forget Password?</Link>
            </span>
            <span className="text-gray-300">
              <Link to="../Auth/SignupPage ">
                Not a User?{" "}
                <span className="text-white">
                  <b>Sign Up</b>
                </span>
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}

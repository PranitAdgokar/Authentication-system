import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <div className="glass-morphi container-box w-4/6 h-3/5 rounded-3xl flex justify-between items-center  ">
        <img
          className=" w-72 h-92 m-16"
          src="illustration.png"
          alt="Login"
        />
        <form className="flex flex-col justify-center w-1/2 mr-28 gap-2 ">
          <h2 className="ml-36 mt-3 font-sans font-extrabold text-lg ">
            Log in
          </h2>
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
          <button className="h-10 rounded-xl mt-4 font-extrabold text-lg text-red-500 bg-blue-500">
            login
          </button>
          <div className="contents mb-3">
            <span className="text-red-500 ml-24">
              <Link to="/PassForget">Forget Password?</Link>
            </span>
            <span className="text-red-500 ml-24">
              <Link to="/SignupPage">Not a User? Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

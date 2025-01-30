import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../conponent/Button";

const Login = () => {
  return (
    <div className="md:px-28 px-8 ">
      <div className="md:flex  gap-20 md:pb-48 pb-24">
        <div className="md:w-1/2 text-left">
          <hr />
          <LoginProp
            title="Log in"
            semititle="Why do I need to Login"
            para="To use any version of Live (including Live Lite or our free trial) you need an Ableton account. It takes less than a minute to create one, and even less to log in if you already have one."
          />
          <form className="max-w-xs w-full text-xs">
            <div className="py-6">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email or Username</label>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label className="font-semibold" htmlFor="password">
                  Password
                </label>

                <a className="text-[#0000FF] py-2" href="#">
                  Forgot Password?
                </a>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="text-left">
              <Button>Log in</Button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 text-left">
          <LoginProp
            title="Register"
            semititle="New Customer? Please create an account."
            para="Your account lets you authorize and download Live plus your included library content."
          />
          <form className="max-w-xs w-full text-xs">
            <div className="py-4">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email</label>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="pb-4">
              <div className="py-2 font-semibold">
                <label htmlFor="fullname">FullName</label>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                placeholder="optional"
                type="text"
                name="fullname"
                id="fullname"
              />
              <p className="text-[#00A2B0] font-semibold">
                So that we know what to call you if we email you.
              </p>
            </div>
            <div className="py-6">
              <label className="font-semibold py-2" htmlFor="password">
                Password
              </label>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </form>

         
          <Button>Create an account </Button>
        </div>
      </div>
      <hr className="py-8" />
    </div>
  );
};

export default Login;

export const LoginProp = ({ title, semititle, para }) => {
  return (
    <div>
      <h1 className="text-6xl font-semibold pt-8 md:pt-24 pb-8">{title}</h1>
      <hr />
      <h1 className="text-xl pb-1 font-semibold pt-8">{semititle}</h1>
      <p>{para}</p>
    </div>
  );
};


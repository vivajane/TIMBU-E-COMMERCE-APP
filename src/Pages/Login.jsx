import React, { useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../conponent/Button";
import { useState } from "react";
import login from "../../config/login";
import signUp from "../../config/signup";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    cpassword: "",

  })
  const [message, setMessage] = useState("");

  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(loginData);
  };

  const onChangeSignUp = (e) => {
    const { name, value } = e.target;
    // e.target.value()
    setSignUpData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    console.log(signUpData)
  }

  const onSubmitLogin = async(e) => {
    e.preventDefault();
    // if(loginData.email === "" || loginData.password === "") 
    try {
      const response = await login(loginData.email, loginData.password);
      if(response){
      setMessage("Login successful");
        console.log(response, "this is the response")
      }
      setTimeout(() => {
        setMessage("");
      }, 3000);
    // return response;
    } catch (error) {
      console.log(error, "this is the errror")
      
    }
  }

  const onSubmitSignUp = async(e) => {
    e.preventDefault();
    try {
      const res = await signUp(signUpData.email, signUpData.password);
      console.log(res)


    } catch (error) {
      console.log(error, "error from sign up")
    }
    
  }
  


  useEffect(() => {
console.log("effect")
  },[loginData])
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
          <form onSubmit={onSubmitLogin} className="max-w-xs w-full text-xs">
          {message && <p className="text-green-500 text-sm text-center">{message}</p>}
            <div className="py-6">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email </label>
              </div>
              <input
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={onChangeLogin}
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
                value={loginData.password}
                onChange={onChangeLogin}
              />
            </div>
            <div  className="text-left">
              <Button  >Log in</Button>
            </div>
          </form>
        </div>

        <div className="md:w-1/2 text-left">
          <LoginProp
            title="Register"
            semititle="New Customer? Please create an account."
            para="Your account lets you authorize and download Live plus your included library content."
          />
          <form  onSubmit={onSubmitSignUp} className="max-w-xs w-full text-xs">
            <div className="py-4">
              <div className="py-2 font-semibold">
                <label htmlFor="email">Email</label>
              </div>
              <input onChange={onChangeSignUp}
                className="bg-[#EEEEEE] w-full py-3"
                type="email"
                name="email"
                id="emailsignup"
              />
            </div>

            <div className="py-6">
              <label className="font-semibold py-2" htmlFor="password">
                Password
              </label>
              <input onChange={onChangeSignUp}
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                name="password"
                id="passwordsignup"
              />
            </div>
            <div className="py-6">
              <label className="font-semibold py-2" htmlFor="cpassword">
               Confirm Password
              </label>
              <input onChange={onChangeSignUp}
                className="bg-[#EEEEEE] w-full py-3"
                type="password"
                name="cpassword"
                id="cpassword"
              />
            </div>
          </form>

          {/* <Button >Create an account </Button> */}
          <button type="submit">Create an account</button>
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
      <h1 className="text-base  font-semibold pt-8 md:pt-24 pb-8">{title}</h1>
      <hr />
      <h1 className="sm:text-xl text-sm pb-1 font-semibold pt-8">{semititle}</h1>
      <p className="sm:text-base  text-sm">{para}</p>
    </div>
  );
};

import React, { useContext, useState } from "react";

import { jwtDecode } from "jwt-decode";

import Inputfield from "../generalcomponents/inputfield";
import { FcGoogle } from "react-icons/fc";
import Indication from "../generalcomponents/Indication";

import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";

import Button from "../generalcomponents/button";
import Divider from "../generalcomponents/Divider";
import { Context } from "../context";
import Logo from "../generalcomponents/logo";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import {
  saveGoogleAuth,
  searchGoogleAuth,
  searchM,
} from "../utils/authentication";
import { useNavigate } from "react-router";
const Login = () => {
  const { eye, seteye,setaccount ,account ,setuser , setIsAuthenticated} = useContext(Context);
  const [form, setform] = useState({
    name:"",
    email: "",
    password: "",
  });
  const navigate =useNavigate()
  const [error, seterror] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    console.log(form);
  };
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenresponse) => {
      const { access_token } = tokenresponse;
      console.log(tokenresponse);

      const res = await searchGoogleAuth(access_token); //just for fetching some data of user
      //  const res = await saveGoogleAuth(access_token)
      console.log("GU",res.data.newUser)
      seterror("");
      setaccount('loged')
      setuser({
        id:res.data.newUser._id,
        name : res.data.newUser.name,
        email : res.data.newUser.email,
         writerPic : res.data.newUser.writerPic ? res.data.newUser.writerPic : ''
      })
      sessionStorage.setItem('accessToken' ,`Bearer ${res.data.accesstoken
      }`)
      sessionStorage.setItem('refreshToken' ,`Bearer ${res.data.refreshtoken
      }`)
      console.log(res.refreshtoken
      )
      setIsAuthenticated(true)
      navigate('/writerDetail')

      //console.log(res.data);
      // if (res.status === 200) {
      //   console.log("user verified");
      // }
      console.log("user varified")
    },
    onError: (error) => {
      console.log("error occured at google login", error);
      seterror("Error Occured try again later")
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i <= 2; i++) {
      e.target[i].value = "";
    }

    const res = await searchM(form);
    console.log(res.message,res.data);
    console.log(res.status)
    if (res.status == 200) {

      seterror("");
      setaccount('loged')
    
      setuser({id:res.data.user._id,
        name : res.data.user.name,
        email : res.data.user.email,
        writerPic : res.data.user.writerPic ? res.data.user.writerPic : ''
      
      })
      sessionStorage.setItem('accessToken' ,`Bearer ${res.data.accessToken}`)
      sessionStorage.setItem('refreshToken' ,`Bearer ${res.data.refreshToken}`)
      setIsAuthenticated(true)
      navigate('/home')

      console.log("Ulogin successful");
    } else {
      seterror("Wrong Credientials");
      console.log(res, "login unsuccessfull");
    }
  };
  const validate = form.email && form.password
  return (
    <div className=" flex w-full h-[100vh]">
      <div
        className="hidden md:flex flex-col gap-y-4 
        w-1/3 min-h-screen bg-black items-center justify-center"
      >
        <Logo type="login"></Logo>
        <span className="text-xl font-semibold text-white ">Welcome Back</span>
      </div>
      <div
        className=" flex w-full md:w-2/3 h-full bg-white dark:bg-gradient-to-b
         md:dark:bg-gradient-to-r from-black via-[#071b3e] to-black"
      >
        <div className="w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="block mb-10 md:hidden ">
            <Logo type="login"></Logo>
          </div>
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2
                className="mt-6 text-center text-2xl 
                         md:text-3xl font-semibold  text-green-700 dark:text-white"
              >
                Sign into Your Account
              </h2>
            </div>
            <Button
              label={"Sign In with Google"}
              onClick={handleGoogleLogin}
              icon={<FcGoogle />}
              styles="w-full flex flex-row-reverse gap-4 bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border boder-gray-300"
            ></Button>
            <Divider
              label={"or SignIn with Email"}
              styles={`text-grey-300`}
            ></Divider>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="w-full  flex flex-col rounded-md shadow-sm -space-y-px gap-5">
                <Inputfield
                  onchange={(e) => handleChange(e)}
                  value={form?.email}
                  labelname={"Email Address"}
                  placeholder={"Enter Your Email"}
                  labelfor={"email"}
                ></Inputfield>
                <Inputfield
                  onchange={(e) => handleChange(e)}
                  value={form?.password}
                  labelname={"Password"}
                  placeholder={"Enter Your Password"}
                  labelfor={"password"}
                  inputType={eye == true ? "text" : "password"}
                  icon={eye == true ? <IoIosEye /> : <IoEyeOffSharp />}
                ></Inputfield>
                {error && (
                  <p className="text-red-600 font-mono">{error}</p>
                )}
                <Button
                disabled={!validate}
                  label={"Sign In"}
                  type={"submit"}
                  styles="w-full z-20 flex bg-rose-600 text-white px-5 py-2.5 rounded-full border border-gray-300  "
                ></Button>
              </div>
            </form>
            <Indication
              label={"Don't Have an Account "}
              link={"/signup"}
              labelaction={"SignUp!"}
            ></Indication>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

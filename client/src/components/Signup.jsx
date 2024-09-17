import React, { useContext, useEffect, useState } from "react";



import { IoIosEye } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoIosImages } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import { Context } from "../context";
import Logo from "../generalcomponents/logo";
import Inputfield from "../generalcomponents/inputfield";
import Button from "../generalcomponents/button";
import Divider from "../generalcomponents/Divider";
import Indication from "../generalcomponents/Indication";
import { useGoogleLogin, useGoogleOAuth } from "@react-oauth/google";
import { saveGoogleAuth, saveUserM } from "../utils/authentication";
import { imageUp } from "../utils/imagesapi";
import Spinner from "../generalcomponents/Spinner";

const initialState = {
  firstname : "",
  lastname : "",
  email : "",
  password : "",
  writerPic : "",
}
const Signup = () => {
  const [spinner,setspinner]=useState(false)
  const {eye,seteye} =useContext(Context)
  const [file,setfile] =useState('')
  const [signed,setsigned] =useState(false)
  const [error,seterror]=useState('')
  const [data,setdata] =useState(initialState)
  const navigate =useNavigate()
  const handleChange = (e)=>{
    const {name,value} =e.target
    setdata({...data,[name]:value})
    console.log(e.target.value)
  
  }
  const handlefile=(e)=>{
    setfile(e.target.files[0])
    console.log(file)
  }
  const handleSubmit= async (e)=>{
    e.preventDefault();   
    console.log(e)
    for(let i =0 ; i<=4;i++){
      e.target[i].value='';
    }
  console.log("dat from front m",data)
    const res = await saveUserM(data)
    console.log(res)
    if(res.status == 200){
      console.log("signed Up successful",res.status)
      seterror("")
      navigate('/login')

    }else if(res.response.status == 409){
      console.log(res.response.data.message,res.response.status);
      seterror(res.response.data.message)
     // navigate('/login')
      
    }else{
      seterror("Wrong credientials")
    }
    // try {
    //   const res = await saveUserM(data)
    //     console.log("signed up successful")
    //     setsigned(true)
    //    seterror('')
     
    // } catch (error) {
    //   console.log("error on signup")
    //   seterror(error.message)
    // }
    
     
       

  }
  const handleGSignup = useGoogleLogin({
    onSuccess : async (tokenresponse)=>{
      const {access_token} = tokenresponse;
      const res = await saveGoogleAuth(access_token)
      console.log(res)
      if(res.status==200){
        console.log("user saved")
        console.log(res.data)
        seterror('')
      }else if(res.response.status == 409){
        console.log(res.response.data.message);
        seterror(res.response.data.message)
        
      }else{
        seterror("Wrong Credientials")
      }
    }
  })
  useEffect(()=>{
    const sendP = async()=>{
   if(file){
    setspinner(true)
      const ImageForm = new FormData();
      ImageForm.append('name',file.name)
      ImageForm.append('file',file)
       const res = await imageUp(ImageForm)

       setspinner(false)
       setdata({...data,writerPic:res.data.imageUrl})
       console.log(typeof res.data.imageUrl)
       console.log(res.data.imageUrl);
       console.log(initialState)
   }
    }
    sendP();

  },[file])
  const isFormValid = data.email && data.firstname && data.lastname && data.writerPic && data.password
  console.log(isFormValid)
  return (
    <div className="flex w-full h-[100vh]">
    
      <div className="hidden md:flex flex-col justify-center items-center w-2/6 bg-black min-h-screen  ">
        <Logo type="signup"></Logo>
        <span className="text-xl font-semibold text-white ">Welcome, Back</span>
      </div>
      <div className="md:w-2/3  w-full  justify-center items-center h-full bg-gradient-to-r flex flex-col from-black via-[#071b3e] to-black">
        <div className="mx-10 ">
          <div className="md:hidden"><Logo type={"signup"}></Logo></div>
          
          <div className="my-7  items-center gap-7 ">
            <div className="flex items-center gap-7 my-4">
            <Link to={'/login'}
            > <FaArrowAltCircleLeft color="gray" /></Link>
          
            <h2 className="font-extrabold dark:text-white text-rose-600">
              Sign Up For an Account
            </h2>
            </div>
            <Button label= {'Sign In with Google'} onClick={handleGSignup}
                      icon ={<FcGoogle />}
                      styles= 'w-full flex flex-row-reverse gap-4  bg-white dark:bg-transparent text-black dark:text-white px-5 py-2.5 rounded-full border boder-gray-300'
                    ></Button>
          </div>
          <Divider label={"or Sign up with Email"} styles ={`text-grey-300`}></Divider>
          <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <div className="w-full gap-4 flex flex-col rounded-md  justify-between py-5">
              <div className="w-full flex gap-5  ">
                <Inputfield
                  labelfor={"firstname"}
                  labelname={"First Name"}
                  placeholder={"First Name"}
                  inputType={"text"}
                  value = {data?.firstname}
                  onchange={(e)=>handleChange(e)}
                ></Inputfield>
                <Inputfield
                  labelfor={"lastname"}
                  labelname={"Last Name"}
                  placeholder={"Last name"}
                  inputType={"text"}
                  value = {data?.lastname}
                  onchange={(e)=>handleChange(e)}
                ></Inputfield>
              </div>
              <div className="w-full flex flex-col  gap-5 ">
                <Inputfield
                  labelfor={"email"}
                  labelname={"Email Address"}
                  placeholder={"text@example.com"}
                  inputType={"email"}
                  value = {data?.email}
                  onchange={(e)=>handleChange(e)}
                ></Inputfield>
                <Inputfield
                  labelfor={"password"}
                  labelname={"Password"}
                  placeholder={"Password"}
                  value = {data?.password}
                  onchange={(e)=>handleChange(e)}
                  inputType={eye == true ?"text": "password"  } icon={eye == true ? <IoIosEye /> : <IoEyeOffSharp /> }
                ></Inputfield>
              </div >
              {error && <p className="text-red-600 ">{error}</p>}
              <input type="file" className="hidden" id="file" accept="jpg , .png , .jpeg" onChange={(e)=>handlefile(e)}/>
              <label htmlFor="file">
              <div className="flex gap-3 items-center text-rose-600 dark:text-white cursor-pointer" >

              <IoIosImages />
              {file !== "" ? <><p> picture</p> {spinner ? <Spinner styles={'w-2 h-2'}></Spinner>: <IoCheckmarkDoneCircle color="green"/>}</> : <p> picture</p>  }
             
              </div>
              </label>
            </div>
          
          <Button
          type={"submit"}
      label ={"Sign Up"}
      disabled={!isFormValid}
                          styles='w-full flex bg-rose-600 text-white px-5 py-2.5 rounded-full border border-gray-300'
      ></Button>
      </form>
      
      <Indication styles= 'my-3' label={"Already Have an Account "} link={"/login"} labelaction={"Login!"}></Indication>
    
        </div>
        
        
      </div>
    
    </div>
  );
};

export default Signup;

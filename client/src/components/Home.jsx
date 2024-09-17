// src/components/Home.js
import React, { useContext, useEffect, useState } from "react";
import Card from "../generalcomponents/card";
import Banner from "../generalcomponents/Banner";
import Posts from "../generalcomponents/Posts";
import { Context } from "../context";
import Navbar from "./Navbar";

import Button from "../generalcomponents/button";
import { Link } from "react-router-dom";
import { fetchAllPosts } from "../utils/fetchposts";
import { fetchAllWriters } from "../utils/fetchwriters";
const Home = () => {
  const [totalPosts,settotalPosts] =useState([])
  const { isAuthenticated,user ,setwritersChunk} = useContext(Context);


const bannerPost =Math.floor(Math.random()*totalPosts.length)
  useEffect(()=>{
    const fetchPosts =async ()=>{
        
       const res = await fetchAllPosts()
       if(res.status == 200){

        settotalPosts(res.data.posts)
       }
         
       
    }
    const fetchwriters =async()=>{
       const res = await fetchAllWriters()
       if(res.status == 200){
        console.log("wr",res)
        console.log("wrietrs",res.data.writers)

             setwritersChunk(res.data.writers)
       }
    }
    fetchPosts();
    fetchwriters()
    console.log("the blog", totalPosts)
    console.log(user)
  },[])

  return (
    <>
      {!isAuthenticated && 
        <div className="w-full flex justify-end pr-20 h-[40px]    ">
          {" "}
          <div className=" flex  w-fit p-1 mt-1 gap-3">
           <Link to={'/login'} className=""> <Button label = {'LogIn'} styles ={'p-2 w-fit bg-gradient-to-r from-[rgb(1,134,218)] to-[rgb(182,49,167)] dark:text-white text-black rounded-lg font-semibold  hover:shadow-[0px_0px_20px_rgba(1,134,218,0.5)]  hover:scale-110   focus:outline-none'}></Button></Link>
           <Link to={'/signup'} ><Button  label = {'SignUp'} styles ={'w-fit p-2 bg-blue-400 rounded-lg font-bold custom-element dark:text-white text-black  hover:shadow-[0px_0px_20px_rgba(1,134,218,0.5)]  hover:scale-110   focus:outline-none  focus:ring-2 focus:ring-[rgb(1,134,218)]'}></Button>
          </Link>
          </div>
        </div>
      }
      <div className="min-h-screen flex flex-col items-center justify-center md:p-5 2xl:p-8  p-4 ">
        <Banner BBlog ={totalPosts[bannerPost]} mainImgw={'w-2/3 items-center justify-center'} overflowimg={'w-16 h-16 opacity-50'} intro={true} maindiv={'md:h-[400px] h-[200px] ' } type={'home'}></Banner>
        <Posts allBlogs={totalPosts}></Posts>
      </div>
    </>
  );
};

export default Home;

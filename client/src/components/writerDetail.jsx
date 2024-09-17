import React, { useContext, useEffect } from "react";
import Banner from "../generalcomponents/Banner";
import WriterTerm from "../generalcomponents/WriterTerm";
import newTerm from '../utils/general.js/termWriter'
import { IoArrowBackCircle } from "react-icons/io5";
import WriterDHome from "./WriterDHome";
import { Outlet, useParams } from "react-router";
import { Context } from "../context";
import { writercards } from "../utils/writer";
import { Link } from "react-router-dom";
const WriterDetail = () => {
  const {setwriterid,setperUserDetail,setwriterBlogs} = useContext(Context)
    const {id} = useParams()
  

    useEffect(()=>{
      const getWriterCards =async ()=>{
  
        const res = await  writercards(id);
        console.log(res)
        const {userRecord,userDetail} = res
        console.log(userRecord)
        console.log('detail',userDetail)
         setwriterBlogs(userRecord)
         setperUserDetail(userDetail)
      }
      // if(user.email){
        getWriterCards();
  
      //}
         
    },[])

 
  return (
    <div className="min-h-screen flex flex-col items-center md:p-5 2xl:px-12  p-4 ">
      <Link to={'/home'} className="ml-5 text-white w-full"><IoArrowBackCircle color={"#ffe26b"} size={30}/></Link>
      <Banner
        mainImgw={"w-full items-end justify-center"}
        intro={false}
        overflowimg={
          " w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem] -b-25 -bottom-10 relative dark:bg-[#212020] p-2 opacity-1 "
        }
        maindiv={"md:h-[300px] h-[150px]"}
        bannerImg={true}
      ></Banner>
      <div className="bg-white centeralignWriterIn mt-3 h-12 flex justify-between p-3 md:justify-start gap-4 rounded-md items-center ">
        {newTerm.map((item)=> <div className="flex space-x-5 ">
        <WriterTerm item = {item}></WriterTerm>
          </div>)}
     </div>
     <div className="w-full  flex items-center justify-center centeralignWriterIn min-h-fit bg-white mt-3">
    <Outlet ></Outlet>
    </div>
    </div>
  );
};

export default WriterDetail;

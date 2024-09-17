import React from "react";
import Divider from "../generalcomponents/Divider";
import WriterAboutSk from "../generalcomponents/WriterDAboutSk";
import WriterDAboutSk from "../generalcomponents/WriterDAboutSk";
import WriterDAboutlinks from "../generalcomponents/WriterDAboutlinks";
import Links from "../utils/general.js/writerlinks";

const WriterDAbout = () => {
  const links = ['linkedin' , 'github', 'a','b']
  const newLinks = Links({link : links})
  console.log(newLinks)
  return (
    <div className="w-full flex flex-col md:p-10 p-4 relative">
      <p className="absolute right-5 top-3 hover:cursor-pointer bg-orange-500 p-1 rounded-md ">edit option</p>
      <div className="mb-8">
        <h1 className="font-extrabold text-lg">Muhammad mehdi hassan</h1>
        <div className=" ">
          
{newLinks.map((itemLink,index)=><div className="flex  gap-3 mb-1"><WriterDAboutlinks key={index} Slinks={itemLink}></WriterDAboutlinks></div>)}
        
       
        </div>

        
        {/* na,me */}
      </div>
      <div>
        <div className="mb-6">
            <h2 className="font-bold text-3xl mb-6">About me</h2>
            <div className="flex md:flex-row flex-col item-start min-w-0 ">
                <p className="break-words flex-grow  mr-4 w-fullm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit praesentium minima nostrum, in voluptatum quaerat optio, veritatis quae culpa exercitationem aperiam dignissimos. Dolor animi, nesciunt atque tempora odit nihil possimus.
                   </p>
                <img src="" alt="" className="md:w-52 h-52 w-full md:ml-1 flex-shrink-0"/>
            </div>
               
            {/* About section */}
        </div>
        <Divider ></Divider>
        <div>
        <h2 className="font-bold text-3xl mb-7 mt-2">Skills</h2>
          <WriterDAboutSk></WriterDAboutSk>
        </div>
      </div>
    </div>
  );
};

export default WriterDAbout;

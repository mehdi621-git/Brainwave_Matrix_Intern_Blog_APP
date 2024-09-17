import React, { useEffect, useState } from "react";
import Card from "./card";
import { categories } from "../utils/category";
import { Link } from "react-router-dom";
import WriterArea from "./writerArea";

const Posts = ({ allBlogs }) => {
  const [newBlogsSearch,setnewBlogsSearch] =useState(allBlogs)
  const [nofilterca,setnofilterca] =useState("")
  useEffect(() => {
    console.log(allBlogs);
  }, []);
  useEffect(() => {
    setnewBlogsSearch(allBlogs);
  }, [allBlogs]);
 
const handleCategorySearch =(categoryName)=>{
        const newBlogs= allBlogs.filter((item)=>item.category == categoryName)
         setnewBlogsSearch(newBlogs)
         setnofilterca(categoryName)
}
  return (
    <div className="h-auto w-[95%] md:w-[87%]  flex flex-col md:flex-row gap-3 2xl:p-2 p-1" >
      <div className="md:w-[88%]  w-full h-full  grid  grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-1 gap-[2px]">
        {newBlogsSearch?.length > 0 ? (
          newBlogsSearch.map((blog) => <Card blogElements={blog} sliceCount={60} writerimg={true}></Card>)
        ) : (
          <h2 className="dark:text-white text-black">{`Sorry, no blogs ${nofilterca ? 'related to ' + nofilterca : "" } available. Write one!`}</h2>
        )}
      </div>
      <div className="md:w-[16%] w-full h-fit bg-gray-700 rounded-md  gap-3 my-5 p-1 flex flex-col  " style={{
      boxShadow: '5px 5px 1px rgba(225, 225, 225, 1.5)' ,
      
    }}>
         <WriterArea></WriterArea>
         <p className = 'dark:text-white font-bold text-xs'>Visit all Writers </p>
        <div>
          
            <h2 className="font-bold hover:cursor-pointer" onClick={()=>setnewBlogsSearch(allBlogs)}>All Categories</h2>
      

          <div className={`grid grid-rows-1 gap-2 `}>
            {categories.map((category) => (
              <p
                className={`border-b-2 border-black p-1 hover:cursor-pointer `}
                style={{ backgroundColor: category.color }}
                onClick={()=>handleCategorySearch(category.name)}
              >
                {/* <Link
                  to={`/home/?category=${category.name}`}
                  className="w-full block"
                > */}
                  {category.name}
                {/* </Link> */}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;

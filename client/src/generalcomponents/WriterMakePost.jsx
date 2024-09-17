import React, { useContext, useState } from 'react';
import UserHeadline from './UserHeadline';
import { Context } from '../context';
const WriterMakePost =()=> {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const {perUserDetail} = useContext(Context)
 console.log(perUserDetail)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 const url =perUserDetail.writerPic
  return (
    <>
      {/* Existing "Start a Post" Component */}
      <div className="flex justify-center centeralignWriterIn bg-white items-center gap-2 m-3 p-2 rounded-xl">
        <img src={url} alt="writer-image" className="rounded-full postimagesize" />
        <div
          onClick={openModal}
          className="bg-gray-300 rounded-3xl text-gray-900 border-gray-600 border-[1px] p-3 m-2 w-[70%] hover:cursor-pointer"
        >
          Start a Post
        </div>
      </div>

      {/* Modal/Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Write Your Post</h2>

            {/* Form to write post */}
            <UserHeadline postdays={false}></UserHeadline>
            <form>
               
              <div className="mb-4 w-full">
                <textarea name="" id="" rows={10} className='w-full p-2 m-2 overflow-auto outline-none resize-none' cols={50} placeholder='Share Your Words with World!'></textarea>
                <p>hello insert + icon for files here</p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


export default WriterMakePost
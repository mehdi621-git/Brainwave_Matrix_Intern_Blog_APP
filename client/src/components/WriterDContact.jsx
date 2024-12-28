

import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { contactGroup, fetchmessage } from '../utils/ContactGroup'
import io from 'socket.io-client';
// let socket = io('http://localhost:7000', {
//   withCredentials: true,
//   transport: ["websocket"]
// });
const socket = io('http://localhost:7000', { withCredentials: true , autoConnect: false,});

const WriterDContact = () => {
  const {perUserDetail,user} =useContext(Context)
  const [message,setmessage] = useState('')
  const [usermessage,setusermessage] =useState([])
  const [error,seterror] =useState('')
  const [flag,setflag] =useState(false)
  const [socket, setSocket] = useState(null);
  //const [data,setdata] = useState({writer:'',sender : '' , text : ''})
  console.log(perUserDetail)
  console.log(user)
  useEffect(() => {
    // Initialize socket once
    const socket = io('http://localhost:7000', {
      withCredentials: true,
      autoConnect: false,  // Disable auto connect to control it manually
    });
    setSocketInstance(socket); // Save the socket instance in state

    return () => {
      if (socket) {
        socket.disconnect();  // Clean up socket when the component unmounts
      }
    };
  }, []);

  useEffect(() => {
    if (socketInstance) {
      if (!socketInstance.connected) {
        socketInstance.connect(); // Manually connect if not already connected
      }
      socketInstance.emit('register', user.email);

      socketInstance.on('message', (data) => {
        setUserMessage((prevMessages) => [...prevMessages, data]);
      });

      return () => {
        socketInstance.off('message');
      };
    }
  }, [user.email, socketInstance]);
  useEffect(()=>{
    // socket.on('newMessage', (newMessage) => {
    //   console.log('Received newMessage:', newMessage);
    //   setusermessage((prevMessages) => [...prevMessages, newMessage]);
    // });
          const fetchMessage = async()=>{ 
            const data = {sender:user.email , writer : perUserDetail.email}
                 const messages = await fetchmessage(data)
                 console.log("th messages",messages)
                 if(messages.status == 200){
                  console.log("user Messages Done")
                       setusermessage(messages.data)
                       seterror('')
                 }else if(messages.status ==404){
                     seterror("No Message Yet , SAY HI @#")
                 }
          }
         
        
        // socket.emit('sendMessage',)
        // socket.emit('sendMessage', { sender: user.email, writer: perUserDetail.email });
          fetchMessage()
        
          // return () => {
          //   socket.disconnect();
          // };
       
  },[user.email,perUserDetail.email,flag])

  // useEffect(() => {
  //   // Replace with your server URL
  
  //   // socket.on('connect', () => {
  //   //   console.log('Connected to server');
  //   // });
  
   
     
  //     // setusermessage((preMessages) => {
  //     //   console.log('Previous messages:', preMessages);
  //     //   // Assuming newMessage is an object with a 'data' property
  //     //   return [...preMessages, newMessage.data];
  //     // });
 
  
  //   // Clean up the effect by disconnecting the socket when the component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [user]);
  
 
  const handleChange = (e)=>{
          setmessage(e.target.value)
         
  }
  const handleSubmit = async ()=>{
    const data = {text:message ,writer : perUserDetail.email,sender : user.email}
    console.log("e,aim",data)
    
      socket.emit("message", data);
    
  //  const res = await contactGroup(data);
  //   setflag(!flag)
  //   console.log("the messages are",res)
  //    if(res.status ==500){
  //       seterror(res.data.msg)
  //     }else if(res.status != 200){
  //       seterror(res.message)
  //     }
  }
  return (
    <div className=' w-full  md:p-6 p-4 '> 
    <div className='bg-slate-400 rounded-md flex flex-col justify-between gap-2 p-1 overflow-auto max-h-60'
    style={{boxShadow :' 7px 7px 5px rgba(0, 0, 0, 0.5)'}}
    >
     <p className='font-extrabold text-violet-700'>{error}</p>
       {usermessage.map((item,i)=>
     <div key={i} className={` mx-3 ${item.sender == user.email ? 'flex flex-col  items-end' : "flex flex-col items-start"} `}>
     <div className='border-2 p-1 rounded-lg max-w-[50%]'>
     <h1 className='font-semibold break-words '>{item.content} + " jgbvkfjvnkfnvkfnvkfnvkfnvvknfdnvfnv rfv r "</h1>
     <p className='text-xxs'>{item.timestamp}</p>

         {/* messages */}
         </div>
      </div>
)}
        
       
         </div>
         <div className=' mx-4 my-3'>
            <div className='flex bg-stone-700 w-full items-center justify-center max-auto p-2 gap-3 rounded-lg'>
                <input type="text" className='w-full bg-transparent outline-none p-1' placeholder='Enter The Message' value = {message} onChange={(e)=>handleChange(e)}/>
                <button type='submit' onClick={handleSubmit}>helo</button>
            </div>
            {/* type */}
         </div>
    </div>
  )
}

export default WriterDContact
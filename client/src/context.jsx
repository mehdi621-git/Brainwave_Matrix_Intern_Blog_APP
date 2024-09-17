import { createContext, useState } from "react";

export const Context = createContext()

const ContextFun =({children})=>{

    const [eye,seteye] = useState(false)
    const [account,setaccount] =useState('')
    const [user,setuser]=useState({
      id:"",
      name:'',
      email : '',
      writerPic:'',
    })
    const [selectCa,setselectCa] =useState('Music')
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [writersChunk,setwritersChunk] =useState({})
   
    const [perUserDetail,setperUserDetail] =useState('')
    const [writerBlogs,setwriterBlogs] =useState([])
    return <>
      <Context.Provider value={{writerBlogs,setwriterBlogs,perUserDetail,setperUserDetail,eye,seteye,account,setaccount,user,setuser,isAuthenticated,setIsAuthenticated,selectCa,setselectCa,writersChunk,setwritersChunk}}>
        {children}
      </Context.Provider>
    </>
}
export default ContextFun
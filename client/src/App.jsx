import { Navigate, Outlet, Route, Routes } from "react-router-dom"
// import Writing from "./components/Writing"
// import Category from "./components/Category"
// import BlogDetail from "./components/BlogDetail"
// import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Layout from "./components/layout"
import { useContext, useEffect, useState } from "react"
import { Context } from "./context"
import WritingArea from "./write/writingarea"
import PerBlog from "./components/PerBlog"
import WriterDetail from "./components/writerDetail"
import WriterDHome from "./components/WriterDHome"
import WriterDBlog from "./components/WriterDBlog"
import Notfound from "./generalcomponents/Notfound"
import WriterDAbout from "./components/WriterDAbout"
import WriterDContact from "./components/WriterDContact"
import Setting from "./components/Setting"
import SettingBasic from "./generalcomponents/settingBasic"
import SettingEdu from "./generalcomponents/SettingEdu"
import Settingabout from "./generalcomponents/settingabout"
import SettingSkill from "./generalcomponents/settingSkill"

const PrivateRoute =({isAuthenticated})=>{

  return isAuthenticated ? <>
    <Layout></Layout>
  </> : <Navigate replace to= '/login' />
  }

  function InternetCheckRoute({ children }) {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
  
    useEffect(() => {
      const handleOnline = () => {setIsOnline(true)
        console.log('online')
      };
      const handleOffline = () => {setIsOnline(false)
        console.log('off')
      };
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
  
    return (
   <>
        {isOnline ? <Outlet></Outlet> : <div className="h-screen flex justify-center items-center "><p className="dark:text-white">You are offline. Please check your internet connection.</p></div> }
     </>
    );
  }
const App =()=> {

 const {isAuthenticated} =useContext(Context)
  
  const theme = "dark"
  return (
    <>
      <main className={theme}>
      
        <div className="w-full min-h-screen relative dark:bg-[#212020]">
          <Routes>
          <Route path="*" element={<Notfound/>}></Route>
            {/* <Route element={<InternetCheckRoute></InternetCheckRoute>}> */}
           
          
            <Route path = '/write' element = {<WritingArea></WritingArea>}></Route>
            <Route path = '/blog' element ={<PerBlog></PerBlog>}></Route>
            <Route path="/writerDetail/:id" element = {<WriterDetail/>}>
                  <Route index   element = {<WriterDHome></WriterDHome>}></Route>
                  <Route path="Home"  element = {<WriterDHome></WriterDHome>}></Route>

                  <Route path="blogs" element = {<WriterDBlog></WriterDBlog>}></Route>
                  <Route path = 'About' element = {<WriterDAbout></WriterDAbout>}></Route>
                  <Route path="Contact" element = {<WriterDContact></WriterDContact>}></Route>
            </Route>
            

            {/* <Route path ='/category' element ={<Category/>}></Route> */}
            {/* <Route path ='/:slug/:id?' element ={<BlogDetail></BlogDetail>}></Route> */}
            {/* <Route path ='/writer/:id' element ={<Writing></Writing>}></Route> */}
            <Route path ='/signup' element ={<Signup></Signup>}></Route>
            <Route path ='/login' element ={<Login ></Login>}></Route>  
 <Route path = '/' element = {<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            {/* Add elements which to want to render only when user is loged in */}
            <Route path ='/home' index element ={<Home></Home>}></Route>
            <Route path = '/setting' element ={<Setting></Setting>}>
                <Route index element ={<SettingBasic></SettingBasic>}></Route>
                <Route path = 'Basic' element ={<SettingBasic></SettingBasic>}></Route>
                <Route path ='Education' element ={<SettingEdu></SettingEdu>}></Route>
                <Route path="About" element={<Settingabout></Settingabout>}></Route>
                <Route path="Skills" element={<SettingSkill></SettingSkill>}></Route>

            </Route>

            </Route>
{/* </Route> */}
            {/* // <Route path ='/' element ={}></Route>
            // <Route path ='/' element ={}></Route> */}

          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
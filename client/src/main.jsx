import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextFun from './context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientid = import.meta.env.VITE_CLIENT_ID
ReactDOM.createRoot(document.getElementById('root')).render(
  

    <BrowserRouter>
    <ContextFun>
      <GoogleOAuthProvider clientId={clientid}>
      <App />
      </GoogleOAuthProvider>
   
    </ContextFun>
  
    </BrowserRouter>
  

)

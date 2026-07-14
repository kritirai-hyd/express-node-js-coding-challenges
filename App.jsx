import { useState } from 'react'

import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/Profile';
function App() {
const appRouter = createBrowserRouter([
  {
    path: "/",  
    element: <Home />
  },
    {
    path: "/login",  
    element: <Login />
  },
    {
    path: "/signup",  
    element: <Signup />},
    ,
    {
    path: "/profile",  
    element: <Profile />
    
    }

])

  return (
    <>
   <RouterProvider router={appRouter} />

    </>
  )
}

export default App

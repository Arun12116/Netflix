import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const appRouter = createBrowserRouter([{
    path: "/",
    element: <Login/>
},
{
    path: "/Browse",
    element: <Browse />

}


])
const Body = () => {
    return (
       <>
      <RouterProvider router={appRouter} />
      
    
       </>
    )
}

export default Body
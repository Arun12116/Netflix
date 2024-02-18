import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/Firebase';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/UserSlice';


const appRouter = createBrowserRouter([{
    path: "/",
    element: <Login />
},
{
    path: "/Browse",
    element: <Browse />

}


])




const Body = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, uid, email, photoURL } = user
                dispatch(addUser({
                    displayName: displayName,
                    uid: uid,
                    email: email,
                    photoURL: photoURL

                }))

            } else {
                dispatch(removeUser())
            }
        });


    }, [dispatch])



    return (
        <>
            <RouterProvider router={appRouter} />


        </>
    )
}

export default Body
import React from 'react'
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from './utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <>
      <div className='absolute px-5 py-6 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
        <img className='w-35 h-10  text-8xl' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo" />

        {

          user ? (<div className='flex p-1 m-1 gap-5 ' >
            <div>
              <img className='w-10 rounded-xl' src={user?.photoURL} alt="logo" srcset="" />
            </div>

            <div>
              <h1 className='w-1 text-sm text-white '>{user?.displayName}</h1>
            </div>


            <div className='ml-4 hover:'>
              <AiOutlineLogout onClick={handleSignOut} fontSize={"2rem"} color='red' cursor="pointer" />

            </div>

          </div>
          ):null

}




      </div>




    </>
  )
}

export default Header
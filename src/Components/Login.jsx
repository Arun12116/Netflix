import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <>
            <div >
                <div>
                    <Header />

                </div>

                <div className='absolute  bg-black'  >
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bagroundimage" />

                </div>


                <div className='absolute w-[32vw] h-[70vh] p-12 m-36 mx-auto left-0 right-0 bg-black top-0  text-white opacity-90 rounded-sm'>
                    <form action=" ">
                        <h1 className='font-bold text-3xl py-4 m-1'>Sign In</h1>
                        <input type="text" placeholder='Enter Email' className=' p-2 my-2 w-full bg-gray-800 font-bold rounded-sm'  />
                        <br />
                        <input type="password" placeholder='Enter password ' className='-  p-2 my-2 w-full bg-gray-800 font-bold rounded-sm' />
                        <br />
                        <button className='p-4  my-4 bg-red-700 w-full text-center rounded-sm'>Sign In</button>
                        <h1>New to NetFlix? Sign Up Now</h1>

                    </form>
                </div>



            </div>




        </>
    )
}

export default Login

import React, { useRef, useState } from 'react';
import Header from './Header';
import { PasswordValidation } from './utils/PasswordValidation';
import { auth } from './utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser } from './utils/UserSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [isLoginForm, setLoginForm] = useState(true);
    const [error, setError] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleSignInForm = () => {
        setLoginForm(!isLoginForm);
    };

    const handleButton = () => {
        const message = PasswordValidation(
            emailRef.current.value,
            passwordRef.current.value,
            // nameRef.current ? nameRef.current.value : null
        );

        setError(message);

        // console.log("message",message);
        if (message) return;

        if (!isLoginForm) {
            // Sign-Up
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: nameRef.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/77447025?v=4"
                    }).then(() => {
                        // Profile updated!
                        const { displayName, uid, email, photoURL } = auth.currentUser
                        dispatch(addUser({
                            displayName: displayName,
                            uid: uid,
                            email: email,
                            photoURL: photoURL

                        }))

                        navigate("/Browse")
                    }).catch((error) => {
                        setError(error)
                    });



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(`${errorCode} - ${errorMessage}`);
                });
        } else {
            // Sign In - Uncomment the code when you implement sign-in functionality
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/Browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(`${errorCode} - ${errorMessage}`);
                });
        }
    };

    return (
        <>
            <div>
                <div>
                    <Header />
                </div>

                <div className="absolute bg-black">
                    <img
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                        alt="background "
                    />
                </div>

                <div className="absolute w-2/6  p-12 m-36 mx-auto left-0 right-0 bg-black top-0 text-white opacity-90 rounded-sm">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1 className="font-bold text-3xl py-4 m-1">
                            {isLoginForm ? 'Sign In ' : 'Sign Up'}
                        </h1>
                        {!isLoginForm && (
                            <input
                                type="text"
                                ref={nameRef}
                                placeholder="Enter Your Name"
                                className="p-2 my-2 w-full bg-gray-800 font-bold rounded-sm"
                            />
                        )}
                        <input
                            type="email"
                            ref={emailRef}
                            placeholder="Enter Email"
                            className="p-2 my-2 w-full bg-gray-800 font-bold rounded-sm"
                        />
                        <br />
                        <input
                            type="password"
                            ref={passwordRef}
                            placeholder="Enter password"
                            className="p-2 my-2 w-full bg-gray-800 font-bold rounded-sm"
                        />
                        <br />
                        <p className="text-red-600 w-full font-bold">{error}</p>
                        <button
                            className="p-4 my-4 cursor-pointer bg-red-700 w-full text-center rounded-sm"
                            onClick={handleButton}
                        >
                            {isLoginForm ? 'Sign In' : 'Sign Up'}
                        </button>
                        <h1 onClick={toggleSignInForm} className='cursor-pointer'>
                            {isLoginForm
                                ? 'New to NetFlix? Sign Up Now '
                                : 'Already Signed Up? Sign In          '}
                        </h1>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

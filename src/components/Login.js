import React, {useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {checkValidData} from "../utils/validateForm";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import {addUser} from "../utils/redux/userSlice";
import {useDispatch} from "react-redux";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        if (!isSignInForm) {  //sign up
            const msg = checkValidData(email.current.value, password.current.value, name.current.value);
            if (msg) {
                toast.error(msg);
                return;
            }
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://img.freepik.com/premium-photo/3d-style-avatar-profile-picture-featuring-male-character-generative-ai_739548-13626.jpg",
                    })
                        .then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                            toast.success("Successfully registred account")
                            setTimeout(() => navigate("/browse"), 2000);
                        })
                        .catch((error) => {
                            toast.error(error.message)
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorCode + "-" + errorMessage);
                });

        } else { //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    const {uid, email, displayName} = user;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName, isLoggedIn: true}));
                    toast.success("welcome back " + user.email)
                    setTimeout(() => {
                        navigate("/browse");
                    }, 1000);  // 500 milliseconds delay
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage);
                });
        }

    }

    return (
        <div>
            <ToastContainer/>
            <div className="flex h-screen w-screen justify-center items-center bg-gray-200">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                    <h2 className="text-lg font-semibold mb-4">{isSignInForm ? "Hiii, please login to your Account" : "Welcome to registration"}</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                        {!isSignInForm && (<div>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    ref={name}
                                    type="text"
                                    placeholder="Full name"
                                    className="mx-5"
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                ref={email}
                                type="email"
                                placeholder="Email"
                                className="mx-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                ref={password}
                                type="password"
                                placeholder="Password"
                                className="mx-5"
                            />
                        </div>
                        <button type="submit"
                                onClick={handleButtonClick}
                                className="bg-blue-500 text-white p-2 rounded font-medium uppercase cursor-pointer">{isSignInForm ? "SIGN IN" : "CONFIRM"}
                        </button>
                        {isSignInForm ? (
                            <div>
                                <h2> Don't have an account ? <span className="underline cursor-pointer "
                                                                   onClick={handleSignInForm}>  Register now  </span>
                                </h2>
                            </div>
                        ) : <div>
                                  <span className="underline cursor-pointer "
                                        onClick={handleSignInForm}>  Already registred sign in  now  </span>
                        </div>}
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
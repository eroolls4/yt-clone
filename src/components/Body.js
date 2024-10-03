import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Login from "./Login";
import Head from "./Head";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {addUser, removeUser} from "../utils/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffecttt before authchnged is called")
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email, displayName,photoURL} = user;

                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}));
                toast.success("welcome back " + user.email)
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                // dispatch(removeUser())
                // navigate("/")
            }
        });
    }, []);

    return (

        <div>
            <div>
                <ToastContainer/>
            </div>
            <div>
                <Head/>
                <div className="flex">
                    <Sidebar/>
                    <MainContainer/>
                </div>
            </div>
        </div>
    );
}

export default Body;
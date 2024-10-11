import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import Login from "./Login";
import Head from "./Head";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import {addUser, removeUser} from "../utils/redux/userSlice";
import {useDispatch} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Body = () => {
    return (
        <div>
            <div>
                <ToastContainer/>
            </div>
            <div>
                <Head/>
                <div className="flex">
                    <Sidebar/>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Body;
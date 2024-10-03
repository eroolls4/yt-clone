 import React from "react";
 import {useDispatch, useSelector} from "react-redux";
 import {toggleMenu} from "../utils/appSlice";
 import {useNavigate} from "react-router-dom";

 import {  signOut } from "firebase/auth";
 import {auth} from "../utils/firebase";

const Head = () => {

   const distpatch=useDispatch();
   const navigate = useNavigate();

   const isUserLoggedIn=auth.currentUser;
    console.log(isUserLoggedIn)

    const toggleMenuHandler=  () => {
          distpatch(toggleMenu());
    }

    const handleSignIn = () =>{
       navigate("/")
    }

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()}
                     alt="menu"
                     className="h-8 cursor-pointer"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                />
                <img alt="yt-logo"
                     className="h-10 mx-4"
                     src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                />
            </div>

            <div className="col-span-10">
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"
                       type="text" />
                <button className="border border-gray-400 px-5 py-2 rounded-r-full">Search</button>
            </div>

            <div className="col-span-1">
                {/*<img alt="user"*/}
                {/*     className="h-8"*/}
                {/*     src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"*/}
                {/*/>*/}
                {isUserLoggedIn ? <div className="flex">
                        <img alt="user"
                             className="h-10 rounded-full"
                             src={isUserLoggedIn.photoURL}
                        />
                        <p className="px-4 cursor-pointer" onClick={handleSignOut}>Sign out</p>
                </div>
                :
                    <p className="cursor-pointer" onClick={handleSignIn}>Sign in</p>}
            </div>
        </div>
    );
}

 export default Head;
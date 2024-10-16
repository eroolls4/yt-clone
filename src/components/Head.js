import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../utils/redux/appSlice";
import {useNavigate} from "react-router-dom";

import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {cacheResults} from "../utils/redux/searchSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    const distpatch = useDispatch();
    const navigate = useNavigate();

    const isUserLoggedIn = auth.currentUser;

    const searchCache = useSelector((store) => store.search )

    useEffect(() => {

        /**
         *  DEBOUNCING
         *         make an api call after user key press
         *         BUTTT  if the diff between two APIs is <200ms just ignore it
         *
         */

        /**
         * { searchCache
         *     "iphone" : ["iphone 11","iphone 12","iphone 13" ...]
         * }
         *
         */

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);


    const getSearchSuggestions = async () => {
        const API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + searchQuery;
        const data = await fetch(API);
        const json = await data.json();

        setSuggestion(json[1]);
        distpatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }
    const toggleMenuHandler = () => {
        distpatch(toggleMenu());
    }

    const handleRoute = () => {
        navigate("/browse")
    }

    const handleSignIn = () => {
        navigate("/login")
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg items-center">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()}
                     alt="menu"
                     className="h-8 cursor-pointer"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
                />
                <img alt="yt-logo"
                     className="h-10 mx-4 cursor-pointer"
                     onClick={handleRoute}
                     src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                />
            </div>

            <div className="col-span-10">
                <div>
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                           onFocus={() => setShowSuggestions(true)}
                           onBlur={() => setShowSuggestions(false)}
                           type="text"/>
                    <button className="border border-gray-400 px-5 py-2 rounded-r-full">Search</button>
                </div>
                {showSuggestions && (<div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
                        <ul>
                            {suggestion.map((suggestion) => <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={suggestion.name}>{suggestion}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            <div className="col-span-1">
                {isUserLoggedIn ? <div className="flex items-center">
                        <img alt="user"
                             className="h-10 rounded-full"
                             src={isUserLoggedIn.photoURL}
                        />
                        <button className="bg-blue-300 m-2 p-2 rounded-full" onClick={handleSignOut}>Sign out</button>
                    </div>
                    :
                    <button  className="bg-blue-300 m-2 p-2 rounded-full" onClick={handleSignIn}>Sign in</button>}
            </div>
        </div>
    );
}

export default Head;
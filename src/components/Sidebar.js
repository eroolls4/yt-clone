import React from 'react';
import {useSelector} from "react-redux";
import store from "../utils/store";

const Sidebar = () => {
    //subscribe here from store

    const isMenuOpen=useSelector(store => store.app.isMenuOpen)

    if(!isMenuOpen) return null;

    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li> Home</li>
                <li> Shorts</li>
                <li> Videos</li>
                <li> Live</li>

            </ul>

            <h2 className=" pt-5 font-bold">Subscriptions</h2>
            <ul>
                <li> Music</li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>

            </ul>

            <h2 className="pt-5 font-bold">Watch later</h2>
            <ul>
                <li> Music</li>
                <li> Sports</li>
                <li> Gaming</li>
                <li> Movies</li>

            </ul>

        </div>
    );
}

export default Sidebar;
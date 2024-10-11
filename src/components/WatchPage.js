import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/redux/appSlice";
import {useSearchParams} from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] =useSearchParams();

    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full">
                <div>
                    <iframe width="1000"
                            height="500"
                            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className="w-full">
                    <LiveChat />
                </div>
            </div>
            <div>
             <CommentContainer />
            </div>
        </div>
    );
}

export default WatchPage;
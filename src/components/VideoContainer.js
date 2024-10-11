import React, {useEffect, useState} from 'react';
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();

        window.addEventListener("scroll" ,handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)

    }, []);


    const handleScroll = () => {
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            fetchVideos();
        }
    }

    const fetchVideos = async () => {
        const YT_API=process.env.REACT_APP_YT_KEY;
        const data = await fetch(YT_API)
        const json = await data.json()

        setVideos((v) =>  [...v,...json.items])
    }

    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link key={video.id.videoId + crypto.randomUUID() }  to={"/browse/watch?v=" + video.id.videoId }>
                    <VideoCard  info={video} />
                </Link>

            ))};
        </div>
    );
}

export default VideoContainer;
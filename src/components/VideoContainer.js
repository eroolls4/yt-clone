import React, {useEffect, useState} from 'react';
import VideoCard from "./VideoCard";
import {Link} from "react-router-dom";

const VideoContainer = () => {
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {

        // console.log(process.env.YOUTUBE_API_KEY)

        const data = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=surfing&type=video&maxResults=50&key=AIzaSyB6UR7Bd12IJxM7ntXhbkTpAsR5331JNYw')
        const json = await data.json()

        // console.log(json)
        setVideos(json.items)
    }


    return (
        <div className="flex flex-wrap">


            {videos.map((video) => (
                <Link to={"/browse/watch?v=" + video.id.videoId }>
                    <VideoCard key={video.id.videoId} info={video} />
                </Link>

            ))};


        </div>
    );
}

export default VideoContainer;
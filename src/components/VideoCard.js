import React from 'react';

const VideoCard = ({info}) => {
    const { snippet} = info;
    const {publishedAt ,title ,channelTitle, thumbnails } = snippet;

    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img src={thumbnails.medium.url} />
            <ul>
                <li>Date published : {publishedAt}</li>
                <li>Video title : {title}</li>
                <li>Channel title :{channelTitle}</li>
            </ul>
        </div>
    );
}
export default VideoCard;
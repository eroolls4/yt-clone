import React from 'react';

const ChatMessage = ( { name,message}) => {
    return (
        <div className="flex items-center shadow-sm p-2">
            <div className="h-9 w-9 rounded-full">
                <img
                    src="https://thumbs.dreamstime.com/b/dubai-smiling-young-teacher-user-person-face-icon-circle-arab-avatar-happy-islam-worker-d-arab-man-avatar-vector-emirate-male-273258856.jpg"/>
            </div>
            <div className="pl-2">
                <span className="font-bold">{name}</span>
                <span className="pl-1">{message}</span>
            </div>
        </div>
    );
}

export default ChatMessage;
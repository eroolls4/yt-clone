import React, {useEffect, useState} from 'react';
import ChatMessage from "./ChatMessage";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import {generateRandomName, makeRandomMessage} from "../utils/helper";
import {auth} from "../utils/firebase";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const isUserLoggedIn = auth.currentUser;

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            //API polling
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + " 🚀",
            }))

        }, 2000);


        return () => clearInterval(i);
    }, []);

    return (
        <>
            <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded overflow-y-scroll">
                <div>
                    {
                        chatMessages.map((cm, i) => (
                            <ChatMessage key={i} name={cm.name} message={cm.message}/>
                        ))
                    }

                </div>
            </div>

            {isUserLoggedIn && (<form className="w-full p-2 ml-2 border border-black"
                                      onSubmit={(e) => {
                                          e.preventDefault()
                                          dispatch(addMessage({
                                              name: isUserLoggedIn.displayName,
                                              message: liveMessage,
                                          }))
                                          setLiveMessage("")
                                      }}
                >
                    <input className="px-2 w-96"
                           type="text"
                           placeholder="Add a message here"
                           value={liveMessage}
                           onChange={(e) => setLiveMessage(e.target.value)}
                    />
                    <button className="px-2 mx-2 bg-green-100">Send</button>
                </form>
            )}
        </>
    );
}

export default LiveChat;
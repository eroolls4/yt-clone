import React from 'react';

const commentsDummyData = [
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Just testing",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Just testing",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Just testing",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Just testing",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Just testing",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Just testing",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Just testing",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Just testing",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

const Comment = ({data}) => {
    const {name, text, replies} = data;

    return (
        <div className=" flex border-2 shadow-sm p-2 mb-1">
            <div>
                <img className="h-12 w-12"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm8aIS6GEFUY2LNsXHyd2c435FciiYgJKC4Q&s"/>
            </div>

            <div className="px-2 ">
                <ul>
                    <li>{name}</li>
                    <li>{text}</li>
                </ul>
            </div>

        </div>
    );
}

const CommentList = ({listOfComments}) => {
    return listOfComments.map( (comment,index) =>
        <div key={index}>
            <Comment data={comment} />
            <div className="ml-4 bg-amber-400">
                 <CommentList listOfComments={comment.replies} />
            </div>
        </div>
    )
}

const CommentContainer = () => {
    return (
        <div className="m-5 p-2">
            <h2 className="font-bold text-2xl"> Comments : </h2>
            <CommentList listOfComments={commentsDummyData}/>
        </div>
    );
}

export default CommentContainer;
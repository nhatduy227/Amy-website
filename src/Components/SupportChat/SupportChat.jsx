import React, { useContext, useState } from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { ChatEngineWrapper, Socket, ChatFeed } from 'react-chat-engine'
import axios from 'axios'
import { UserContext } from '../../App';

export default function SupportChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatSession, SetChatSession] = useState({})
    const user = useContext(UserContext)

    function getOrCreateUser(user) {
        axios.put(
            'https://api.chatengine.io/users/',
            { username: user.displayName, email: user.email, secret: user.email },
            { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
        )
            .then(r => console.log(r.data))
            .catch(e => console.log('Get or create user error', e))
    }

    function createChat(user) {
        axios.post(
            'https://api.chatengine.io/chats/',
            {
                usernames: [user.displayName, 'Adam La Morre'],
                is_direct_chat: true,
                title: "New Chat"
            },
            {
                headers: {
                    "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
                    "User-Name": user.displayName,
                    "User-Secret": user.email,
                }
            }
        )
            .then(r => SetChatSession(r.data))
            // .then(r => console.log(r.data))
            .catch(e => console.log('Get or create chat error', e))
    }

    function handleSubmit(user) {
        getOrCreateUser(user)
        createChat(user)
    }
    console.log(chatSession)
    const handleToggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (
        <div className="fixed bottom-4 right-4">
            {isChatOpen ? (
                <div className={`flex flex-col bg-white h-96 p-4 rounded-lg shadow-md ${isChatOpen ? '' : 'hidden'}`}>
                    <div className="flex justify-between mb-4">
                        <h3 className="font-bold">Customer Support Chat</h3>
                        <button
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleToggleChat}
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M6.707 6.707a1 1 0 0 1 1.414 0L10 8.586l1.879-1.879a1 1 0 1 1 1.414 1.414L11.414 10l1.879 1.879a1 1 0 0 1-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 0 1-1.414-1.414L8.586 10l-1.879-1.879a1 1 0 0 1 0-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <ChatEngineWrapper>
                        <Socket
                            projectID={process.env.REACT_APP_CE_PROJECT_ID}
                            userName={user.displayName}
                            userSecret={user.email}
                        />
                        {/* {chatSession.id && <ChatFeed activeChat={chatSession.id} />} */}
                        <ChatFeed activeChat={chatSession.id} />
                    </ChatEngineWrapper>
                </div>
            ) : (
                <button
                    onClick={() => {
                        handleToggleChat();
                        handleSubmit(user)
                    }}
                    type="button" class="fixed bottom-4 right-4 select-none bg-primary-default border-2 text-white text-xl font-bold p-2 m-2 rounded-full shadow h-20 w-20 focus:outline-none focus:shadow-outline">
                    <ChatBubbleOutlineOutlinedIcon />
                </button>
            )}
        </div>
    );
};

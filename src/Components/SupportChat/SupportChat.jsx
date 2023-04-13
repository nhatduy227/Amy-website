import React, { useContext, useState } from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { UserContext } from '../../App';

export default function SupportChat() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const user = useContext(UserContext)

    function handleSubmit(user) {
        console.log(user)
    }

    const handleToggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    if (user.role === "admin")
        return null
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
                </div>
            ) : <button
                onClick={() => {
                    handleToggleChat();
                    handleSubmit(user)
                }}
                type="button" class="fixed bottom-4 right-4 select-none bg-primary-default border-2 text-white text-xl font-bold p-2 m-2 rounded-full shadow h-20 w-20 focus:outline-none focus:shadow-outline">
                <ChatBubbleOutlineOutlinedIcon />
            </button>
            }

        </div>
    );
};

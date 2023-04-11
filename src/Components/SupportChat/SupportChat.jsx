import React, { useState } from 'react';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function SupportChat() {

    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(true);

    const handleInputTextChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputText !== '') {
            setMessages([...messages, { sender: 'User', message: inputText }]);
            setInputText('');
        }
    };

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
                    <div className="flex-1 overflow-auto">
                        {messages.map((msg, index) => (
                            <div key={index} className="mb-2">
                                <span className="font-bold">{msg.sender}: </span>
                                <span>{msg.message}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex mt-4">
                        <input
                            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2"
                            type="text"
                            placeholder="Type your message..."
                            value={inputText}
                            onChange={handleInputTextChange}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                    {/* End of chat input */}
                </div>
            ) : (
                <button
                    onClick={handleToggleChat}
                    type="button" class="fixed bottom-4 right-4 select-none bg-primary-default border-2 text-white text-xl font-bold p-2 m-2 rounded-full shadow h-20 w-20 focus:outline-none focus:shadow-outline">
                    <ChatBubbleOutlineOutlinedIcon />
                </button>
            )}
        </div>
    );
};

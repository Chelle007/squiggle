import { ChevronLeft, Video, Phone, Plus, Camera, Mic } from 'lucide-react';
import ChatBubble from '../components/ChatBubble.jsx';
import ProfilePicture from '../assets/user3.jpg';
import ChatBackground from '../assets/backdrop.jpg';
import { useNavigate } from 'react-router-dom';


const chat_histories = [[
    {
        "timestamp": "10/04/2025, 11:33 AM",
        "message": "Welcome to the group chat! 🎉",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33 AM",
        "message": "Rachel's birthday is coming up soon, right? lets split the cost.",
        "sender": "friend"
    }
]];

export default function PrivateChat() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };


    const messages = chat_histories[0];

    return (
        <div className="relative h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${ChatBackground})` }}>
            {/* Top bar */}
            <div className="flex items-end fixed top-0 left-0 right-0 h-32 p-4 bg-white/30 backdrop-blur-md z-10">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <button onClick={handleBack} className="text-[var(--color-c-black-2)]">
                            <ChevronLeft size="24" />
                        </button>
                        <img
                            src="https://cdn11.bigcommerce.com/s-23s5gfmhr7/images/stencil/1280x1280/products/1692/49226/BASHFUL_BLOSSOMS_BLUSH_CHERRY__56734.1734429598.jpg?c=1"
                            alt="Profile"
                            className="w-18 h-12 object-cover rounded-[8px]"
                        />
                        <div>
                            <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">Jellycat Bunny 'Cherry'</h3>
                            <p className="text-[var(--color-c-black-2)] text-[var(--text-c-p4)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">You, Timmy Thyme</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Video size="24" />
                        <Phone size="24" />
                    </div>
                </div>
            </div>

            {/* Chat section */}
            <div className="flex-1 overflow-y-auto px-4 pt-36 pb-24 space-y-4">
                {messages.length === 0 ? (
                    <p className="text-center text-gray-500">No messages</p>
                ) : (
                    messages.map((msg, index) => (
                        <ChatBubble
                            key={index}
                            message={msg.message}
                            isSender={msg.sender === 'self'}
                            profile={{
                                name: msg.sender === 'self' ? 'You' : 'Timmy Thyme',
                                image: msg.sender === 'self' ? null : ProfilePicture,
                                timestamp: msg.timestamp
                            }}
                        />
                    ))
                )}
            </div>

            {/* Chat input bar */}
            <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/30 backdrop-blur-md flex items-center justify-center gap-4 px-4 z-10">

                <Plus />
                <div className="h-10 w-80 bg-[var(--color-c-white-1)] rounded-full px-4 flex items-center">
                    <span className="text-[var(--color-c-black-2)]">Enter a message</span>
                </div>
                <Camera />
                <Mic />
            </div>
        </div>
    );
}

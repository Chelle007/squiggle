import { ChevronLeft, Video, Phone, Plus, Camera, Mic } from 'lucide-react';
import ChatBubble from '../components/ChatBubble.jsx';
import ProfilePicture from '../assets/user7.jpg';
import ChatBackground from '../assets/backdrop.jpg';

const chat_histories = [[
    {
        "timestamp": "10/04/2025, 11:33:21 AM",
        "message": "Hii I am going to travel to Bali next week, do you have any ideas regarding things that I should bring?",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:22 AM",
        "message": "Sunscreen, sunglasses, hat, powerbank, swimwear, raincoat",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:23 AM",
        "message": "Hmm noted, I don't have sunglasses and hat, maybe I will search for it at Bali.",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:24 AM",
        "message": "Don't forget to bring beach towel too.",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:25 AM",
        "message": "Ohhh yeah beach towel! Will buy it later too once I reach Bali.",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:26 AM",
        "message": "What pattern do you like?",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:27 AM",
        "message": "Huh pattern? I like flower patterns.",
        "sender": "friend"
    }
]];

export default function PrivateChat() {
    const messages = chat_histories[0];

    return (
        <div className="relative h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${ChatBackground})` }}>
            {/* Top bar */}
            <div className="fixed top-0 left-0 right-0 h-32 p-4 bg-white/30 backdrop-blur-md z-10">
                <div className="flex items-center justify-between w-full h-full">
                    <div className="flex items-center gap-4">
                        <ChevronLeft size="24" />
                        <img
                            src={ProfilePicture}
                            alt="Profile"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                        <div>
                            <h3 className="font-bold">Rachel</h3>
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
                                name: msg.sender === 'self' ? 'You' : 'Rachel',
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

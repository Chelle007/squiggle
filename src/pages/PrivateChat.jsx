import { ChevronLeft, Video, Phone, Plus, Camera, Mic } from 'lucide-react';
import ChatBubble from '../components/ChatBubble.jsx';
import ProfilePicture from '../assets/user3.jpg';

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
    const messages = chat_histories[0]; // Assuming you only have one chat history for now

    return (
        <div className="flex flex-col h-screen">
            {/* Top bar */}
            <div className="flex items-end h-32 p-4 bg-[var(--color-c-black-3)]">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <ChevronLeft size="24" />
                        <img
                            src={ProfilePicture}
                            alt="Profile Picture"
                            className="w-12 h-12 object-cover rounded-full"
                        />
                        <h3 className="font-bold">Timmy Thyme</h3>
                    </div>
                    <div className="flex items-center gap-4">
                        <Video size="24" />
                        <Phone size="24" />
                    </div>
                </div>
            </div>

            {/* Chat section */}
            <div className="flex flex-col gap-4 p-4 overflow-y-auto flex-grow">
                {messages.map((msg, index) => (
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
                ))}
            </div>

            {/* Chat input bar */}
            <div className="h-20 bg-[var(--color-c-black-3)] flex items-center justify-center gap-4 px-4">
                <Plus />
                <div className="h-8 w-80 bg-[var(--color-c-white-1)] rounded-full px-4 place-content-center">
                    <span className="text-[var(--color-c-black-2)]">Enter a message</span>
                </div>
                <Camera />
                <Mic />
            </div>
        </div>
    );
}

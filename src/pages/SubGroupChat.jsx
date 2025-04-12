import { ChevronLeft, Video, Phone, Plus, Camera, Mic } from 'lucide-react';
import ChatBubble from '../components/ChatBubble.jsx';
import ProfilePicture from '../assets/user3.jpg';
import ProductPicture from '../assets/products/sunglasses.jpg';
import ChatBackground from '../assets/backdrop.jpg';

const chat_histories = [[
    {
        "timestamp": "10/04/2025, 11:33:21 AM",
        "message": "Yo I found these Rachel Ray-Bans on Amazon, they cost 45 bucks.",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:26 AM",
        "message": "Ohh not bad, but is it the one from her wishlist?",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:31 AM",
        "message": "Wait lemme check... hmm nah different frame, hers got that gold accent right?",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:35 AM",
        "message": "Yesss exactly. I think I saw the right one on Zalora before.",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:39 AM",
        "message": "Zalora huh lemme see... ohhh found it! 52 bucks but it’s the exact one from her wishlist.",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:42 AM",
        "message": "Yeah let’s go with that one then. It looks way better too.",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:45 AM",
        "message": "We splitting it 50-50?",
        "sender": "self"
    },
    {
        "timestamp": "10/04/2025, 11:33:49 AM",
        "message": "Of course! She’s gonna love it 🥹",
        "sender": "friend"
    },
    {
        "timestamp": "10/04/2025, 11:33:52 AM",
        "message": "Alright cool, I’ll place the order now 😎",
        "sender": "self"
    }
]];

export default function PrivateChat() {
    const messages = chat_histories[0];

    return (
        <div className="relative h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${ChatBackground})` }}>
            {/* Top bar */}
            <div className="flex items-end fixed top-0 left-0 right-0 h-32 p-4 bg-white/30 backdrop-blur-md z-10">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                        <ChevronLeft size="24" />
                        <img
                            src={ProductPicture}
                            alt="Profile"
                            className="w-18 h-12 object-cover rounded-[8px]"
                        />
                        <div>
                            <h3 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">Raybands RB3557 Sun Glasses</h3>
                            <p className="text-[var(--color-c-black-2)] text-[var(--text-c-p4)] whitespace-nowrap overflow-hidden text-ellipsis max-w-[160px]">You, Timmy Thyme, Chilli Charles</p>
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

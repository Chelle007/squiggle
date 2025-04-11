import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Phone, MessageCircle, User, Settings } from 'lucide-react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('chats');

    const navItems = [
        { id: 'not-found', icon: Users, label: 'Contact' },
        { id: 'not-found', icon: Phone, label: 'Calls' },
        { id: 'chats', icon: MessageCircle, label: 'Chats' },
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'not-found', icon: Settings, label: 'Settings' }
    ];

    return (
        <div className="bg-gray-100 w-full py-2 fixed bottom-0 border-t border-gray-200" style={{ fontFamily: 'var(--font-primary)' }}>
            <div className="flex justify-between items-center px-4">
                {navItems.map((item) => (
                <button
                    key={item.id}
                    className="flex flex-col items-center p-2 w-16"
                    onClick={() => setActiveTab(item.id)}
                >
                    <Link to={`/${item.id}`} className="flex flex-col items-center">
                        <item.icon 
                        size={24} 
                        className={`mb-1 ${activeTab === item.id ? 'text-blue-500' : 'text-gray-500'}`} 
                        />
                        <span className={`text-xs ${activeTab === item.id ? 'text-blue-500' : 'text-gray-500'}`}>
                            {item.label}
                        </span>
                    </Link>
                </button>
                ))}
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageCircle, Plus, User, Settings } from 'lucide-react';


export default function Navbar() {
    const [activeTab, setActiveTab] = useState('chats');

    const navItems = [
        { id: 'not-found', icon: Users, label: 'Contact' },
        { id: 'chats', icon: MessageCircle, label: 'Chats' },
        { id: 'add-wishlist', icon: Plus, label: 'Add' },
        { id: 'profile', icon: User, label: 'Profile' },
        { id: 'not-found', icon: Settings, label: 'Settings' }
    ];

    return (
        <div className="bg-gray-100 w-full py-2 fixed bottom-0 border-t border-gray-200" style={{ fontFamily: 'var(--font-primary)' }}>
            <div className="flex justify-between items-center px-4">
                {navItems.map((item) => {
                    const isAddButton = item.label === 'Add';

                    return (
                        <button
                            key={item.id}
                            className={`flex flex-col items-center ${isAddButton ? 'relative -mt-6' : ''} w-16`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <Link to={`/${item.id}`} className="flex flex-col items-center">
                                <div
                                    className={`flex items-center justify-center ${isAddButton ? 'bg-blue-500 text-white rounded-full w-14 h-14 shadow-lg' : ''
                                        }`}
                                >
                                    <item.icon
                                        size={isAddButton ? 28 : 24}
                                        className={`mb-1 ${activeTab === item.id && !isAddButton ? 'text-blue-500' : isAddButton ? '' : 'text-gray-500'}`}
                                    />
                                </div>
                                {!isAddButton && (
                                    <span className={`text-xs ${activeTab === item.id ? 'text-blue-500' : 'text-gray-500'}`}>
                                        {item.label}
                                    </span>
                                )}
                            </Link>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
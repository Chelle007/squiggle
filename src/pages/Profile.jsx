import ProfileHeader from '../components/ProfileHeader';
import ProfileDescription from '../components/ProfileDescription';
import SelfWishlist from '../components/SelfWishlist';

import jordanImg from '../assets/products/jordan.png'; 
import otterPlush from '../assets/products/otter-plushie.png'; 
import zebraLamp from '../assets/products/zebra-lamp.png'; 

import { Plus } from 'lucide-react';

export default function Profile() {
    return (
        <>
            <h1 className="text-[var(--color-c-black-1)]">Profile</h1>
            <ProfileHeader />
            <div className="flex flex-col justify-between mb-4 bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[var(--color-c-black-1)]">Wish List</h2>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition border border-[var(--color-c-green-2)] bg-[var(--color-c-green-1)]">
                        <Plus className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <SelfWishlist image={jordanImg} title="Nike Shoes" price="S$ 269.00" />
                    <SelfWishlist image={zebraLamp} title="Zebra Desk Lamp" price="S$ 35.99" />
                    <SelfWishlist image={otterPlush} title="Otter Plushie" price="S$ 80.00" />
                </div>
                
                {/* 
                <SelfWishlist image={colorPens} title="Premium Brush Pen Set" price="S$ 100.00" />
                <SelfWishlist image={elephantMug} title="Elephant Ceramic Mug" price="S$ 100.00" />
                <SelfWishlist image={hikingBag} title="Waterproof Hiking Backpack" price="S$ 100.00" /> */}
            </div>

            <ProfileDescription />
            
            <br />
            <br />
            <br />
            <br />
        </>
    );
}
import ProfileHeader from '../components/ProfileHeader';
import ProfileDescription from '../components/ProfileDescription';
import SelfWishlist from '../components/SelfWishlist';
import { Link } from 'react-router-dom';
import { getWishlist } from '../be/api-calls';

import userProfilePicture from '../assets/main-user.png';

import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

export default function Profile() {
    const [wishlist, setWishlist] = useState([]);
    const user = "user_a";

    useEffect(() => {
        getWishlist(user).then(setWishlist);
    }, [user]);

    return (
        <>
            <h1 className="text-[var(--color-c-black-1)]">Profile</h1>
            <ProfileHeader
                name="Bob Smith"
                bio="Living for the vibes 🌊"
                birthday="12 Apr 2001"
                image={userProfilePicture}
            />
            <div className="flex flex-col justify-between mb-4 bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[var(--color-c-black-1)]">Wish List</h2>
                    <Link to='/add-wishlist'>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition bg-[var(--color-c-green-1)]">
                            <Plus className="w-6 h-6 text-gray-500" />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {wishlist.length > 0 ? (
                        wishlist.map((item, index) => (
                            <SelfWishlist
                                key={index}
                                image={item.img_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                                title={item.name}
                                price={`${item.price}`}
                            />
                        ))
                    ) : (
                        <p className="col-span-2 text-sm text-gray-500">No wishlist items found.</p>
                    )}
                </div>
            </div>

            <ProfileDescription />

            <br />
            <br />
            <br />
            <br />
        </>
    );
}
import ProfileHeader from '../components/ProfileHeader';
import ProfileDescription from '../components/ProfileDescription';
import JoinWishlist from '../components/JoinWishlist';
import QuickJoin from '../components/QuickJoin';
import { getWishlist } from '../be/api-calls';

import userProfilePicture from '../assets/main-user.png';
import rachelProfilePicture from '../assets/user7.jpg';

import { useEffect, useState } from 'react';
import { Plus, Zap } from 'lucide-react';

export default function FriendProfile() {
    const [wishlist, setWishlist] = useState([]);
    const user = "user_b";

    useEffect(() => {
        getWishlist(user).then(setWishlist);
    }, [user]);

    return (
        <>
            <h1 className="text-[var(--color-c-black-1)]">Profile</h1>
            <ProfileHeader 
                name="Rachel Green"
                bio="I like vegan food <3"
                birthday="26 Dec 2005"
                image={rachelProfilePicture}
            />
            <div className="flex flex-col justify-between mb-4 bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[var(--color-c-black-1)]">Wish List</h2>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full hover:bg-yellow-100 transition border border-yellow-300 bg-yellow-200">
                            <Zap className="w-6 h-6 text-yellow-700" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition border border-[var(--color-c-green-2)] bg-[var(--color-c-green-1)]">
                            <Plus className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {wishlist.length > 0 ? (
                        wishlist.map((item, index) => (
                            <JoinWishlist
                                key={index}
                                image={item.img_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                                title={item.name}
                                price={`S${item.price}`}
                            />
                        ))
                    ) : (
                        <p className="col-span-2 text-sm text-gray-500">No wishlist items found.</p>
                    )}
                </div>
            </div>

            <ProfileDescription />
            <QuickJoin />

            <br />
            <br />
            <br />
            <br />
        </>
    );
}
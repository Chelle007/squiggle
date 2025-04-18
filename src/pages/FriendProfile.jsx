import ProfileHeader from '../components/ProfileHeader';
import ProfileDescription from '../components/ProfileDescription';
import JoinWishlist from '../components/JoinWishlist';
import QuickJoin from '../components/QuickJoin';
import { Link } from 'react-router-dom';
import { getWishlist, quickJoin } from '../be/api-calls';

import rachelProfilePicture from '../assets/user7.jpg';

import { useEffect, useState } from 'react';
import { Plus, Zap, X } from 'lucide-react';

export default function FriendProfile() {
    const [wishlist, setWishlist] = useState([]);
    const [filteredWishlist, setFilteredWishlist] = useState([]);
    const [showBudgetModal, setShowBudgetModal] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup
    const [budget, setBudget] = useState('');
    const [matchedProduct, setMatchedProduct] = useState(null); // Store matched product data

    const user = "user_b";

    useEffect(() => {
        getWishlist(user).then((data) => {
            setWishlist(data);
            setFilteredWishlist(data); // default view is unfiltered
        });
    }, [user]);

    const handleZapClick = () => {
        setShowBudgetModal(true);
    };

    const handleBudgetSubmit = async (e) => {
        e.preventDefault();

        const parsedBudget = parseFloat(budget);
        if (isNaN(parsedBudget)) return;

        try {
            const filtered = await quickJoin(user, parsedBudget);
            setFilteredWishlist(filtered);

            // ✅ Show success popup if any result is returned
            if (filtered.length > 0) {
                setMatchedProduct(filtered[0]); // Just show the first one as example
                setShowSuccessPopup(true);
            } else {
                setShowSuccessPopup(false);
            }
        } catch (error) {
            console.error("Error filtering wishlist:", error);
            setFilteredWishlist([]);
            setShowSuccessPopup(false);
        }

        setShowBudgetModal(false);
        setBudget('');
    };

    return (
        <div className="h-[100vh]">
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
                    <div className="flex gap-3">
                        <button
                            onClick={handleZapClick}
                            className="flex items-center gap-2 p-2 rounded-full hover:bg-yellow-100 transition border border-yellow-300 bg-yellow-200"
                        >
                            <Zap className="w-5 h-5 text-yellow-700" />
                            <span className="text-sm font-medium text-yellow-700">Quick join</span>
                        </button>
                        <Link to='/add-wishlist'>
                            <button className="p-2 rounded-full hover:bg-gray-100 transition bg-[var(--color-c-green-1)]">
                                <Plus className="w-6 h-6 text-gray-500" />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {filteredWishlist.length > 0 ? (
                        filteredWishlist.map((item, index) => (
                            <JoinWishlist
                                key={index}
                                image={item.img_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                                title={item.name}
                                price={`${item.price}`}
                            />
                        ))
                    ) : (
                        <p className="col-span-2 text-sm text-gray-500">No wishlist items found within budget.</p>
                    )}
                </div>

                <div class="flex items-center w-full my-4">
                    <div class="flex-grow h-px bg-black"></div>
                    <span class="mx-4 text-xl font-bold tracking-wide whitespace-nowrap">INITIATED BY OTHERS</span>
                    <div class="flex-grow h-px bg-black"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <JoinWishlist
                        image={"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1728916305295" || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                        title="Macbook Pro 14"
                        price={"S$" + 2199}
                    />
                </div>
            </div>

            <ProfileDescription
                fav_color="White, Pink"
                fav_animal="Bunny"
                hobbies="Reading"
            />
            <QuickJoin />
            

            {/* BUDGET MODAL */}
            {showBudgetModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl relative">
                        <button
                            onClick={() => setShowBudgetModal(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">What's your budget?</h3>
                        <form onSubmit={handleBudgetSubmit}>
                            <input
                                type="number"
                                placeholder="Enter your budget"
                                className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-green-400"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                min="0"
                            />
                            <Link to="/sub-group-chat/bunny">
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500 transition"
                                >
                                    Submit
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
            )}

            {/* SUCCESS POPUP */}
            {showSuccessPopup && matchedProduct && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
                    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl relative">
                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Success! Here's something within your budget 🎁
                        </h3>
                        <JoinWishlist
                            image={matchedProduct.img_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1200px-No-Image-Placeholder.svg.png"}
                            title={matchedProduct.name}
                            price={matchedProduct.price}
                        />
                    </div>
                </div>
            )}


            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

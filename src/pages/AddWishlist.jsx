import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { generateRecommendation, getProductDetailsFromShopUrl } from "../be/api-calls";

export default function AddWishlist() {
    const [searchTerm, setSearchTerm] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        link: "",
        price: "",
        notes: "",
    });

    const userWishlistSearch = async () => {
        setLoading(true);
        try {
            if (searchTerm.includes('www.amazon')) {
                const result = await getProductDetailsFromShopUrl(searchTerm);
                updateFormData(result)
            } else {
                const user = "user_a";
                const results = await generateRecommendation(user, searchTerm);

                if (results) {
                    setRecommendations(results);
                    setCurrentIndex(0);
                    updateFormData(results[0]);
                } else {
                    setRecommendations([]);
                }
            }
        } catch (error) {
            console.error("Failed to fetch wishlist recommendations / webscraping result:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateFormData = (item) => {
        setFormData({
            name: item.name || "",
            link: item.link || "",
            price: item.price || "",
            notes: "",
        });
    };


    const goTo = (index) => {
        if (index >= 0 && index < recommendations.length) {
            setCurrentIndex(index);
            updateFormData(recommendations[index]);
        }
    };

    return (
        <div className="p-4 bg-gray-100 min-h-screen pb-24">
            <h1 className="text-2xl font-semibold mb-4">Add to Wishlist</h1>

            {/* Search bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow">
                <input
                    type="text"
                    placeholder="Search keyword or url..."
                    className="flex-1 outline-none text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={userWishlistSearch} disabled={loading}>
                    {loading ? (
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <FiSearch className="text-gray-500 text-lg" />
                    )}

                </button>

            </div>

            {/* Swiper Section */}
            <div className="bg-white rounded-xl shadow p-4">
                {recommendations.length > 0 ? (
                    <div>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0.5, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <img
                                src={recommendations[currentIndex].image}
                                alt="item"
                                className="w-full h-60 object-cover rounded-lg"
                            />

                            {/* Swipe hint text */}
                            <div className="absolute bottom-2 w-full text-center text-xs text-white bg-black bg-opacity-30 py-1 rounded-b">
                                Swipe or tap dots below
                            </div>
                        </motion.div>

                        {/* Dot Navigation */}
                        <div className="flex justify-center mt-3 space-x-2">
                            {recommendations.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`w-3 h-3 rounded-full ${idx === currentIndex
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                                        }`}
                                    onClick={() => goTo(idx)}
                                ></button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-60 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
                        Choose an image (optional)
                    </div>
                )}

                {/* Form */}
                <div className="mt-4 space-y-3 text-sm">
                    <div>
                        <label className="text-gray-500">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full border-b p-1 outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-500">Link</label>
                        <input
                            type="text"
                            name="link"
                            value={formData.link}
                            onChange={(e) =>
                                setFormData({ ...formData, link: e.target.value })
                            }
                            className="w-full border-b p-1 outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-500">Price</label>
                        <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={(e) =>
                                setFormData({ ...formData, price: e.target.value })
                            }
                            className="w-full border-b p-1 outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-gray-500">Notes</label>
                        <input
                            type="text"
                            name="notes"
                            value={formData.notes}
                            onChange={(e) =>
                                setFormData({ ...formData, notes: e.target.value })
                            }
                            placeholder="Additional notes (eg. color, size, etc)"
                            className="w-full border-b p-1 outline-none"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button className="w-1/2 mr-2 py-2 rounded bg-gray-200">Cancel</button>
                    <button className="w-1/2 ml-2 py-2 rounded bg-green-200">Save</button>
                </div>
            </div>
        </div>
    );
}

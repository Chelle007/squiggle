import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect } from "react";

import RecommendationCard from "../components/RecommendationCard";


export default function AddWishlist() {
    const [searchTerm, setSearchTerm] = useState("");
    const [popUpState, setPopUpState] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);


    const [selectedCard, setSelectedCard] = useState(null);
    const handleCardClick = (cardData) => {
        console.log("You clicked:", cardData);
        setSelectedCard(cardData);
    };

    const [formData, setFormData] = useState({
        name: "",
        link: "",
        price: "",
        notes: "",
    });

    useEffect(() => {
        if (selectedCard) {
            setFormData({
                name: selectedCard.name,
                link: selectedCard.link,
                price: selectedCard.price,
                notes: "",
            });
            setSelectedImage(selectedCard.image);
            setPopUpState(false);
        }
    }, [selectedCard]);    

    const generateRecommendations = () => {
        const fakeData = [
            {
                name: "Pink Nike Shoes",
                link: "https://nike.com/item1",
                price: "100.00",
                image: "https://placehold.co/600x400",
            },
            {
                name: "Stylish Hat",
                link: "https://example.com/hat",
                price: "25.00",
                image: "https://fakeimg.pl/500x500",
            },
            {
                name: "Trendy Jacket",
                link: "https://example.com/jacket",
                price: "89.99",
                image: "https://placehold.co/600x400",
            },
        ];
        setRecommendations(fakeData);
        setCurrentIndex(0);
        updateFormData(fakeData[0]);
    };

    const updateFormData = (item) => {
        setFormData({
            name: item.name,
            link: item.link,
            price: item.price,
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
        <div className="p-4 min-h-screen pb-24">
            <h1 className="text-2xl mb-4">Add to Wishlist</h1>

            {/* Search bar */}
            <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow">
                <input
                    type="text"
                    placeholder="Search keyword or url..."
                    className="flex-1 outline-none text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    onClick={() => {
                        generateRecommendations();
                        setPopUpState(true);
                    }}>

                    <FiSearch className="text-gray-500 text-lg" />
                </button>
            </div>

            {/* Swiper Section */}
            {popUpState === true ? (
                <div className="grid grid-cols-2 gap-4">
                    {recommendations.map((item, index) => (
                        <RecommendationCard 
                            key={index}
                            image={item.image} 
                            title={item.name} 
                            price={item.price} 
                            link={item.link} 
                            onClick={() => handleCardClick(item)} 
                        />
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow p-4">
                    <div>
                    <div className="w-full h-60 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected product" className="h-full object-contain" />
                        ) : (
                            <span className="text-gray-500">Choose an image (optional)</span>
                        )}
                    </div>

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
                        <div className="flex justify-between mt-6">
                            <button className="w-1/2 mr-2 py-2 rounded bg-gray-200">Cancel</button>
                            <button className="w-1/2 ml-2 py-2 rounded bg-green-200">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

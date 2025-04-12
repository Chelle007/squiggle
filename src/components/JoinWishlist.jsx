import { Link } from "react-router-dom";

export default function JoinWishlist({ image, title, price, user1Img, user2Img, user3Img }) {
    return (
        <div className="bg-white w-full max-w-md overflow-hidden border border-[var(--color-c-green-3)] rounded-lg">
            <div className="p-2">
                <div className="overflow-hidden bg-pink-50 mb-2">
                    <img
                        src={image}
                        alt={title}
                        className="w-full object-cover"
                    />
                </div>

                <div>
                    <div>
                        <h3 className="font-bold text-black">{title}</h3>
                        <p className="font-semibold mt-2">{price}</p>
                    </div>

                    <div className="flex items-center">
                        <div className="flex -space-x-2 mr-3">
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                <img src={user1Img} alt="User 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black">
                                <img src={user2Img} alt="User 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                <img src={user3Img} alt="User 3" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <Link to='/sub-group-chat/bunny'>
                            <button className="bg-green-200 text-black font-semibold py-3 px-4 rounded-full">
                                Join
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

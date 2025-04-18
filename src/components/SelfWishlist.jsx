import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";

export default function SelfWishlist({ image, title, price }) {
    return (

        <div className="bg-white w-full max-w-md overflow-hidden border border-[var(--color-c-green-3)] rounded-lg">
            <div className="p-2">

                <div className="relative w-full pt-[100%] rounded-t-lg overflow-hidden">
                    <img
                        src={image}
                        alt="product image"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />

                    <button
                        className="absolute top-2 right-2 z-10 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition border border-[var(--color-c-green-3)]"
                    >
                        <Link to="/sub-group-chat" className="flex flex-col items-center">
                            <Pencil className="w-4 h-4 text-gray-700" />
                        </Link>
                    </button>
                </div>

                <div className="px-4 py-2">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">{price}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

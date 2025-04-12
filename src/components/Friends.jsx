import { Link } from "react-router-dom";

function Friends({ name, image, message, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex w-full py-3 justify-between items-center hover:bg-gray-200 transition-colors rounded-lg text-left"
        >
            <Link to="/private-chat" >
                <div className="flex items-center">
                    <img src={image} className="w-16 h-16 rounded-full object-cover" alt={name} />
                    <div className="px-4 text-left">
                        <h6 className="text-[16px] font-semibold">{name}</h6>
                        <h9 className="text-gray-400 text-sm">{message}</h9>
                    </div>
                </div>
            
            </Link>
            <h3 className="text-[12px] text-gray-400">17.18</h3>
            
        </button>
    );
}

export default Friends; 
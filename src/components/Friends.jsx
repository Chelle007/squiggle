import { Link } from "react-router-dom";

function Friends({ name, image, message, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex w-full py-2 justify-between items-center hover:bg-gray-200 transition-colors rounded-lg px-4 text-left"
        >
            <Link to="/private-chat" >
                <div className="flex items-center">
                    <img src={image} className="w-16 h-16 rounded-full" alt={name} />
                    <div className="p-4 text-left">
                        <h3 className="font-semibold">{name}</h3>
                        <h4 className="text-gray-400">{message}</h4>
                    </div>
                </div>
            
            </Link>
            <h3 className="text-gray-400">17.18</h3>
            
        </button>
    );
}

export default Friends; 
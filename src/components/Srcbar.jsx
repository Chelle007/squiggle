import { Search } from "lucide-react"; 

function Srcbar() {
    return (
        <>
            <div className="flex bg-gray-300 h-12 w-full items-center gap-4 px-4">
            <Search/>
            <p>Search</p>
            </div>
        </>
    );
}

export default Srcbar;

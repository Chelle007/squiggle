import { Search } from "lucide-react"; 

function Srcbar() {
    return (
        <>
            <div className="flex bg-[var(--color-c-black-3)] h-12 w-full rounded-full items-center gap-4 px-4">
            <Search/>
            <p>Search</p>
            </div>
        </>
    );
}

export default Srcbar;

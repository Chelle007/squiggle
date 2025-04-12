export default function RecommendationCard({ image, title, price, link, onClick }) {
    const handleClick = () => {
        onClick?.({ image, title, price, link }); // only call if `onClick` is passed
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer w-45 max-w-sm border rounded-lg shadow-sm bg-[var(--color-c-white-1)] border-[var(--color-c-white-2)] relative"
        >
            <div className="w-full pt-2 pl-2 pr-2 pb-2">
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt="product image"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
            </div>

            <div className="px-4 pb-2 text-center">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
                <div className="items-center">
                    <span className="font-bold text-gray-900">{price}</span>
                </div>
            </div>
        </div>
    );
}
function ChatBubble({ message, isSender, profile }) {
    return (
        <div className={`flex items-start gap-2.5 ${isSender ? 'justify-end' : 'justify-start'}`}>
            {!isSender ? (
                <img
                    className="size-8 object-cover rounded-full"
                    src={profile?.image || '/default-profile.jpg'}
                    alt={profile?.name || 'User'}
                />
            ) : (
                // Keep space on the left to maintain alignment
                <div className="w-8" />
            )}

            <div className={`flex flex-col max-w-[320px] leading-1.5 p-4 rounded-xl
                ${isSender
                    ? 'bg-[var(--color-c-green-1)] dark:bg-[var(--color-c-black-1)] text-[var(--color-c-black-1)] dark:text-[var(--color-c-white-1)] rounded-br-none'
                    : 'bg-[var(--color-c-white-2)] dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'}
            `}>
                {!isSender && (
                    <span className="text-sm font-semibold pb-2.5">
                        {profile?.name || 'Unknown'}
                    </span>
                )}
                <p className="text-sm pb-2.5">{message}</p>
                <div className="justify-between flex">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Delivered</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{profile?.timestamp?.slice(-8) || ''}</span>
                </div>
            </div>

            {!isSender && (
                <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    className="inline-flex self-center items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                >
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 4 15"
                    >
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default ChatBubble
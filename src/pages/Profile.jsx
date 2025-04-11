import userProfilePicture from '../assets/main-user.png';

export default function Profile() {
    return (
        <>
            <h1 className="text-[var(--color-c-black-1)]">Profile</h1>
            {/* Profile pict, name and bio */}
            <div className="flex bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4">
                <img
                    src={userProfilePicture}
                    alt="Alex Lie"
                    className="rounded-full w-20 h-20 object-cover"
                />
                {/* Name and bio */}
                <div className="flex flex-col mt-auto mb-auto ml-4">
                    <h2 className="text-[var(--color-c-black-1)] text-lg font-semibold">Bob Smith</h2>
                    <p className="text-[var(--color-c-black-2)] text-sm">Life is worth enjoying</p>
                </div>
            </div>

            {/* Description */}
        </>
    );
}
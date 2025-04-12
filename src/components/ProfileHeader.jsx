export default function ProfileHeader({ name, bio, birthday, image }) {
    return (
        <div className="flex bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4">
            <img
                src={image}
                alt={name}
                className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex flex-col mt-auto mb-auto ml-4">
                <h2 className="text-[var(--color-c-black-1)] text-lg font-semibold">{name}</h2>
                <p className="text-[var(--color-c-black-2)] text-sm">{bio}</p>
                <p className="text-[var(--color-c-black-2)] text-sm">🎂 {birthday}</p>
            </div>
        </div>
    );
}

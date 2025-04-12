export default function ProfileDescription() {
    return (
        <div className="flex bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4 flex-col">
            <h2 className="text-[var(--color-c-black-1)] mb-4">Descriptions</h2>

            {[
                // { label: "🎂 Birthdate", value: "12 Apr 2001 (24 years old)" },
                { label: "🎨 Favorite Colors", value: "White" },
                { label: "🦓 Favorite Animals", value: "Bunny" },
                { label: "🏕️ Hobbies", value: "Gymnastic" }
            ].map((item, index) => (
                <div key={index} className="mb-2">
                    <h4 className="">{item.label}</h4>
                    <p className="text-[var(--color-c-black-2)]">{item.value}</p>
                </div>
            ))}
        </div>
    );
}
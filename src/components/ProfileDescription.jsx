export default function ProfileDescription() {
    return (
        <div className="flex bg-[var(--color-c-white-1)] rounded-lg p-4 mt-4 flex-col">
            <h2 className="text-[var(--color-c-black-1)] mb-4">Descriptions</h2>

            {[
                { label: "Birthdate", value: "12 Apr 2024 (24 years old)" },
                { label: "Favorite Colors", value: "Red, Green, Blue" },
                { label: "Favorite Animals", value: "Otter, Elephant, Zebra" },
                { label: "Hobbies", value: "Hiking, Swimming, Reading" }
            ].map((item, index) => (
                <div key={index} className="mb-2">
                    <h3 className="font-bold">{item.label}</h3>
                    <p className="text-[var(--color-c-black-2)]">{item.value}</p>
                </div>
            ))}
        </div>
    );
}
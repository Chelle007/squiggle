// import StaffScheduleTable from '../components/StaffScheduleTable';
import Srcbar from "../components/Srcbar";
import Filter from "../components/Filter";
import Friends from "../components/Friends.jsx";
import Profile from "../assets/user7.jpg";
import Profile1 from "../assets/user1.jpg";
import Profile2 from "../assets/user2.jpg";
import Profile3 from "../assets/user3.jpg";
import Profile4 from "../assets/user4.jpg";
import Profile5 from "../assets/user5.jpg";
import Profile6 from "../assets/user6.jpg";
import Profile8 from "../assets/michelle.jpeg";

export default function Chats() {
    const friendsData = [
        {image: Profile, name: "Rachel Green", message: "Huh pattern? I like flower patterns"},
        {image: Profile1, name: "Alex Bobby", message: "Hell yea, dude!"},
        {image: Profile2, name: "Humbert Pummel", message: "KFC it is then"},
        {image: Profile3, name: "Lego Saurus", message: "k"},
        {image: Profile4, name: "Hill Jillen", message: "I see how it is"},
        {image: Profile5, name: "Ray hummer", message: "Yea dounds good"},
        {image: Profile6, name: "Violet Hill", message: "chill tonight?"},
        {image: Profile8, name: "Hustler Hunter", message: "yay"},
    ];

    return (
        <div className="py-16">
        <div className="pb-4">
            <h1 className="">Message</h1>
        </div>
            <Srcbar/>
            <div className="flex gap-2 py-4">
                <Filter color="bg-[#C8FF9E]" text="All" />
                <Filter color="bg-[var(--color-c-black-3)]" text="Groups" />
                <Filter color="bg-[var(--color-c-black-3)]" text="Unread" />
                <Filter color="bg-[var(--color-c-black-3)]" text="Favorites" />
            </div>
            <div>
                {friendsData.map((friend, index) => (
                    <Friends
                        key={index}
                        image={friend.image}
                        name={friend.name}
                        message={friend.message}
                        onClick={() => console.log(`Clicked on ${friend.name}`)}
                    />
                ))}
            </div>
        </div>
    );
}
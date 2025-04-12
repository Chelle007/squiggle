// import StaffScheduleTable from '../components/StaffScheduleTable';
import Srcbar from "../components/Srcbar";
import Filter from "../components/Filter";
import Friends from "../components/Friends.jsx";
import Profile from "../assets/user7.jpg";

export default function Chats() {
    const friendsData = [
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
        {image: Profile, name: "Rachel Green", message: "Hell yea, dude!"},
    ];

    return (
        <>
        <div className="pb-4">
            <h1 className="">Message</h1>
        </div>
            <Srcbar/>
            <div className="flex gap-2 py-4">
                <Filter color="bg-[#C8FF9E]" text="All" />
                <Filter color="bg-gray-300" text="Groups" />
                <Filter color="bg-gray-300" text="Unread" />
                <Filter color="bg-gray-300" text="Favorites" />
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
        </>
    );
}
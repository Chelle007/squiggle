// import StaffScheduleTable from '../components/StaffScheduleTable';
import Srcbar from "../components/Srcbar";
import Filter from "../components/Filter";

export default function Chats() {
    return (
        <>
        <div className="pb-4">
            <h1 className="">Message</h1>
        </div>
            <Srcbar/>
            <div className="flex gap-2 my-2">
                <Filter color="bg-green-300" text="All" />
                <Filter color="bg-green-300" text="Groups" />
                <Filter color="bg-green-300" text="Unread" />
            </div>
        </>
    );
}
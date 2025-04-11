import ProfileHeader from '../components/ProfileHeader';
import ProfileDescription from '../components/ProfileDescription';

export default function Profile() {
    return (
        <>
            <h1 className="text-[var(--color-c-black-1)]">Profile</h1>
            {/* Profile pict, name and bio */}
            <ProfileHeader />
            <ProfileDescription />
            {/* Descriptions */}
        </>
    );
}
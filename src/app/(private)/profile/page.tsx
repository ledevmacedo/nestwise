import { Navbar } from "@/components/navbar";

export default function Profile() {
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl">User Profile</h1>
            </div>
            <Navbar isHome={false} isNote={false} isProfile />
        </>
    )
}
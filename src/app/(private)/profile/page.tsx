import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";

export default async function Profile() {
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl">User Profile</h1>
            </div>
            <Navbar isHome={false} isNote={false} isProfile />
        </>
    )
}
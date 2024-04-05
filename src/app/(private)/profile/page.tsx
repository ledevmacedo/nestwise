import { Navbar } from "@/components/navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl">User Profile</h1>
            </div>
            <Navbar isHome={false} isNote={false} isProfile />
        </>
    )
}
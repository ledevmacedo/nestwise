import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function New() {
    const { isAuthenticated } = getKindeServerSession();
    return (

        <div className="w-full h-dvh">
            <h1 className="text-4xl mb-10">User Profile</h1>
        </div>
    )
}
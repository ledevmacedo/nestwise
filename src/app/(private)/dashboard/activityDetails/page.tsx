import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function ActivityDetails() {
    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }
    return (
        <>
            <h1 className="text-4xl">Activity Details</h1>
        </>
    )
}
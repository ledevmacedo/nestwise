import { Navbar } from "@/components/navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Notes() {
    const { isAuthenticated } = getKindeServerSession();
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl mb-10">Notes</h1>
            </div>
            <Navbar isHome={false} isNote isProfile={false} />
        </>
    )
}
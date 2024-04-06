
import { Navbar } from "@/components/navbar";
import { redirect } from "next/navigation";



export default async function Notes() {

    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl mb-10">Notes</h1>
            </div>


            <Navbar isHome={false} isNote isProfile={false} />
        </>
    )
}
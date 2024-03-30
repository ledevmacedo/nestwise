import { Navbar } from "@/components/navbar";

export default function Notes() {
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl mb-10">Notes</h1>
            </div>
            <Navbar isHome={false} isNote isProfile={false} />
        </>
    )
}
import { HeadBack } from "@/components/headBack";
import { BadgeCustom } from "@/components/ui/badgeCustom";

export default function BillDetails() {
    return (
        <>
            <div className="px-4 pt-6 pb-16 flex flex-col gap-4">
                <HeadBack href={"dashboard"} content="Bill Details" />
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Internet</h1>
                        <p className="text-sm">Meo</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">€24,60</h1>
                        <p className="text-sm">Paid</p>
                    </div>
                </div>
            </div>
        </>
    )
}
"use client"
import { ArrowRight, MenuBoard } from "iconsax-react";
import { ActivityList } from "./activityList";
import { Button } from "./ui/button";
interface ActivityHistoryProps {
    category: string; //Luz, Internet, Agua
    activity: string; //Pagamento efetuado, Nova conta adicionada.
    paymentDate: Date; //Dia que foi realizada a ação.
    value: string;
    user: string;
}

export function ActivityHistory({ category, value, activity, paymentDate, user }: ActivityHistoryProps) {
    const activityItems = [1, 2, 3, 4, 5, 6, 7, 8]

    const listDisplay = activityItems.length > 6 ? activityItems.slice(0, 6) : activityItems
    return (
        <div className="flex flex-col gap-2">
            <div>
                <p className="text-sm font-semibold text-card">Activity History</p>
            </div>
            {listDisplay.length > 1 ? <>
                {listDisplay.map((item, index) => (
                    <ActivityList key={index} category={"gas"} activity={"overdue"} user={"Leandro"} value={"30,00"} paymentDate={new Date()} />
                ))}
                <Button variant={"ghost"} className="mt-4">
                    See all history
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </> :
                <div className="w-full h-60 p-4 rounded-md flex flex-col justify-center items-center content-center ">
                    <MenuBoard
                        size="100"
                        className=""
                        variant="Bulk"
                    />
                    <p className="text-sm  opacity-60 font-semibold text-card pt-5">No activity found</p>
                </div>}
        </div>
    )
}
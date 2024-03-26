import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CardBill } from "./cards/cardBill"

export interface registredBills {
    bill: string
    billValue: string
}

export const works: registredBills[] = [
    {
        bill: "Agua",
        billValue: "€ 40,00",
    },
    {
        bill: "Luz",
        billValue: "€ 63,00",
    },
    {
        bill: "Internet",
        billValue: "€ 73,00",
    },
]

export function ScrollAreaHorizontalDemo() {
    return (
        <ScrollArea className="w-96 whitespace-nowrap ">
            <div className="flex w-max space-x-4">
                {works.map((registredBills) => (
                    <CardBill key={registredBills.bill} />
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="bg-none" />
        </ScrollArea>
    )
}

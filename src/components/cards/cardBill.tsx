import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { Droplet } from 'lucide-react';
import { People, User } from "iconsax-react";
import { StatusButton } from "../statusButton";

export function CardBill() {
    return (
        <>
            {/* Alternative Option  */}
            {/* <Card className="w-56">
                <CardHeader >
                    <div className="flex gap-2 justify-between items-start">
                        <Droplet size={36} />
                        <h1 className="text-base opacity-95">Agua</h1>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-xl font-semibold">€ 40,50 Total</h1>
                        <p className="text-base opacity-80">€ 20,25 Person</p>
                    </div>


                </CardContent>
                <CardFooter className="flex  gap-2">
                    <Button className="w-full">Confirmar Pagamento</Button>
                </CardFooter>
            </Card> */}

            <div className="w-full p-4 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-8">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <Droplet size={36} />
                        <h1 className="text-2xl font-semibold">Agua</h1>
                    </div>
                    Status
                </div>

                <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                        <People size="20" className="text-primary" variant="Bulk" />
                        <h1 className=" scroll-m-20 text-xl font-semibold tracking-tight">
                            € 40,00
                        </h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <User size="18" className="text-primary" variant="Bulk" />
                        <p className="leading-7 opacity-90">
                            € 20,00
                        </p>
                    </div>
                </div>
                <StatusButton status="overdue" />
            </div>
        </>
    )
}

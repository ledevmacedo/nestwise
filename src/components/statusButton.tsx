import { Button } from "@/components/ui/button";

interface PaymentStatus {
    status: "paid" | "confirmPayment" | "overdue";
}

export function StatusButton({ status }: PaymentStatus) {
    return (
        <>
            {status === "paid" && <Button variant={"secondary"}>Paid</Button>}
            {status === "confirmPayment" && <Button >Confirm payment</Button>}
            {status === "overdue" && <Button variant={"destructive"}>Confirm payment</Button>}
        </>
    );
}

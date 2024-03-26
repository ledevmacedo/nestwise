import { ScrollAreaHorizontalDemo } from "@/components/ScrollAreaHorizontalDemo";
import { CardBill } from "@/components/cards/cardBill";
import { Button } from "@/components/ui/button";
import { UserBalance } from "@/components/user/userBalance";
import { UserHeader } from "@/components/user/userHeader";
import Image from "next/image";



export default function Home() {
  return (
    <div className="container mx-auto pt-8">
      <UserHeader userName={"John"} userId="none" />
      <UserBalance userBalance="€ 13,553.00" />
      <CardBill
        category={"gas"}
        company={"Aguas Famalicão"}
        maturityDate={new Date()}
        value={"€24,60"}
        singleValue={"€14,30"}
        paymentStatus={"partPaid"}
        singlePaymentStatus={"overdue"}
      />

    </div>
  );
}

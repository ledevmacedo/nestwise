"use client"
import { ActivityHistory } from "@/components/activityHistory";
import { CardBill } from "@/components/cards/cardBill";
import { HouseUsers } from "@/components/houseUsers";
import { Navbar } from "@/components/navbar";
import { UserBalance } from "@/components/user/userBalance";
import { UserHeader } from "@/components/user/userHeader";

export default function Home() {

  return (
    <div className="px-4 pt-6 pb-16 flex flex-col gap-4">
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
      <HouseUsers userName={"John"} userId="none" />

      <ActivityHistory category={"gas"} activity={"overdue"} user={"Leandro"} value={"30,00"} paymentDate={new Date()} />
      <Navbar isHome isNote={false} isProfile={false}
      />
    </div>
  );
}

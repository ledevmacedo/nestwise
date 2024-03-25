import { CardBill } from "@/components/cards/cardBill";
import { Button } from "@/components/ui/button";
import { UserBalance } from "@/components/user/userBalance";
import { UserHeader } from "@/components/user/userHeader";
import Image from "next/image";



export default function Home() {
  return (
    <div className="container mx-auto pt-8">
      <UserHeader userName={"John"} />
      <UserBalance />
      <CardBill />
    </div>
  );
}

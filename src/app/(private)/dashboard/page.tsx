
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

import { HouseUsers } from '@/components/houseUsers';
import { ActivityHistory } from '@/components/activityHistory';
import { Navbar } from '@/components/navbar';
import { CardBill } from '@/components/cards/cardBill';
import { UserHeader } from '@/components/user/userHeader';
import { UserBalance } from '@/components/user/userBalance';

export default async function Dashboard() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = await getUser();
    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    // if (isLoading) return <div>Loading...</div>;
    return (
        <div className="px-4 pt-6 pb-16 flex flex-col gap-4">
            <UserHeader userName={`${user?.given_name}`} userId="none" picture={user?.picture} />
            <UserBalance userBalance="€ 13,553.00" />
            <CardBill
                category={"gas"}
                company={"Galp"}
                maturityDate={new Date()}
                value={"€24,60"}
                singleValue={"€14,30"}
                paymentStatus={"partPaid"}
                singlePaymentStatus={"overdue"}
            />
            <HouseUsers userName={"John"} userId="none" />

            <ActivityHistory category={"gas"} activity={"overdue"} user={"Leandro"} value={"30,00"} paymentDate={new Date()} />
            <Navbar isHome isNote={false} isProfile={false} />
        </div>
    );
};


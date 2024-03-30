import { format } from "date-fns"
import { People, User, Drop, Flash, Wifi, ExportSquare, ChemicalGlass, House } from "iconsax-react";
import { parse, getDay, getMonth, getYear } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import id from 'date-fns/locale/id';
import zhCN from 'date-fns/locale/zh-CN';

interface ActivityHistoryProps {
    category: string; //Luz, Internet, Agua
    activity: string; //Pagamento efetuado, Nova conta adicionada.
    paymentDate: Date; //Dia que foi realizada a ação.
    value: string;
    user: string;
}

interface IconMapping {
    [key: string]: {
        icon: any; // Tipo genérico para o componente de ícone
        color: string;
    };
}
const iconMapping: IconMapping = {
    water: {
        icon: Drop,
        color: "text-blue-500"
    },
    energy: {
        icon: Flash,
        color: "text-yellow-500"
    },
    internet: {
        icon: Wifi,
        color: "text-purple-500"
    },
    rent: {
        icon: House,
        color: "text-green-500"
    },
    gas: {
        icon: ChemicalGlass,
        color: "text-violet-500"
    }
};

interface statusContent {
    [key: string]: {
        activityContent: string
    }
}

const statusContent: statusContent = {
    paid: { activityContent: "Payment made by" },
    overdue: { activityContent: "Overdue payment by" },
    newBill: { activityContent: "New Bill added by" },
}

export function ActivityList({ category, value, activity, paymentDate, user }: ActivityHistoryProps) {
    const formattedDate = paymentDate ? format(paymentDate, 'dd MMM yyyy') : ". . ."
    const { activityContent: ContentActivity } = statusContent[activity] || {};
    const { icon: Icon, color } = iconMapping[category] || {};

    return (
        <div className="flex flex-col gap-4">
            {/* <p className="text-xs font-medium text-accent"> {formattedDate} </p> */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    {Icon &&
                        <div className="p-2 rounded-md bg-accent-foreground">
                            <Icon className={`${color} size-6`} variant="Bulk" />
                        </div>
                    }
                    <div className="flex flex-col justify-between">
                        <p className="text-sm font-semibold text-card capitalize">{category} </p>
                        <p className="text-xs font-medium text-accent">{ContentActivity} {user}</p>
                    </div>
                </div>
                <div>
                    {ContentActivity == "paid" ?
                        <p className="text-sm font-semibold text-card">
                            + €{value}
                        </p> :
                        <p className="text-sm font-semibold text-card opacity-80">
                            - €{value}
                        </p>}
                </div>
            </div>
        </div>
    )
}
import { People, User, Drop, Flash, Wifi, ExportSquare, ChemicalGlass, House } from "iconsax-react";
interface billCardProps {
    category: string;
    company: string;
}


interface IconMapping {
    [key: string]: {
        icon: any; // Tipo genérico para o componente de ícone
        size: string;
        color: string;
    };
}
const iconMapping: IconMapping = {
    water: {
        icon: Drop,
        size: "36",
        color: "text-blue-500"
    },
    energy: {
        icon: Flash,
        size: "36",
        color: "text-yellow-500"
    },
    internet: {
        icon: Wifi,
        size: "36",
        color: "text-purple-500"
    },
    rent: {
        icon: House,
        size: "36",
        color: "text-green-500"
    },
    gas: {
        icon: ChemicalGlass,
        size: "36",
        color: "text-violet-500"
    }
};

export function ItemIconTitle({ category, company }: billCardProps) {
    const { icon: Icon, size, color } = iconMapping[category] || {};
    return (
        <div className="flex items-center gap-2">
            {Icon &&
                <div className="p-2 rounded-lg bg-accent-foreground">
                    <Icon size={size} className={color} variant="Bulk" />
                </div>
            }
            <div>
                <p className="text-xs font-normal capitalize">
                    {category}
                </p>
                <p className="text-xs font-normal opacity-60 capitalize">{company}</p>
            </div>
        </div>
    )
}
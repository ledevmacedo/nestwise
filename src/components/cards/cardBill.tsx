"use client"
import { Button } from "../ui/button"
import { People, User, Drop, Flash, Wifi, ExportSquare, ChemicalGlass, House } from "iconsax-react";
import { StatusButton } from "../statusButton";
import { Badge } from "../ui/badge";
import { BadgeCustom } from "../ui/badgeCustom";
import { Separator } from "../ui/separator";
import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns"
import { parse, getDay, getMonth, getYear } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import enUS from 'date-fns/locale/en-US';
import id from 'date-fns/locale/id';
import zhCN from 'date-fns/locale/zh-CN'; // Importa o locale para Chinês (Simplificado)


import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
interface statusContent {
    [key: string]: {
        contentBadge: string
    }
}

const statusContent: statusContent = {
    pending: { contentBadge: "Pending" },
    overdue: { contentBadge: "Overdue" },
    paid: { contentBadge: "Paid" },
    partPaid: { contentBadge: "Part Paid" },
}


interface billCardProps {
    category: string;
    company: string;
    maturityDate: Date; //on future, update to date
    value: string;
    singleValue: string;
    paymentStatus: any;
    singlePaymentStatus: any;
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


export function CardBill({ category, company, maturityDate, value, singleValue, paymentStatus, singlePaymentStatus }: billCardProps) {
    const fakeMap = [1, 2, 3]
    const formattedDate = maturityDate ? format(maturityDate, 'dd MMM yyyy') : ". . ."
    const { contentBadge: ContentBadge } = statusContent[paymentStatus] || {};
    const { icon: Icon, size, color } = iconMapping[category] || {};
    const { contentBadge: ContentSingleBadge } = statusContent[singlePaymentStatus] || {};
    return (
        <div>
            <Carousel className="w-full max-w-xs">
                <CarouselContent className="">
                    {fakeMap.map((item, index) => (
                        <CarouselItem key={index}
                            className={` md:basis-1/2 lg:basis-1/3 pl-4 ${fakeMap.length > 1 ? "basis-11/12" : ""}`}>
                            <div className="w-full p-4 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between">
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
                                    <div className="cursor-pointer">
                                        <Link href={`/billDetails/${"id"}`}>
                                            <ExportSquare size={16} className="opacity-60" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-normal opacity-60">Valor total</p>
                                    <div className="flex gap-4 justify-start items-center">
                                        <h1 className="text-3xl font-semibold">
                                            {value}
                                        </h1>
                                        <BadgeCustom variant={paymentStatus}>
                                            {ContentBadge}
                                        </BadgeCustom>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs font-normal opacity-60">Sua parte</p>
                                    <div className="flex gap-4 justify-start items-center">
                                        <h1 className="text-xl font-semibold">{singleValue} </h1>
                                        <BadgeCustom variant={singlePaymentStatus}>{ContentSingleBadge}</BadgeCustom>
                                    </div>
                                </div>
                                <Separator className="bg-accent-foreground h-0.5" />
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-xs font-normal opacity-60">Pagamento até <strong>{formattedDate}</strong></p>
                                    <Button>Pagar</Button>

                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

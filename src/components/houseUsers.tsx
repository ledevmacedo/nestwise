"use client"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "iconsax-react";

interface UserHeaderProps {
    userName: string;
    userId: string;
}

export function HouseUsers({ userName, userId, }: UserHeaderProps) {
    const userTotal = [1, 2, 3, 4]
    const usersDisplay = userTotal.length > 6 ? userTotal.slice(0, 6) : userTotal
    const surplusUsers = `+${userTotal.length - usersDisplay.length + 1}`
    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-card">Residents</p>

            {userTotal.length > 6 ?
                <div className={`flex justify-between flex-wrap`}>
                    {usersDisplay.map((item, index) => (
                        <Link key={index} href={`/profile/${userId}`}>
                            {item == usersDisplay.length ?
                                <Avatar>
                                    <AvatarFallback className="bg-accent font-semibold flex pt-0.5 justify-center content-center items-center ">
                                        {surplusUsers}
                                    </AvatarFallback>
                                </Avatar>
                                : <Avatar>
                                    <AvatarImage src="https://github.com/ledevmacedo.png"
                                        alt={userName} />
                                    <AvatarFallback className="bg-accent ">
                                        <User
                                            className="text-secondary"
                                            size={20}
                                            variant="Bulk" />
                                    </AvatarFallback>
                                </Avatar>}

                        </Link>
                    ))}
                </div> :
                <div className={`flex gap-3 flex-wrap`}>
                    {usersDisplay.map((item, index) => (
                        <Link key={item} href={`/profile/${userId}`}>
                            <Avatar>
                                <AvatarImage src="https://github.com/ledevmacedo.png"
                                    alt={userName} />
                                <AvatarFallback className="bg-accent ">
                                    <User
                                        className="text-secondary"
                                        size={20}
                                        variant="Bulk" />
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    ))}
                </div>}
        </div>
    );
}
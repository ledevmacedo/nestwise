import { Bell } from "lucide-react";
import { Separator } from "../ui/separator";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { User } from "iconsax-react";
import Link from "next/link";

interface UserHeaderProps {
    userName: any;
    userId: any;
    picture: any;
}
export function UserHeader({ userName, userId, picture }: UserHeaderProps) { // Remove type annotation
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full flex gap-3 items-center justify-between">
                <h1 className="text-xl font-medium">
                    <span className="opacity-60">Wellcome, </span>
                    <strong>{userName}!</strong>
                </h1>
                <Link href={`/profile/${userId}`}>
                    <Avatar className="w-8 h-8 ">
                        <AvatarImage src={picture}
                            alt={userName} />
                        <AvatarFallback className="bg-accent ">
                            <User
                                className="text-secondary"
                                size={20}
                                variant="Bulk" />
                        </AvatarFallback>
                    </Avatar>
                </Link>
            </div>
            <div className="w-full py-0 flex gap-3 items-center justify-between">
                <Separator className="bg-accent" />
            </div>
        </div>
    );
}
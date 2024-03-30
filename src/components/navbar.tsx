import { Home, User, Notepad2, Add } from "iconsax-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "./ui/button";
import { Children } from "react";
import Link from "next/link";

function ButtonActive({ children }: any) {
    return (<div className="p-2 rounded-full bg-background text-card gap-2 font-medium flex justify-center content-start items-center">
        {children}
    </div>);
}


function ButtonNormal({ children }: any) {
    return (<div className="p-2 px-4 rounded-full text- gap-2 font-medium flex justify-center content-start items-center">
        {children}
    </div>);
}

function ButtonAdd({ }: any) {
    return (<div className="p-2 rounded-full bg-card  text-whitr gap-2 font-medium flex justify-center content-start items-center">
        <Add size={20} />
    </div>);
}

interface NavProps {
    isHome: boolean;
    isNote: boolean;
    isProfile: boolean;
}
export function Navbar({ isHome, isNote, isProfile }: NavProps) {
    return (
        <>
            {/* fixed bottom-2 left-2 right-2 */}
            <div className="">
                <div className="flex justify-between">
                    <div className="bg-card p-2 rounded-full  text-white">
                        <div className="flex gap-2">
                            <Link href="/dashboard">
                                {isHome ?
                                    <ButtonActive >
                                        <Home variant="Outline" size={20} />
                                        <p className="text-xs">Home</p>
                                    </ButtonActive>
                                    :
                                    <ButtonNormal>
                                        <Home size={20} variant="Outline" />
                                    </ButtonNormal>
                                }
                            </Link>
                            <Link href="/notes">
                                {isNote ?
                                    <ButtonActive >
                                        <Notepad2 size={20} variant="Outline" />
                                        <p className="text-xs">Notes</p>
                                    </ButtonActive>
                                    :
                                    <ButtonNormal>
                                        <Notepad2 size={20} variant="Outline" />
                                    </ButtonNormal>
                                }
                            </Link>
                            <Link href="/profile">
                                {isProfile ?
                                    <ButtonActive >
                                        <User size={20} variant="Outline" />
                                        <p className="text-xs">Profile</p>
                                    </ButtonActive>
                                    :
                                    <ButtonNormal>
                                        <User size={20} variant="Outline" />
                                    </ButtonNormal>
                                }
                            </Link>
                        </div>
                    </div>
                    <Link href="new">
                        <div className="p-4 bg-card text-white flex justify-center content-start items-center rounded-full">
                            <Add size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
import { ArrowLeft } from "iconsax-react";
import Link from "next/link";


interface PropsTo {
    href: string;
    content: string;
}
export function HeadBack({ href, content }: PropsTo,) {
    return (
        <>
            <Link href={href}>
                <div className="flex justify-between content-center items-center">
                    <ArrowLeft className="flex-start" />
                    <h1 className="mx-auto font-medium">{content}</h1>
                </div>
            </Link>
        </>
    )
}
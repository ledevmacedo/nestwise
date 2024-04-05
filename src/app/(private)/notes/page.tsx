"use client"
import { Navbar } from "@/components/navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useEffect, useState } from "react";



export default async function Notes() {
    const [billsData, setBillsData] = useState<any>([])
    useEffect(() => {

        getBills()
    }, [])

    const getBills = async () => {
        const response = await fetch("api/entry")
        const bills = await response.json();
        setBillsData(bills.billData)
    }

    const { isAuthenticated } = getKindeServerSession();
    return (
        <>
            <div className="w-full">
                <h1 className="text-4xl mb-10">Notes</h1>
            </div>

            <div className="overflow-x-auto container mx-auto ">
                <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr className="whitespace-nowrap px-4 text-center py-2 font-medium text-gray-900">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Value</th>
                            <th className="px-4 py-2">Bill Type</th>
                            <th className="px-4 py-2">Due Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Edit</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    {billsData?.length > 0 && billsData?.map((item: any, index: any) =>
                        <tbody key={index} className="divide-y divide-gray-200">
                            <tr className="whitespace-nowrap font-medium text-gray-900 text-center">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{item.value}</td>
                                <td className="px-4 py-2">{item.type}</td>
                                <td className="px-4 py-2">{item.due_date.substring(5, 10)}</td>
                                <td className="px-4 py-2">get status</td>
                                <td className=" px-4 py-2">
                                    <a href="#"
                                        className="inline-block rounded bg-green-500 px-4 py-2 text-xs font-medium text-white hover:bg-green-700">
                                        Edit
                                    </a>
                                </td>
                                <td className=" px-4 py-2">
                                    {/* <a
                                        onClick={() => deleteEntry(item._id)}
                                        href="#"
                                        className="inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-700">
                                        Delete
                                    </a> */}
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>

            <Navbar isHome={false} isNote isProfile={false} />
        </>
    )
}
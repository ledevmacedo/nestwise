import { NextResponse } from "next/server";
import { client } from "@/database"
export const revalidate = 0;
//list all entries
export async function GET() {
    await client.connect();
    const bills = client.db(process.env.MONGO_DB_NAME).collection("bills")
    const billsData = await bills.find({}).toArray()
    return NextResponse.json({ billsData })
}


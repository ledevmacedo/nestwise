import { NextResponse } from "next/server";
import { client } from "@/database"
export const revalidate = 0;
//list all entries
export async function GET() {
    await client.connect();
    const houses = client.db(process.env.MONGO_DB_NAME).collection("houses")
    const housesData = await houses.find({}).toArray()
    return NextResponse.json({ housesData })
}


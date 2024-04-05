import { NextResponse } from "next/server";
import { client } from "@/database"
export const revalidate = 0;
//list all entries
export async function GET() {
    await client.connect();
    const users = client.db(process.env.MONGO_DB_NAME).collection("users")
    const usersData = await users.find({}).toArray()
    return NextResponse.json({ usersData })
}


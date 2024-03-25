import { NextResponse } from "next/server";

export const GET = async () => {
    const result = await fetch(process.env.API_URL, {
        headers: {
            'Content-type': 'application/json'
        }
    })
    const users = await result.json()
    return NextResponse.json({ data: users })
};

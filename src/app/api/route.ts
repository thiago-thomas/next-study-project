import { NextRequest, NextResponse } from "next/server";

//Caching GET method
//export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  return NextResponse.json({ hello: 'world!' })
}
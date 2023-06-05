import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // default is static

export async function GET(request) {
  console.log("I'm an app dir (dynamic) test");
  return NextResponse.json({ name: "APP DIR DYNAMIC" });
}

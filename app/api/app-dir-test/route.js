import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("I'm an app dir (default, static) test");
  return NextResponse.json({ name: "APP DIR" });
}

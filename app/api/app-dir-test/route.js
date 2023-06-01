import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("I'm an app dir test");
  return NextResponse.json({ name: "APP DIR" });
}

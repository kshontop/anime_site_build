import VostFree from "@/provider/vostfree";
import { NextResponse } from "next/server";

export async function GET() {
  const vostfree = new VostFree();
  return NextResponse.json(await vostfree.getTopAnimeVF());
}

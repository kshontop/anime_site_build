import VostFree from "@/provider/vostfree";
import { NextResponse } from "next/server";
import puppeteer, { Browser, Page } from "puppeteer";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const vostfree = new VostFree();

  const browser: Browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox"],
  });
  const page: Page = await browser.newPage();
  let details = await vostfree.getInfo(params.id, page);
  await browser.close();
  return NextResponse.json(details);
}

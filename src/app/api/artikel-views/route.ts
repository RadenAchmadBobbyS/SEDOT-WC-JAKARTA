import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/artikel-views.json");

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const { views } = JSON.parse(data);
    return NextResponse.json({ views });
  } catch (err) {
    // Jika file belum ada, return 0
    return NextResponse.json({ views: 0 });
  }
}

export async function POST() {
  try {
    let views = 0;
    try {
      const data = await fs.readFile(filePath, "utf-8");
      views = JSON.parse(data).views || 0;
    } catch {}
    views++;
    await fs.writeFile(filePath, JSON.stringify({ views }), "utf-8");
    return NextResponse.json({ views });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update views" }, { status: 500 });
  }
}

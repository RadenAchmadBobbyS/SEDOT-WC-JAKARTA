
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "sedotwcjakarta";
const collectionName = "artikelViews";

let cachedClient: MongoClient | null = null;
async function getClient() {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }
  return cachedClient;
}


export async function GET() {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    const col = db.collection<{ _id: string; views: number }>(collectionName);
    const doc = await col.findOne({ _id: "global" });
    const views = doc?.views || 0;
    return NextResponse.json({ views });
  } catch {
    return NextResponse.json({ views: 0 });
  }
}


export async function POST() {
  try {
    const client = await getClient();
    const db = client.db(dbName);
    const col = db.collection<{ _id: string; views: number }>(collectionName);
    const result = await col.findOneAndUpdate(
      { _id: "global" },
      { $inc: { views: 1 } },
      { upsert: true, returnDocument: "after" }
    );
    const views = (result && "views" in result ? (result as { views: number }).views : undefined) || 1;
    return NextResponse.json({ views });
  } catch {
    return NextResponse.json({ error: "Failed to update views" }, { status: 500 });
  }
}

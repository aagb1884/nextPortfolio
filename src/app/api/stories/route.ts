import { stories } from "@/app/apps/light/data/stories";

export async function GET() {
  // For example, fetch data from your DB here
  return new Response(JSON.stringify(stories), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

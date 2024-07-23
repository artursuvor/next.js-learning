// Force dynamic rendering of the page/component by Next.js
export const dynamic = "force-dynamic";

export async function GET() {
    return Response.json({
        time: new Date().toLocaleString(),
    })
}
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");

    return new Response("<h1>Profile api data<h1>", {
        headers: {
            "Content-type": "text/html",
            "Set-Cookie": "theme=dark",
        },
    });
}

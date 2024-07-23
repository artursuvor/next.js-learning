import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

// Define an asynchronous function to handle GET requests
export async function GET(request: NextRequest) {
    // Create a new Headers object from the request headers
    const requestHeaders = new Headers(request.headers);
    
    // Get the headers from the current context using the `headers` function from "next/headers"
    const headerList = headers();

    // Set a cookie named "resultsPerPage" with the value "20"
    cookies().set("resultsPerPage", "20");
    
    // Retrieve the value of the "theme" cookie from the request
    const theme = request.cookies.get("theme");
    
    // Log the value of the "Authorization" header from the request headers
    console.log(requestHeaders.get("Authorization"));
    
    // Log the value of the "Authorization" header from the current context headers
    console.log(headerList.get("Authorization"));
    
    // Log the value of the "theme" cookie from the request
    console.log(theme);
    
    // Log the value of the "resultsPerPage" cookie that was just set
    console.log(cookies().get("resultsPerPage"));

    // Return a new Response object with HTML content and custom headers
    return new Response("<h1>Profile api data<h1>", {
        headers: {
            "Content-type": "text/html", // Set the content type to "text/html"
            "Set-Cookie": "theme=dark",  // Set a cookie named "theme" with the value "dark"
        },
    });
}
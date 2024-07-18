import Link from "next/link";

export const metadata = {
    title: "Hello I'm Metadata About page",
};

export default function About(){
    return (
        <>
            <h1>About</h1>
            <Link href="/">Home</Link>
        </>
    );
};
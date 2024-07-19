import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Hello I'm Metadata About page"
    }
};


export default function About(){
    return (
        <>
            <h1>About</h1>
            <Link href="/">Home</Link>
        </>
    );
};
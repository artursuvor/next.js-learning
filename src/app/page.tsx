import Link from "next/link"

export default function Home(){
    return (
        <>
            <h1>Welcome!</h1>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/profile/products">Products</Link>
            <Link href="/docs">Docs</Link>
        </>
    );
}
import Link from "next/link"

export default function Home(){
    return (
        <>
            <h1>Welcome!</h1>
            <Link href="/about">About</Link><br/>
            <Link href="/dashboard">Dashboard</Link><br/>
            <Link href="/profile">Profile</Link><br/>
            <Link href="/profile/products">Products</Link><br/>
            <Link href="/comments">comments</Link><br/>
            <Link href="/complex-dashboard">complex-dashboard</Link><br/>
            <Link href="/f1">f1</Link><br/>
            <Link href="/hello">hello</Link><br/>
            <Link href="/order-product">order-product</Link><br/>
            <Link href="/photo-feed">photo-feed</Link><br/>
            <Link href="/profile">profile</Link><br/>
            <Link href="/docs">Docs</Link><br/><br/><br/><br/>
            <Link href="/server">Server</Link><br/>
            <Link href="/server/client-route">client route</Link><br/>
            <Link href="/server/server-route">Server route</Link><br/>
        </>
    );
}
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css";

const navLinks = [
    {name: "Register", href: "/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"},
];

export default function AuthLayOut({
    children,
}: {
    children: React.ReactNode;
}){
    const pathname = usePathname();    
    return(
        <>
            <h2 style={{ backgroundColor: '#e8d6e2' }}>Layout Auth</h2>
            {children}

            {
                navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return(
                        <Link 
                            className={isActive ? "font-bold mr-4" : "text-red-400 mr-4"}
                            href={link.href} 
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    );
                })
            }
        </>
    );
}
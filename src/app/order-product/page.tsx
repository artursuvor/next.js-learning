"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing oreder...");
        router.replace("/"); //router.push("/") router.forward("/") router.back()
    };
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    );
}
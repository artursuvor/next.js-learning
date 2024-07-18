import Link from "next/link"

export default function Products(){
    const productId = 30;
    return( 
        <>
            <Link href="/">Home</Link>
            <h1>Products</h1>
            <h2>
                <Link href="/profile/products/1">Product 1</Link>
            </h2>
            <h2>
                <Link href="/profile/products/2">Product 2</Link>
            </h2>
            <h2>
                <Link href="/profile/products/3" replace>Product 3</Link>
            </h2>
            <h2>
                <Link href={`/profile/products/${productId}`}>Product {productId}</Link>
            </h2>
        </>
    )
}
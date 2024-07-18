export default function ProductsDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return(
        <>
            {children}
            <h2 style={{ backgroundColor: '#d8d0d2' }}>Featured Products</h2>
        </>
    );
}
import { Metadata } from "next";

type Props = {
    params: Promise<{
        productId: string;
    }>;
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
    const params = await props.params;
    const title = await new Promise( resolve =>
    {
        setTimeout(() => {
            resolve(`Iphone ${params.productId}`)
        }, 100);
    }
    )
    return {
        title: `Product ${title}`,
    };
};

export default async function ProductsDetails(props: Props) {
    const params = await props.params;
    return <h1>Details about product {params.productId}</h1>
}
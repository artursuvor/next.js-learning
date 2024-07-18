import NotFound from "@/app/not-found";

export default function ProductsDetail({
    params, 
}: {
    params: {
        productsId: string;
        reviewsId: string;
    };
})
{
    console.log(parseInt(params.reviewsId))
    if (parseInt(params.reviewsId) > 100){
        return NotFound();
    }
    return (
        <h1>Review {params.reviewsId} for Products detail for {params.productsId}</h1>
    )   
}   
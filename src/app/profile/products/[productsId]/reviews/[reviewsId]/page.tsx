"use client";
import NotFound from "@/app/not-found";

function getRandomInt(count: number){
    return Math.floor(Math.random() * count);
}

export default function ProductsDetail({
    params, 
}: {
    params: {
        productsId: string;
        reviewsId: string;
    };
})
{
    const random = getRandomInt(2);
    if (random === 1){
        throw new Error("Error loading review");
    }

    console.log(parseInt(params.reviewsId))
    if (parseInt(params.reviewsId) > 100){
        return NotFound();
    }
    return (
        <h1>Review {params.reviewsId} for Products detail for {params.productsId}</h1>
    )   
}   
"use client"

import { Product } from "@prisma/client";
import Image from "next/image";

import RouterBack from "@/app/[slug]/components/routerBack";
import RouterPedido from "@/app/[slug]/components/routerPedido";

interface ProductHeaderProps {
    product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
    return ( 
        <div className="relative h-[300px] w-full">
            <RouterBack className="absolute left-4 top-4 z-50"/>
            <Image 
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
            />
            <RouterPedido className="absolute right-4 top-4 z-50"/>
        </div>
    );
}
 
export default ProductHeader;
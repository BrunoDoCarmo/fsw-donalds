"use client"

import { Product } from "@prisma/client";
import { ScrollTextIcon } from "lucide-react";
import Image from "next/image";

import RouterBack from "@/app/[slug]/components/routerBack";
import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
    product: Pick<Product, "name" | "imageUrl">
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
    return ( 
        <div className="relative h-[300px] w-full">
            <RouterBack/>
            <Image 
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 z-50 rounded-full"
            >
              <ScrollTextIcon />
            </Button>
        </div>
    );
}
 
export default ProductHeader;
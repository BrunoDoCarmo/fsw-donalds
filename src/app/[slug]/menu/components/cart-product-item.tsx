import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../content/cart";

interface CardItemProps {
    product: CartProduct
}

const CardProductItem = ({product}: CardItemProps) => {
    const {decreaseProductQuantity,increaseProductQuantity, removeProduct} = useContext(CartContext)
    return ( 
        <div className="flex items-center justify-between">
            {/* ESQUERDA */}
            <div className="flex item-center gap-3">
                <div className="relative h-20 w-20 bg-gray-100 rounded-xl">
                    <Image src={product.imageUrl} alt={product.name} fill />
                </div>
                <div className="space-y-1">
                    <p className="text-xs max-w-[90%] truncate text-ellipsis">{product.name}</p>
                    <p className="text-sm font-semibold">{formatCurrency(product.price)}</p>
                    {/* QUANTIDADE */}
                    <div className="flex items-center gap-1 text-center">
                        <Button className="w-7 h-7 rounded-lg" variant="outline" onClick={() => decreaseProductQuantity(product.id)}>
                            <ChevronLeftIcon/>
                        </Button>
                        <p className="text-xs w-7">{product.quantity}</p>
                        <Button className="w-7 h-7 rounded-lg" variant="destructive" onClick={() => increaseProductQuantity(product.id)}>
                            <ChevronRightIcon/>
                        </Button>
                    </div>
                </div>
            </div>
            {/* DIRETA */}
            <Button className="w-7 h-7 rounded-lg" variant="outline" onClick={() => removeProduct(product.id)}>
                <TrashIcon/>
            </Button>
        </div>
     );
}
 
export default CardProductItem;
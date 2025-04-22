import { useContext } from "react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";

import { CartContext } from "../content/cart";
import CartProductItem from "./cart-product-item";

const CartSheet = () => {
  const {isOpen, toggleCard, products} = useContext(CartContext);
    return ( 
        <Sheet open={isOpen} onOpenChange={toggleCard}>
            <SheetContent className="w-[80%]">
                <SheetHeader>
                    <SheetTitle className="text-left">Sacola</SheetTitle>
                </SheetHeader>
                <div className="py-5">
                    {products.map((product) => (
                        <CartProductItem key={product.id} product={product}/>
                    ))}
                </div>
            </SheetContent>
        </Sheet> 
    );
}
 
export default CartSheet;
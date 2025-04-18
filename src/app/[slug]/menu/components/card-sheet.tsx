import { useContext } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";

import { CardContext } from "../content/cart";

const CardSheet = () => {
  const {isOpen, toggleCard, products} = useContext(CardContext);
    return ( 
        <Sheet open={isOpen} onOpenChange={toggleCard}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
                {products.map((product) => (
                    <h1 key={product.id}>{product.name} - {product.quantity}</h1>
                ))}
            </SheetContent>
        </Sheet> 
    );
}
 
export default CardSheet;
"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CardProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {   
    quantity: number;
} 

export interface ICardContext {
    isOpen: boolean;
    product: CardProduct[]
    toggleCard: () => void;
}

export const CardContext = createContext<ICardContext>({
    isOpen: false,
    product: [],
    toggleCard: () => {},
});

export const CardProvider = ({ children}: { children: ReactNode }) => {
    const [product, setProduct] = useState<CardProduct[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleCard = () => {
        setIsOpen((prev) => !prev);
    }
    return (
        <CardContext.Provider
            value={{
                isOpen,
                product,
                toggleCard
            }}
        >
            {children}
        </CardContext.Provider>
    )
};
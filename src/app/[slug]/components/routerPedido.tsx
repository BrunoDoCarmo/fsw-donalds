"use client"

import { ScrollTextIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RouterPedidoProps {
    className?: string;
}

const RouterPedido = ({className}: RouterPedidoProps) => {
    const { slug } = useParams<{ slug: string }>();
    return (
        <Link href={`/${slug}/orders`}>
            <Button
                variant="secondary"
                size="icon"
                className={`${className} rounded-full`}
            >
                <ScrollTextIcon />
            </Button>
        </Link>
    );
}
 
export default RouterPedido;
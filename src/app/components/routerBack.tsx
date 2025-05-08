"use client"

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RouterBackProps {
    className?: string; 
}

const RouterBack = ({className}: RouterBackProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();
    return ( 
         <Button
            variant="secondary"
            size="icon"
            className={`${className} rounded-full`}
            onClick={handleBackClick}
        >
            <ChevronLeftIcon />
        </Button>
     );
}
 
export default RouterBack;
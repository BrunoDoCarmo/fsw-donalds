"use client"

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";


const RouterBack = () => {
  const router = useRouter();
  const handleBackClick = () => router.back();
    return ( 
         <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-4 z-50 rounded-full"
            onClick={handleBackClick}
        >
            <ChevronLeftIcon />
        </Button>
     );
}
 
export default RouterBack;
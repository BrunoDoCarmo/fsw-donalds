"use client";

import { Restaurant } from "@prisma/client";
import Image from "next/image";

import RouterBack from "../../components/routerBack";
import RouterPedido from "../../components/routerPedido";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  
  return (
    <div className="relative h-[250px] w-full">
      <RouterBack className="absolute left-4 top-4 z-50"/>
      <Image
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
        className="object-cover"
      />
      <RouterPedido className="absolute right-4 top-4 z-50"/>
    </div>
  );
};

export default RestaurantHeader;

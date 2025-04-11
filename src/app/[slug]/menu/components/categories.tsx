"use client";

// import { MenuCategory, Prisma } from "@prisma/client";
// import { Restaurant } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { RestaurantWithMenu } from "./restaurant-with-menu";

interface RestaurantCategoriesProps {
  restaurant: RestaurantWithMenu;
}

type MenuCategoryWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategoryWithProducts>(restaurant.menuCategories[0]);
    const handleCategoryClick = (category:MenuCategoryWithProducts) => {
        // Handle category click logic here
        setSelectedCategory(category);
    }
    const getCategoryButtonVariant = (category: MenuCategoryWithProducts) => {
        return selectedCategory.id === category.id ? "default" : "secondary"
    }
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
        <div className="p-5">
            <div className="flex items-center gap-3">
                <Image
                    src={restaurant.avatarImageUrl}
                    alt={restaurant.name}
                    width={45}
                    height={45}
                />
                <div>
                    <h2 className="text-lg font-semibold">{restaurant.name}</h2>
                    <p className="text-xs opacity-55">{restaurant.description}</p>
                </div>
            </div>
            <div className="text-sx mt-3 flex items-center gap-1 text-green-500">
                <ClockIcon size={12} />
                <p>Aberto!</p>
            </div>
        </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant.menuCategories.map(category => (
            <Button onClick={() => handleCategoryClick(category)} key={category.id} variant={getCategoryButtonVariant(category)} className="sm">
                {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RestaurantCategories;

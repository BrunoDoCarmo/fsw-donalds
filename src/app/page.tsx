import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCard from "./restaurantCard";

const HomePage = async () => {
  const restaurant = await db.restaurant.findMany();
  if (!restaurant || restaurant.length === 0) {
    return notFound();
  }

  return (
    <div>
      {restaurant.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          name={restaurant.name}
          slug={restaurant.slug}
          avatarImageUrl={restaurant.avatarImageUrl}
        />
      ))}
    </div>
  );
};

export default HomePage;

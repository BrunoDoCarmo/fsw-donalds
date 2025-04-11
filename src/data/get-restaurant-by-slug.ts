import { Prisma } from "@prisma/client";

import { db } from "@/lib/prisma";

export const getRestaurantBySlug = async (
  slug: string,
  options?: Omit<Prisma.RestaurantFindUniqueArgs, "where">,
) => {
  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    ...options,
  });
  return restaurant;
};

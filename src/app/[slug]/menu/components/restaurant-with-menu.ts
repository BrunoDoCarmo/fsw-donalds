import { Prisma } from "@prisma/client";

export const restaurantWithMenu = Prisma.validator<Prisma.RestaurantDefaultArgs>()({
  include: {
    menuCategories: {
      include: {
        products: true,
      },
    },
  },
});

export type RestaurantWithMenu = Prisma.RestaurantGetPayload<typeof restaurantWithMenu>;
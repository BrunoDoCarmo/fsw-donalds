"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantCardProps {
  name: string;
  slug: string;
  avatarImageUrl: string;
}

const RestaurantCard = ({
  name,
  slug,
  avatarImageUrl,
}: RestaurantCardProps) => {
  const router = useRouter();
  const handlePushClick = () => router.push(`/${slug}`);
  return (
    <div className="m-4 flex h-[100px] items-center rounded-xl">
      <Button
        variant="secondary"
        className="relative h-[100px] w-full border border-black"
        onClick={handlePushClick}
      >
        {/* LOGO E TITULO */}
        <Image src={avatarImageUrl} alt={name} width={82} height={82} />
        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="text-center">{name}</h1>
        </div>
      </Button>
    </div>
  );
};

export default RestaurantCard;

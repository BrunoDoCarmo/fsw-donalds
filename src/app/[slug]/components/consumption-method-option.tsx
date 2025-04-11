import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageAlt,
  imageUrl,
  buttonText,
  option,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <Link
          href={`/${slug}/menu?consumptionMethod=${option}`}
          className="flex flex-col items-center"
        >
          <div className="relative h-[80px] w-[80px]">
            <Image
              src={imageUrl}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={imageAlt}
              className="object-contain"
            />
          </div>
          <h2 className="mt-4">{buttonText}</h2>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOption;

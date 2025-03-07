"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface ProductProps {
  onClick: () => void;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

export default function CardProducts({
  onClick,
  title,
  price,
  description,
  imageUrl,
}: ProductProps) {
  return (
    <Card className="py-4" onPress={onClick} isPressable>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4> {/* Van title */}
        <small className="text-default-500">{price} / day</small> {/* Price */}
        <p className="text-tiny">{description}</p> {/* Description */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="w-full h-64 overflow-hidden">
          {" "}
          {/* Set height here */}
          <Image
            alt={title} // Van title as alt text
            className="object-cover w-full h-full rounded-xl" // Make image cover the container
            src={imageUrl} // Image URL for the van
          />
        </div>
      </CardBody>
    </Card>
  );
}

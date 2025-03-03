"use client";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

interface ProductProps {
  onClick: () => void; // onClick handler passed from the parent to trigger opening the drawer
}

export default function CardProducts(props: ProductProps) {
  return (
    <Card className="py-4" onPress={props.onClick} isPressable>
      {" "}
      {/* Trigger onClick on card press */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">1000 / Day</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="https://heroui.com/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
  );
}

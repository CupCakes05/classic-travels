"use client";
import React, { useState } from "react";
import Heading from "./heading";
import CardProducts from "./card_products";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";

function Products() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const vanData = [
    {
      title: "Luxury Van",
      price: "$100",
      description:
        "A spacious van perfect for group trips, with all modern amenities.",
      imageUrl: "/assets/traveller2.jpg",
    },
    {
      title: "Economy Van",
      price: "$50",
      description: "A cost-effective van for smaller groups.",
      imageUrl: "/assets/traveller3.jpg",
    },
    {
      title: "Family Van",
      price: "$75",
      description: "Ideal for family trips with extra seating and storage.",
      imageUrl: "/assets/traveller2.jpg",
    },
    {
      title: "Luxury Bus",
      price: "$200",
      description:
        "A large van with all luxury features, great for corporate trips.",
      imageUrl: "/assets/traveller3.jpg",
    },
    {
      title: "Luxury Van",
      price: "$100",
      description:
        "A spacious van perfect for group trips, with all modern amenities.",
      imageUrl: "/assets/traveller2.jpg",
    },
    {
      title: "Economy Van",
      price: "$50",
      description: "A cost-effective van for smaller groups.",
      imageUrl: "/assets/traveller3.jpg",
    },
    {
      title: "Family Van",
      price: "$75",
      description: "Ideal for family trips with extra seating and storage.",
      imageUrl: "/assets/traveller2.jpg",
    },
    {
      title: "Luxury Bus",
      price: "$200",
      description:
        "A large van with all luxury features, great for corporate trips.",
      imageUrl: "/assets/traveller3.jpg",
    },
    // Add more van data as needed...
  ];
  const [selectedImage, setSelectedImage] = useState("/assets/seats.jpg");

  const handleImageSelection = (src: string) => {
    setSelectedImage(src);
  };

  return (
    <div>
      <Heading text="Travellers" type="h1" colour="text-blue-500" size="64px" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {vanData.map((van, index) => (
          <CardProducts
            key={index}
            title={van.title}
            price={van.price}
            description={van.description}
            imageUrl={van.imageUrl}
            onClick={() => onOpen()} // Pass van details to the onClick handler
          />
        ))}
      </div>
      <Drawer size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">Selected Van</h2>
              </DrawerHeader>

              <DrawerBody>
                {/* Selected Image at the top */}
                <div className="w-full h-full mb-4 overflow-hidden rounded-xl">
                  <Image
                    alt="Selected Van Image"
                    className="object-contain w-full h-full" // Use object-contain to ensure the image fits without clipping
                    src={selectedImage} // Dynamically set the selected image
                    layout="intrinsic" // Keeps the image responsive while maintaining its aspect ratio
                    width={1000} // Provide width for intrinsic aspect ratio
                    height={1000} // Provide height for intrinsic aspect ratio
                  />
                </div>

                {/* Scrollable thumbnails */}
                <div className="w-full overflow-x-auto flex gap-4 py-2">
                  {/* Thumbnails for other images */}
                  <div
                    className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => handleImageSelection("/assets/seats.jpg")}
                  >
                    <Image
                      alt="Van Image 1"
                      className="object-cover w-full h-full"
                      src="/assets/seats.jpg"
                      layout="responsive"
                      width={1000}
                      height={1000}
                    />
                  </div>

                  <div
                    className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => handleImageSelection("/assets/seats2.jpg")}
                  >
                    <Image
                      alt="Van Image 2"
                      className="object-cover w-full h-full"
                      src="/assets/seats2.jpg"
                      layout="responsive"
                      width={128}
                      height={128}
                    />
                  </div>

                  <div
                    className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl cursor-pointer"
                    onClick={() =>
                      handleImageSelection("/assets/traveller2.jpg")
                    }
                  >
                    <Image
                      alt="Van Image 3"
                      className="object-cover w-full h-full"
                      src="/assets/traveller2.jpg"
                      layout="responsive"
                      width={128}
                      height={128}
                    />
                  </div>

                  {/* Add more thumbnails as needed */}
                </div>

                {/* Description */}
                <div className="mt-4 text-sm text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p className="mt-2">
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </div>
              </DrawerBody>

              <DrawerFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Products;

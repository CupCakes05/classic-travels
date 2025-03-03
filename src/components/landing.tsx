"use client";
import { Button, DateRangePicker, Input } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Line from "./line";

function Landing() {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image using flex */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={"/assets/dummy.png"}
          alt="landing page background"
          layout="fill"
          objectFit="cover"
          className="blur-md"
        />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 min-h-screen flex justify-center items-center">
        <div className="text-center max-w-max">
          <h1 className="text-white text-[74px] font-bold  mb-6">
            Looking to save more on your rental Van?
          </h1>
          <div className="bg-white p-5 text-black flex flex-col lg:flex-row items-center justify-between gap-6 rounded-xl max-h-max">
            <h4 className="text-lg">Need to Rent a Van?</h4>
            <Line height="h-10" width="w-1" colour="bg-blue-500" />

            <div className="flex gap-6 items-center">
              <Input
                label="Full Name"
                placeholder="Enter Full Name"
                type="text"
                className="max-w-xs"
              />
              <Line height="h-10" width="w-1" colour="bg-blue-500" />

              <Input
                label="Mobile No"
                placeholder="Enter Phone No."
                type="number"
                className="max-w-xs"
              />
              <Line height="h-10" width="w-1" colour="bg-blue-500" />

              <DateRangePicker className="max-w-xs" label="Stay Duration" />
              <Line height="h-10" width="w-1" colour="bg-blue-500" />

              <Button color="primary" size="lg" className="text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

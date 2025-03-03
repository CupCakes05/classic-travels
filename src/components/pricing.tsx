"use client";
import React from "react";
import Heading from "./heading";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableColumn,
} from "@heroui/react";

function Pricing() {
  const rentalData = [
    {
      vehicle: "Compact Car",
      pricingType: "Per Day",
      price: 3500,
      availability: "Available",
    },
    {
      vehicle: "Luxury Sedan",
      pricingType: "Per Day",
      price: 11000,
      availability: "Available",
    },
    {
      vehicle: "SUV",
      pricingType: "Per Day",
      price: 8500,
      availability: "Unavailable",
    },
    {
      vehicle: "Scooter",
      pricingType: "Per Kilometer",
      price: 25,
      availability: "Available",
    },
    {
      vehicle: "Motorcycle",
      pricingType: "Per Hour",
      price: 120,
      availability: "Available",
    },
    {
      vehicle: "RV",
      pricingType: "Per Day",
      price: 18500,
      availability: "Unavailable",
    },
  ];
  return (
    <div>
      <Heading text="Pricing" type="h1" colour="text-blue-500" size="64px" />
      <Table aria-label="Traveler Rent Service Pricing">
        <TableHeader>
          <TableColumn>VEHICLE/SERVICE</TableColumn>
          <TableColumn>PRICING TYPE</TableColumn>
          <TableColumn>PRICE (INR)</TableColumn>
          <TableColumn>AVAILABILITY</TableColumn>
        </TableHeader>
        <TableBody>
          {rentalData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.vehicle}</TableCell>
              <TableCell>{item.pricingType}</TableCell>
              <TableCell>{`₹${item.price.toLocaleString()}`}</TableCell>
              {/* Displaying price in INR */}
              <TableCell>{item.availability}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Pricing;

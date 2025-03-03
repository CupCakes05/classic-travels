import Products from "@/components/products";
import Landing from "@/components/landing";
import Pricing from "@/components/pricing";
import { Spacer } from "@heroui/react";

export default function Home() {
  return (
    <div>
      <main>
        <Landing />
        <Spacer />
        <Products />
        <Spacer />
        {/* <Pricing /> */}
      </main>
    </div>
  );
}

import { Carousel } from "..";
import { Button } from "../global/button";

export const Products = () => {
  return (
    <div className="bg-counter text-white md:px-20 md:py-20  flex flex-col gap-20 overflow-hidden">
      <h2 className="pt-14 md:pp-0 text-4xl md:text-6xl font-bold text-center">
        Lorem ipsum dolor sit amet
      </h2>
      <Carousel className="" />
      <Button
        label="View all"
        type="secondary"
        href="#"
        className="mt-14 self-center mb-10"
      />
    </div>
  );
};

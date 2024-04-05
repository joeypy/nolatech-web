import { ItemService } from "..";
import { Button } from "../global/button";
export const Services = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#F5F6FA] mx-auto p-12 py-20">
      <h1 className="text-center font-bold text-[4rem]">Lorem Ipsum</h1>
      <p className="text-center mx-auto max-w-[600px] font-bold ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        omnis accusamus accusantium sint tempora ex, soluta temporibus velit ut
        id aliquam minus reiciendis delectus eius.
      </p>

      <div className="flex flex-col gap-10 md:flex-row md:justify-center md:gap-5">
        <ItemService label="lorem ipsum" srcImg="/Pic2.png" />
        <ItemService label="lorem ipsum" srcImg="/Pic3.png" />
        <ItemService label="lorem ipsum" srcImg="/Pic4.png" />
      </div>

      <Button label="learn more" href="#" type="outline" />
    </div>
  );
};

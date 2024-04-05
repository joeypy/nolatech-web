import { Button } from "..";

export const News = () => {
  return (
    <div className="bg-[url('/Pic6.png')] bg-no-repeat bg-cover w-full h-[760px] flex flex-col lg:flex-row ">
      <div className="flex flex-col gap-10 items-start justify-center max-w-[700px] h-full p-10 lg:p-20 ">
        <h2 className="text-4xl lg:text-6xl font-bold text-black tracking-wide lg:leading-[4rem]">
          Lorem ipsum <br /> dolor sit
        </h2>
        <p className="font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          officia nihil expedita dolor praesentium architecto cumque ratione
          doloribus. Quae, odio!
        </p>
        <div className="flex flex-col lg:max-w-[80%] max-w-[400px] gap-5 mt-10 lg:mt-0">
          <Button label="View all" href="#" type="primary" />
        </div>
      </div>
    </div>
  );
};

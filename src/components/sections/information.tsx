import { Button } from "../global/button";
export const Information = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-primary flex-1">
        <div className="flex flex-col items-center justify-between h-full p-10 lg:p-20">
          <h2 className="text-6xl font-bold text-white tracking-wide leading-[4rem]">
            Lorem ipsum <br /> dolor sit <br /> amet, <br /> consetetur
          </h2>
          <div className="flex flex-col lg:max-w-[80%] max-w-[400px] gap-5 mt-10 lg:mt-0">
            <Button label="lorem ipsum dolor sit" href="#" type="secondary" />
            <Button
              label="lorem ipsum dolor sit amet"
              href="#"
              type="inverse"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-start lg:items-end bg-[#04C859] ">
        <img
          src="/Pic5.png"
          alt=""
          className="mt-10 max-h-[560px] md:max-w-[560px]"
          width="auto"
          height="auto"
        />
      </div>
    </div>
  );
};

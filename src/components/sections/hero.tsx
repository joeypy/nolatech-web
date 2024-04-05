import { Button, Header, Navbar } from "..";

export const Hero = () => {
  return (
    <div>
      <Header className="w-full" />
      <div className="md:flex-row  bg-[url('/header.png')] bg-no-repeat bg-cover w-full md:h-[900px] h-full p-[2.2rem]">
        <div className="flex flex-col md:flex-row">
          <div className="w-full pb-4 md:p-0 flex-1 flex justify-center md:justify-start">
            <img
              src="/icongrab.png"
              alt=""
              className="min-w-[200px] h-[75px]"
            />
          </div>

          <div className="flex flex-10 flex-col justify-center gap-[7rem] h-full lg:items-start text-white p-5 md:pr-[6rem] md:pl-[3rem]">
            <Navbar />
            <div className="font-bold uppercase text-[3rem] md:text-[4rem]">
              <h1 className="text-white">Lorem ipsum</h1>
              <h1 className="text-black bg-white">Lorem ipsum dolor</h1>
              <h1 className="text-white">Lorem ipsum</h1>
            </div>

            <Button
              label="what is next"
              href="#"
              type="primary"
              className="self-center lg:self-start "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

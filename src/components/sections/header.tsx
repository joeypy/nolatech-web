import { BiPlayCircle } from "react-icons/bi";
import { PiBroadcastFill } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col md:flex-row items-center gap-5 h-auto md:h-[45px] children-full-height justify-center bg-primary shadow-xl w-full",
        className
      )}
    >
      <span className="flex items-center gap-2 bg-red-500 text-white px-2 font-bold ">
        <span className="uppercase tracking-widest text-3xl">live</span>{" "}
        <PiBroadcastFill size={32} />
      </span>
      <span className="flex items-center px-3 text-white text-2xl">
        Lorem ipsum dolor sit amet
      </span>
      <a
        href="/"
        className="flex items-center gap-2  text-white hover:text-white bg-secondary font-bold px-5"
      >
        <span className="text-lg ">JOIN NOW!</span>
        <BiPlayCircle size={35} />
      </a>
    </div>
  );
};

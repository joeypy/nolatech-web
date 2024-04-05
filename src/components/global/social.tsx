import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaTiktok } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="fixed top-[40%] right-0 z-50">
      <a href="#">
        <FaTwitter className="w-[50px] h-[50px] p-2 border-2 border-[#7B7A79] bg-[#9A9A9A]" />
      </a>
      <a href="#">
        <FaFacebookF className="w-[50px] h-[50px] p-2 border-2 border-[#7B7A79] bg-[#9A9A9A]" />
      </a>
      <a href="#">
        <FaInstagram className="w-[50px] h-[50px] p-2 border-2 border-[#7B7A79] bg-[#9A9A9A]" />
      </a>
      <a href="#">
        <TfiYoutube className="w-[50px] h-[50px] p-2 border-2 border-[#7B7A79] bg-[#9A9A9A]" />
      </a>
      <a href="#">
        <FaTiktok className="w-[50px] h-[50px] p-2 border-2 border-[#7B7A79] bg-[#9A9A9A]" />
      </a>
    </div>
  );
};

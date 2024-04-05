import { twMerge } from "tailwind-merge";

type ButtonType = "primary" | "secondary" | "outline" | "inverse";

type Props = {
  label: string;
  href: string;
  className?: string;
  type?: ButtonType;
};

export const Button = ({ label, className, type = "primary", href }: Props) => {
  const baseStyle =
    "min-w-[250px] text-center max-w-full text-[1.3rem] px-8 py-4 uppercase rounded font-bold ";

  const typeStyles = {
    primary: "bg-primary text-white border border-primary",
    secondary: "bg-white text-black border border-white font-black",
    outline: "bg-transparent text-black border border-black font-black",
    inverse: "bg-transparent text-white border border-white font-black",
  };

  const buttonStyle = twMerge(baseStyle, typeStyles[type], className);

  return (
    <a href={href} className={buttonStyle}>
      {label}
    </a>
  );
};

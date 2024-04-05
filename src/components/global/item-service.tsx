type Props = {
  label: string;
  srcImg: string;
};

export const ItemService = ({ label, srcImg }: Props) => {
  return (
    <div className="flex flex-col">
      <img src={srcImg} alt={label} />
      <div className=" bg-primary text-center w-full p-5">
        <span className="tracking-wide text-white uppercase font-bold ">
          {label}
        </span>
      </div>
    </div>
  );
};

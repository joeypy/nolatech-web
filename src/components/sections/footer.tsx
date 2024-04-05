export const Footer = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:gap-0 px-20 py-8">
      <div className="center-content text-sm font-bold ">
        <p className="max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          error quod illo dolore facere unde dolores praesentium
        </p>
      </div>
      <div className="center-content">
        <img className="w-[150px]" src="/icongrab.png" alt="icongrab" />
      </div>
      <p className="center-content font-bold">
        All rights reserved to <br /> Lorem Ipsum© 2022
      </p>
    </div>
  );
};

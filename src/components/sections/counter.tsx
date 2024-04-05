export const Counter = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-10 md:flex-row py-10 px-10 bg-counter">
      <p className="flex-1 min-w-[400px] text-2xl text-white font-bold">
        Lorem ipsum dolor sit amet, <br />
        consetetur
      </p>

      <div className="flex w-full gap-2 ">
        <div className="center-content">
          <span className="text-white font-bold text-2xl md:text-6xl">170</span>
          <span className="text-days">days</span>
        </div>

        <div className="w-[3px] h-[100px] bg-days mx-auto"></div>

        <div className="center-content">
          <span className="text-white font-bold text-2xl md:text-6xl">13</span>
          <span className="text-days">Hour</span>
        </div>

        <div className="w-[3px] h-[100px] bg-days mx-auto"></div>

        <div className="center-content">
          <span className="text-white font-bold text-2xl md:text-6xl">39</span>
          <span className="text-days">Minutes</span>
        </div>

        <div className="w-[3px] h-[100px] bg-days mx-auto"></div>

        <div className="center-content">
          <span className="text-white font-bold text-2xl md:text-6xl">29</span>
          <span className="text-days">Seconds</span>
        </div>
      </div>
    </div>
  );
};

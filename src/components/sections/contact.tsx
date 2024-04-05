import { Button } from "../global/button";
export const Contact = () => {
  return (
    <div className="flex bg-[url('/join_us.png')] bg-no-repeat bg-cover w-full h-[900px]">
      <div className="w-full lg:w-[50%] hidden lg:flex" />

      <div className="flex flex-1 lg:w-[50%] flex-col items-center lg:items-start  gap-5 text-white py-5 pr-[6rem] pl-[3rem]">
        <h2 className="text-[3rem] lg:text-[4.2rem] font-bold uppercase">
          Join us.
        </h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>

        <form
          action="#"
          className="flex flex-col items-center w-full gap-5 form-contact max-w-[600px] "
        >
          <div className="flex flex-col lg:flex-row w-full justify-center gap-5">
            <input type="text" className="flex-1" placeholder="Name" />
            <input type="text" className="flex-1" placeholder="Username" />
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center gap-5">
            <input type="phone" className="flex-1" placeholder="Phone" />
            <input type="email" className="flex-1 " placeholder="Email" />
          </div>

          <div className="flex w-full justify-center gap-5">
            <input type="text" className="flex-1" placeholder="Name" />
          </div>
          <div className="flex w-full justify-center gap-5">
            <textarea rows={5} className="flex-1" placeholder="Mensaje" />
          </div>
        </form>

        <Button
          label="I'm in"
          href="#"
          type="primary"
          className="self-center lg:self-start"
        />

        <p className="text-[#D0CDCD] text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          consequuntur saepe iure aliquid adipisci tempora incidunt, at, enim
          vitae nobis sequi voluptatibus dicta error ad, nulla minima quaerat.
        </p>
      </div>
    </div>
  );
};

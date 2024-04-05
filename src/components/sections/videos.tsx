import { ItemVideo } from "..";
import { Button } from "../global/button";

export const Videos = () => {
  return (
    <div className="p-20">
      <h2 className="text-center font-bold text-[4.2rem]">Latest videos</h2>
      <div className="grid grid-auto-fit gap-14 mt-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <ItemVideo
            key={i}
            label="Lorem ipsum dolor sit amet, consetetur"
            src="/mov_bbb.mp4"
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button href="#" label="view all" type="primary" />
      </div>
    </div>
  );
};

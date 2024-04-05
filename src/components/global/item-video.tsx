import { useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

type Props = {
  src: string;
  label: string;
};

export const ItemVideo = ({ src, label }: Props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="video-container relative" onClick={togglePlay}>
        <div className={`${isPlaying && ""}`} />
        <video
          src={src}
          ref={videoRef}
          width="100%"
          className="max-h-[420px]"
        />

        {!isPlaying && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <button className="center-absolute">
              <FaRegCirclePlay size={70} color="white" />
            </button>
          </div>
        )}
      </div>
      <p className="mt-5 font-bold capitalize text-lg">{label}</p>
    </div>
  );
};

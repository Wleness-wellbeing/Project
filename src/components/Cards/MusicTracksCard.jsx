import React, { useEffect, useRef } from "react";

export default function MusicTracksCard(props) {
  const progressRef = useRef(null);
  const currentTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateProgressBar = () => {
    if (progressRef.current) {
      const currentTime = props.audio.currentTime;
      const duration = props.audio.duration;
      const progress = (currentTime / duration) * 100;
      progressRef.current.style.width = progress + "%";
      currentTimeRef.current.innerText = Math.round(currentTime);
    }
    if (props.isPlaying) {
      animationFrameRef.current = requestAnimationFrame(updateProgressBar);
    }
  };

  useEffect(() => {
    if (props.isPlaying) {
      props.audio.currentTime = 0; // Reset to the beginning
      props.audio.play();
      updateProgressBar();
    } else {
      props.audio.pause();
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, [props.isPlaying, props.audio]);

  return (
    <div className="group relative cursor-pointer">
      <div className="absolute inset-0 -z-10 mx-auto w-[90%] scale-y-110 bg-primary-100 p-[5px] transition-all group-hover:w-full group-hover:scale-x-110">
        <div className="h-full w-full bg-white"></div>
      </div>
      <figure className="grid h-full bg-[#E9FBF9]">
        <div className="relative mb-2 h-fit text-center">
          <img src={props.data.image} alt="" />
          <div className="absolute -bottom-3 left-1/2 w-full -translate-x-1/2">
            <span className="mx-auto inline-block rounded-2xl bg-primary-300 px-3 py-1 text-sm font-medium text-white">
              {props.data.name}
            </span>
          </div>
        </div>
        <figcaption className="flex flex-col items-center justify-between gap-y-2 px-2 py-5 text-center">
          {props.isPlaying && (
            <div className="w-full px-2 !text-left">
              <div className="bg-primary-10">
                <span
                  ref={progressRef}
                  style={{ width: "0%" }}
                  className="block h-1 rounded-full bg-primary-300"
                ></span>
              </div>
              <div className="flex justify-between text-xs">
                <small ref={currentTimeRef}></small>
                <small>
                  {Math.round(
                    (props.audio.duration / 60 + Number.EPSILON) * 100,
                  ) / 100}
                </small>
              </div>
            </div>
          )}

          <p className="text-center font-semibold">{props.data.desc}</p>
          <button className="btn-one !py-2" onClick={() => props.togglePlay()}>
            {props.isPlaying ? "Pause" : "Play Now"}
          </button>
        </figcaption>
      </figure>
    </div>
  );
}

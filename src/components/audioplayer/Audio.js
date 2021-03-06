import React from "react";
import useAudioPlayer from "./useAudioPlayer";
import Pause from "./Pause";
import Play from "./Play";
import Bar from "./Bar";
import Music from "../../song.mp3";

const Audio = () => {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
  } = useAudioPlayer();

  return (
    <div className="audio__box">
      <audio id="audio">
        <source src={Music} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      <div className="controls">
        {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
    </div>
  );
};

export default Audio;

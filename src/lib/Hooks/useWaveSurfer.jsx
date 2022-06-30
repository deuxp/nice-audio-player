import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

export function useWaveSurfer(url) {
  const waveFormRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [uVolume, setUVolume] = useState(0.5);

  useEffect(() => {
    const formWaveSurferOptions = ref => ({
      container: ref,
      waveColor: "rgba(0, 0, 0, .2)",
      progressColor: "rgb(0, 0, 0)",
      cursorColor: "rgb(63, 17, 91)",
      responsive: true,
      height: 50,
      normalize: true,
      partialRender: true,
    });
    wavesurfer.current = WaveSurfer.create(
      formWaveSurferOptions(waveFormRef.current)
    );
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", () => {
      console.log("everything is ready");
      let duration = wavesurfer.current.getDuration();
      console.log({ duration });
    });
    wavesurfer.current.on("finish", () => {
      setIsPlaying(prev => !prev);
      wavesurfer.current.seekTo(0);
    });
    return () => wavesurfer.current.destroy();
  }, [url]);

  // handle volume change coming from slider
  useEffect(() => {
    wavesurfer.current?.setVolume(uVolume);
  }, [uVolume]);

  const handlePlayPause = () => {
    wavesurfer.current.playPause();
    setIsPlaying(prev => !prev);
  };

  const handleFastForward = () => {
    wavesurfer.current.skipForward(10);
  };

  const handleRewind = () => {
    wavesurfer.current.skipBackward(10);
  };

  return {
    waveFormRef,
    isPlaying,
    handlePlayPause,
    handleRewind,
    handleFastForward,
    setUVolume,
  };
}

import { memo } from "react";
import Timer from "../Timer/Timer";
import style from "./AlbumArt.module.scss";

const AlbumArt = memo(
  ({
    albumCover,
    artist,
    trackTitle,
    album,
    isReady,
    currentTime,
    duration,
    isPlaying,
  }) => {
    const { album__cover, image, titles, container } = style;
    return (
      <section className={container}>
        <div className={album__cover}>
          <img alt="album cover" className={image} src={albumCover} />
        </div>
        <div className={titles}>
          <h5 datatoggle="tooltip" dataplacement="top" title={artist}>
            {artist}
          </h5>
          <h3 datatoggle="tooltip" dataplacement="top" title={trackTitle}>
            <strong>{trackTitle}</strong>
          </h3>

          <h4 datatoggle="tooltip" dataplacement="top" title={album}>
            {album}
          </h4>
          <Timer
            isReady={isReady}
            currentTime={currentTime}
            duration={duration}
            isPlaying={isPlaying}
          />
        </div>
      </section>
    );
  }
);

export default AlbumArt;

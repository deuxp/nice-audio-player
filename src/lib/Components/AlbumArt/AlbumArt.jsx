import { memo } from "react";
import style from "./AlbumArt.module.scss";

// driver code
const songTitle = "Title of Song and agin if i t";
const artistName = "artist";
const albumTitle = "album";

const AlbumArt = memo(({ img }) => {
  const { album, image, titles, container } = style;
  return (
    <section className={container}>
      <div className={album}>
        <img alt="album cover" className={image} src={img} />
      </div>
      <div className={titles}>
        <h5 datatoggle="tooltip" dataplacement="top" title={artistName}>
          {artistName}
        </h5>
        <h3 datatoggle="tooltip" dataplacement="top" title={songTitle}>
          <strong>{songTitle}</strong>
        </h3>

        <h4 datatoggle="tooltip" dataplacement="top" title={albumTitle}>
          {albumTitle}
        </h4>
      </div>
    </section>
  );
});

export default AlbumArt;

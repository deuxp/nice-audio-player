import { memo } from "react";
import style from "./AlbumArt.module.scss";

const AlbumArt = memo(({ img }) => {
  const { album, image } = style;
  console.log({ img });
  return (
    <>
      <div className={album}>
        <img className={image} src={img} />
      </div>
    </>
  );
});

export default AlbumArt;

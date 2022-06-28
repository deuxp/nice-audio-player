import style from "./AlbumArt.module.scss";

function AlbumArt() {
  const { album } = style;
  return (
    <div style={{ display: "flex" }}>
      <div className={album}>AlbumArt</div>
    </div>
  );
}

export default AlbumArt;

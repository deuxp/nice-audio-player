import Range from "../Range";
import TimbreSelector from "../TimbreSelector";

function Generator() {
  return (
    <div style={{ display: "flex" }}>
      <TimbreSelector />
      <Range>Gain</Range>
      <Range>Detune</Range>
    </div>
  );
}

export default Generator;

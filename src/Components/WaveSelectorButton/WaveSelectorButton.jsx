import style from "./WaveSelectorButton.module.scss";
const { button, button__selected } = style;

function WaveSelectorButton({ onClick, children, selected }) {
  const handleClick = e => {
    const wave = e.target.value;
    onClick(wave);
  };

  return (
    <button
      className={selected ? button__selected : button}
      onClick={e => handleClick(e)}
      value={children}
      type="button"
    >
      {children}
    </button>
  );
}

export default WaveSelectorButton;

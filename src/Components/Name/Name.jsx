import { useState } from "react";
import Letter from "../Letter";
import style from "./Name.module.scss";

function Name() {
  const { container, hidden__class, shown__class } = style;
  const [hidden, setHidden] = useState(false);

  const me = "Gottfried Kleinberger".split("");
  const renderName = me.map((char, i) => <Letter key={i}>{char}</Letter>);

  const handleClick = e => {
    setHidden(hidden => !hidden);
  };

  return (
    <>
      <div className={`${container} ${hidden ? hidden__class : shown__class}`}>
        {renderName}
      </div>
    </>
  );
}

export default Name;

import { useState } from "react";
import WavePlayer from "../WavePlayer";
import Recorder from "../Recorder";
import Generator from "../Generator";
import style from "./TabSection.module.scss";

import Tabs from "../Tabs";
const { tabs } = style;

function TabSection({ track }) {
  const [activeTab, setActiveTab] = useState("player");

  const handleClick = tab => {
    console.log("click: ", tab);
    setActiveTab(tab);
  };

  return (
    <div className={tabs}>
      <Tabs setActiveTab={handleClick} activeTab={activeTab} />
      {activeTab === "recorder" && <Recorder />}
      {activeTab === "player" && <WavePlayer url={track} />}
      {activeTab === "generator" && <Generator />}
    </div>
  );
}

export default TabSection;

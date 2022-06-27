import React from "react";
import style from "./Tabs.module.scss";
const { tab, tabs, tab__selected } = style;

function Tabs({ setActiveTab, activeTab }) {
  return (
    <div className={tabs}>
      <span>
        <div
          onClick={() => setActiveTab("profile")}
          className={activeTab === "profile" ? tab__selected : tab}
        >
          Profile
        </div>
      </span>
      <span>
        <div
          onClick={() => setActiveTab("generator")}
          className={activeTab === "generator" ? tab__selected : tab}
        >
          Generator
        </div>
      </span>
      <span>
        <div
          onClick={() => setActiveTab("player")}
          className={activeTab === "player" ? tab__selected : tab}
        >
          Player
        </div>
      </span>
      <span>
        <div
          onClick={() => setActiveTab("recorder")}
          className={activeTab === "recorder" ? tab__selected : tab}
        >
          Recorder
        </div>
      </span>
    </div>
  );
}

export default Tabs;

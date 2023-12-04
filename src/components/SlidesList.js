import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import React, { useContext } from "react";
import { SliderContext } from "../App";

import "./slidesList.css";

export default function SlidesList({ setSlide }) {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      <div style={{ flex: "1 0 100%", position: "relative" }}>
        <FirstPage key={1} setSlide={setSlide} />
      </div>
      <div style={{ flex: "1 0 100%", position: "relative" }}>
        <SecondPage key={2} />
      </div>
      <div style={{ flex: "1 0 100%", position: "relative" }}>
        <ThirdPage key={3} />
      </div>
    </div>
  );
}

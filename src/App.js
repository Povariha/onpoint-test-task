import SlidesList from "./components/SlidesList";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import React, { useState, createContext } from "react";

import "./App.css";

export const SliderContext = createContext();

const App = function () {
  const items = [1, 2, 3];
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setSlide(slideNumber);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{ changeSlide, slidesCount: 3, slideNumber: slide, items }}
      >
        <NavBar setSlide={setSlide} />
        <SlidesList setSlide={setSlide} />
        <Footer />
      </SliderContext.Provider>
    </div>
  );
};

export default App;

import { useContext } from "react";
import "./page2.css";
import { SliderContext } from "../App";

const PageTwoPics = () => {

  const { slideNumber } = useContext(SliderContext)
  return (
    <div style={{ position: "relative" }}>
      <img className={slideNumber === 1 ? "p2p1 anim" : "p2p1"} />
      <img className={slideNumber === 1 ? "p2p2 anim" : "p2p2"} alt="p2p2" />
      <img className={slideNumber === 1 ? "p2p3 anim" : "p2p3"} alt="p2p3" />
      <img className={slideNumber === 1 ? "p2p4 anim" : "p2p4"} alt="p2p4" />
      <img className={slideNumber === 1 ? "p2p5 anim" : "p2p5"} alt="p2p5" />
    </div>
  );
};

export default PageTwoPics;

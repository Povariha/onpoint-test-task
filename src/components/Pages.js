import React from "react";

import "./pages.css";
import btnL from "../img/pagination/btnL.png";
import btnR from "../img/pagination/btnR.png";
import pageActive from "../img/pagination/pageActive.png";
import pageInActive from "../img/pagination/pageInActive.png";

const Pages = ({ page, setPage }) => {
  return (
    <React.Fragment>
      <div className={page === 1 ? "page active" : "page"}>
        <b id="num">01</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <b id="num">02</b>
        <p>Faucibus pulvinar elementum integer enim</p>
        <b id="num">03</b>
        <p>Faucibus pulvinar elementum integer enim</p>
      </div>
      <div className={page === 2 ? "page active" : "page"}>
        <b id="num">04</b>
        <p>Mi bibendum neque egestas congue quisque egestas diam</p>
        <b id="num">05</b>
        <p>Venenatis lectus magna fringilla urna</p>
        <b id="num">06</b>
        <p>Venenatis lectus magna fringilla urna</p>
      </div>
      <div className="pagination">
        <img
          src={btnL}
          alt="btnL"
          style={{ width: 9, height: 15.5 }}
          onClick={() => setPage(1)}
        />
        <img src={pageActive} alt="page1" style={{ width: 10, height: 10 }} />
        <img
          src={page === 2 ? pageActive : pageInActive}
          alt="page2"
          style={{ width: 10, height: 10 }}
        />
        <img
          src={btnR}
          alt="btnR"
          style={{ width: 9, height: 15.5 }}
          onClick={() => setPage(2)}
        />
      </div>
    </React.Fragment>
  );
};

export default Pages;

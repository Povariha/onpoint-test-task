import PageThreePics from "../components/PageThreePics";
import ModalWindow from "../components/ModalWindow";
import Pages from "../components/Pages";
import { useState } from "react";

import "./thirdPage.css";
import btn from "../img/thirdPagePics/btn.png";

const ThirdPage = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <div className="third-main">
      <div className="third-wrapper">
        <PageThreePics />
        <p className="top-text1">КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
        <p className="top-text2">
          BREND<b id="bold3">XY</b>
        </p>
        <div className="first-section">
          Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum
          lorem sed risus ultricies
        </div>
        <div className="second-section-top">A arcu cursus vitae</div>
        <img
          className="more-info-butt"
          alt="infoButton"
          src={btn}
          onClick={() => setShow(true)}
        />
        <ModalWindow show={show}>
          <div className="modal-text">
            <p className="modal-text-top">ПРЕИМУЩЕСТВА</p>
            <img
              className="close-btn"
              alt="closeBtn"
              onClick={() => setShow(false)}
            />
            <Pages page={page} setPage={setPage} />
          </div>
        </ModalWindow>
      </div>
    </div>
  );
};

export default ThirdPage;

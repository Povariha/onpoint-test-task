import PageOnePics from "../components/PageOnePics"

import "./firstPage.css";
import butt from "../img/firstPagePics/btn.png";
;

const FirstPage = ({ setSlide }) => {
  return (
    <div className="first-main">
      <PageOnePics />
      <div className="intro-container">
        <div className="first-page-container">
          <p className="hi">ПРИВЕТ,</p>
          <p id="not-bold">
            ЭТО <b id="bold">НЕ</b> КОММЕРЧЕСКОЕ ЗАДАНИЕ{" "}
            <img src={butt} alt="butt1page" onClick={() => setSlide(1)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

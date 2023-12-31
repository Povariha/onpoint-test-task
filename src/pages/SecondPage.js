import PageTwoPics from "../components/PageTwoPics.js";

import "./secondPage.css";
import btn from "../img/secondPagePics/btn.png";

const SecondPage = () => {
  return (
    <div className="second-main">
      <PageTwoPics />
      <div className="second-page-block">
        <p id="smallText">
          ТЕКСТ <br />
          СООБЩЕНИЯ
        </p>
        <div className="second-page-text-block">
          <div className="text-wrapper">
            <div className="second-page-text">
              <div className="text1">
                <b id="bold2">Lorem ipsum dolor sit amet</b>, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Duis ut diam quam nulla. Mauris in aliquam
                sem fringilla ut morbi tincidunt. Vitae aliquet nec ullamcorper
                sit amet risus nullam eget felis. Nulla pharetra diam sit amet
                nisl. Eget nulla facilisi etiam dignissim diam quis enim
                lobortis. Est sit amet facilisis magna. Neque laoreet
                suspendisse interdum consectetur libero id. Nec ullamcorper sit
                amet risus nullam eget felis eget. Mollis aliquam ut porttitor
                leo a diam sollicitudin tempor id. Euismod quis viverra nibh
                cras pulvinar mattis nunc. Massa massa ultricies mi quis. Sit
                amet massa vitae tortor condimentum lacinia. Et malesuada fames
                ac turpis egestas integer eget. Elementum pulvinar etiam non
                quam lacus suspendisse faucibus interdum posuere.
                <p />
                <br />
                Amet justo donec enim diam vulputate ut pharetra sit. Risus
                ultricies tristique nulla aliquet enim tortor at auctor. Velit
                sed ullamcorper morbi tincidunt ornare massa. Quis hendrerit
                dolor magna eget est lorem ipsum. Etiam dignissim diam quis
                enim. Gravida neque convallis a cras. Ut enim blandit volutpat
                maecenas volutpat. Mauris sit amet massa vitae tortor
                condimentum lacinia quis vel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;

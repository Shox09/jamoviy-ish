import React from "react";
import "./Home.css";
import Work from "../components/Work";
import Ochistit from "../components/Ochistit";

export default function Home() {
  return (
    <div className="main">
      <div>
        <Work />

        <Ochistit />

        {/* <div className="Marka">
          <div className="line3"></div>
          <h1>COБCTВУННЫЕ TОPГOВЫE MAPКИ</h1>
          <div className="AG-TECH-AP">
            <div className="AG-TECH">
              <img src="Vector (22).png" alt="" />
              <div className="h3-p">
                <div className="h3">Автохимия AG-Tech</div>
                <p>
                  Для современного мира разбавленное изрядной долей эмпатии,
                  рациональное мышление создаёт предпосылки для поставленных
                  обществом задач.
                </p>
              </div>
            </div>

            <div className="AP">
              <img src="" alt="" />
              <div className="h3-p">
                <h3>Автохимия AP</h3>
                <p>
                  Для современного мира разбавленное изрядной долей эмпатии,
                  рациональное мышление создаёт предпосылки для поставленных
                  обществом задач.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

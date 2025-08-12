import React from "react";
import "./Work.css";

export default function Work() {
  return (
    <div className="container">
      <div className="hr1"></div>

      <div className="h2">
        <h2>Cхема Pаботы</h2>
      </div>

      <div className="number">
        <h1>01</h1>
        <div className="line"></div>
        <h1>02</h1>
        <div className="line"></div>
        <h1>03</h1>
        <div className="line"></div>
        <h1>04</h1>
        <div className="line"></div>
      </div>

      <div className="sxema-rabota">
        <div className="o1">
          <div className="strong-p">
            <strong>Знакомство</strong>
            <p>
              Безусловно, сплочённость команды профессионалов позволяет оценить
              значение форм воздействия.
            </p>
          </div>
          <div className="zayavka">
            <div className="z"></div>
            <a href="">Оставить заявку</a>
          </div>
        </div>
        <div className="o2">
          <div className="strong-p">
            <strong>Заключение договора</strong>
            <p>Лишь интерактивные прототипы призваны к ответу.</p>
          </div>
        </div>
        <div className="o3">
          <div className="strong-p">
            <strong>Производство</strong>
            <p>
              А также стремящиеся вытеснить традиционное производство,
              <br />
              нанотехнологии функционально разнесены на независимые элементы.
            </p>
          </div>
        </div>
        <div className="o4">
          <div className="strong-p">
            <strong>Доставка</strong>
            <p>
              В частности, экономическая повестка сегодняшнего дня говорит о
              возможностях приоритизации разума над эмоциями.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

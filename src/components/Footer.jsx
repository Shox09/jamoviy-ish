import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <img src="logo.png" alt="" />
          <h1>+7 (499) 686-10-14</h1>
          <div className="location">
            <img src="mark.png" alt="" />
            <p>г. Мосвка, Холодильный пер. 4к1с8</p>
          </div>

          <div className="post">
            <img src="mail (1).png" alt="" />
            <p>a.dragunov@tdaliance.ru</p>
          </div>

          <div className="instagram">
            <img src="inst.png" alt="" />
            <img src="vk.png" alt="" />
          </div>
        </div>

        <div className="text">
          <div className="information">
            <div className="text1">
              <h3>Контрактное производство</h3>
              <h4>Автохимияобильная химия</h4>
              <h4>Бытовая химия</h4>
              <h4>Дезинфицирующие средства</h4>
            </div>

            <div className="text1">
              <h4>Пищевые аэрозоли</h4>
              <h4>Косметическая продукция</h4>
              <h4>Краски аэрозольные</h4>
            </div>

            <div className="text1">
              <strong>Собственные марки</strong>
              <h4>Автохимия AG-Tech</h4>
              <h4>Автохимия AP</h4>
            </div>

            <div className="text2">
              <h4>О компании</h4>
              <h4>Новости</h4>
              <h4>Контакты</h4>
            </div>
          </div>
        </div>

          <div className="hr"></div>

        <div className="finish">
          <div className="p">
            <div className="flex">
              <p>© 2022 «Aliance Production». Все права защищены.</p>
              <p>Политики конфиденциальности</p>
            </div>
            <div className="ruso">
              <p>Сделано в</p>
              <img src="Group 48 (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

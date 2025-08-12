import React from 'react'
import { NavLink } from 'react-router';
import './Header.css'

export default function Header() {
  return (
    <div className="flex-container">
      <div className="container">
        <header>
          <div className="header">
            <div className="left">
              <img src="logo.png" alt="" />
            </div>

            <div className="center">
              <NavLink to={"/main"}>
                <p>Main</p>
              </NavLink>
              <NavLink to={"/about"}>
                <p>About</p>
              </NavLink>
              <NavLink to={"/contact_product"}>
                <p>Contact_product</p>
              </NavLink>
              <NavLink to={"/product_avtohim"}>
                <p>product_avtohim</p>
              </NavLink>
              <NavLink to={"/product_ag-tech"}>
                <p>product_ag-tech</p>
              </NavLink>
              <NavLink to={"/contact"}>
                <p>contact</p>
              </NavLink>
            </div>

            <div className="right">
              <button>Получить консультацию</button>
            </div>
          </div>
        </header>

        <div className="h1">
          <h1>
            Комплексное обеспечение товарами <br />
            и расходными материалами бизнеса
          </h1>
        </div>

        <div className="text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            minus esse illo, <br /> suscipit facilis dolor nisi, cupiditate,
            aperiam consequuntur quisquam <br /> nobis nesciunt accusamus quis
            minima dicta unde sunt ea consequatur.
          </p>
        </div>

        <div className="button">
          <button>Подробнее о компании</button>
        </div>

        <div className="box">
          <div className="boxs">
            <img src="time.png" alt="" />
            <p>
              Непрерывная работа <br /> c 2017 года
            </p>
          </div>

          <div className="boxs">
            <img src="file.png" alt="" />
            <p>
              Вся продукция <br /> сертифицирована
            </p>
          </div>

          <div className="boxs">
            <img src="builder.png" alt="" />
            <p>
              Контроль качества <br /> на всех этапах
            </p>
          </div>

          <div className="boxs">
            <img src="car.png" alt="" />
            <p>
              Возможны поставки <br /> по всей России
            </p>
          </div>

          <div className="boxs">
            <img src="Frame 37.png  " alt="" />
            <p>Оперативное <br /> производство</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../styles/Header.scss";
import { Search, User, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top ">
        <div className="header-top_inner container">
          <div className="header-nav">
            <ul className="header-nav_list">
              <li className="header-nav_item">
                <NavLink to="/" className="header-nav_link">
                  Главная
                </NavLink>
              </li>
              <li className="header-nav_item">
                <NavLink to="/delivery" className="header-nav_link">
                  Доставка и оплата
                </NavLink>
              </li>
              <li className="header-nav_item">
                <NavLink to="/advice" className="header-nav_link">
                  Советы флориста
                </NavLink>
              </li>
              <li className="header-nav_item">
                <NavLink to="/contact" className="header-nav_link">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="header-time">Доставка с 9:00 до 21:00</div>
          <div className="header-phone">
            <ul className="header-phone_list">
              <li className="header-phone_item">
                <a href="tel:+74822609960" className="header-phone_link">
                  +74822609960
                </a>
              </li>
              <li className="header-phone_item">
                <a href="tel:+79632209960" className="header-phone_link">
                  +79632209960
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-main ">
        <div className="header-main_inner container">
          <div className="header-logo">Вальс Цветов</div>
          <div className="header-help">
            <div className="header-help_user">
              <User />
            </div>
            <div className="header-help_cart">
              <ShoppingCart />
              <span>0 руб</span>
            </div>
          </div>
          <div className="header-search">
            <input
              type="text"
              className="header-search_input"
              placeholder="Поиск"
            />
            <button className="btn header-search_btn">
              <Search />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

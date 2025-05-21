import "../styles/header.css";

import logo from "../assets/logo.svg";
import langSelector from "../assets/lang-selector.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={logo}></img>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#" className="nav-item">
                Для бизнеса
              </a>
            </li>

            <li>
              <div className="language-selector">
                <img src={langSelector} alt="Русский флаг" className="flag" />
              </div>
            </li>

            <li>
              <a href="#" className="register-btn">
                Регистрация
              </a>
            </li>

            <li>
              <a href="#" className="login">
                Вход
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

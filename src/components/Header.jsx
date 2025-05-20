import "../styles/header.css";

import logo from "../ui/logo.svg";
import langSelector from "../ui/lang-selector.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={logo}></img>

        <nav className="nav">
          <a href="#" className="nav-item">
            Для бизнеса
          </a>

          <div className="language-selector">
            <img src={langSelector} alt="Русский флаг" className="flag" />
          </div>

          <a href="#" className="register-btn">
            Регистрация
          </a>
          <a href="#" className="login">
            Вход
          </a>
        </nav>
      </div>
    </header>
  );
}

import "../styles/card.css";

import cardLogo from "../ui/card-logo.jpg";
import example from "../ui/example.png";
import iconTrash from "../ui/trash.svg";
import iconLocation from "../ui/location.svg";
import iconPhone from "../ui/phone.svg";
import iconClock from "../ui/clock.svg";

export default function Card({ address, phone }) {
  return (
    <div className="card">
      <div className="card-main">
        <img src={cardLogo} alt="Логотип" className="card-logo" />

        <div className="card-info">
          <h2 className="card-title">Burut Barbershop</h2>

          <div className="card-info-item vertical">
            <div className="card-info-row">
              <img src={iconLocation} alt="" className="icon" />
              <span className="address">{address}</span>
            </div>
            <a href="#" className="map-link">
              Посмотреть на карте
            </a>
          </div>

          <div className="card-info-item">
            <img src={iconPhone} alt="" className="icon" />
            <span>{phone}</span>
          </div>

          <div className="card-info-item">
            <img src={iconClock} alt="" className="icon" />
            <span>Пн–Сб (09:00–20:00)</span>
          </div>
        </div>

        <div className="card-gallery">
          <h3 className="gallery-title">Примеры работ</h3>

          <div className="gallery-images">
            <img src={example} alt="Пример работы" />
            <img src={example} alt="Пример работы" />

            <div className="more-photos">
              <img src={example} alt="Пример работы" />
              <div className="overlay">Ещё 33+</div>
            </div>
          </div>
        </div>
      </div>

      <hr className="card-divider" />

      <div className="card-footer">
        <button className="favorite-btn">
          <img src={iconTrash} alt="Удалить" className="icon" />
          Удалить из избранных
        </button>

        <button className="book-btn">Записаться</button>
      </div>
    </div>
  );
}

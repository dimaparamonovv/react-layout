import "../styles/mainContent.css";

export default function HeaderRow() {
  return (
    <div className="header-row">
      <h1 className="page-title">Салоны красоты</h1>

      <div className="tabs">
        <button className="tab active">Салоны</button>
        <button className="tab">Мастера</button>
        <button className="tab">Фрилансеры</button>
      </div>
    </div>
  );
}

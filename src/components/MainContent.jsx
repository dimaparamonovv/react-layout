import "../styles/mainContent.css";

import HeaderRow from "./HeaderRow";
import CardList from "./CardList";

export default function MainContent({ places }) {
  return (
    <main className="main">
      <div className="container">
        <HeaderRow />
        <CardList places={places} />
      </div>
    </main>
  );
}

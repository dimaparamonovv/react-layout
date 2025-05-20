import "./styles/global.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import places from "./data/places";

export default function App() {
  return (
    <div>
      <Header />
      <MainContent places={places} />
    </div>
  );
}

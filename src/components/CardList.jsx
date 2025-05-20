import Card from "./Card";

export default function CardList({ places }) {
  return (
    <section className="cards-section">
      {places.map((place) => (
        <Card key={place.id} address={place.address} phone={place.phone} />
      ))}
    </section>
  );
}

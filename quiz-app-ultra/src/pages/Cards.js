import Card from "../components/card/Card";
import "./Cards.css";

function Cards({ cards }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          question={card.question}
          answer={card.answer}
          tags={card.tags}
          bookmarked={card.bookmarked}
        />
      ))}
    </div>
  );
}

export default Cards;
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const initialCards = [
  {
    id: "b5db267b-3275-4a86-a9f4-e7f927d33ed0",
    question: "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    bookmarked: true,
  },
  {
    id: "8f76114b-c30c-411d-ad38-77ce69079eef",
    question: " Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["danielradcliffe", "hewhomustnotbenamed", "hogwarts"],
    bookmarked: false,
  },
  {
    id: "8c74c87b-2a68-4aa1-9733-4c6917dfdf88",
    question: "Which former US president was nicknamed Teddy after he refused to shoot a defenseless black bear?",
    answer: "Theodore Roosevelt",
    tags: ["usa", "president", "teddybear"],
    bookmarked: true,
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [cards, setCards] = useState(initialCards);

  function appendCard(question, answer, tag) {
    setCards((cards) => [
      ...cards,
      {
        question,
        answer,
        tags: [tag],
        id: Math.random().toString(36).substring(2),
        bookmarked: false,
      },
    ]);

    setPage("home");
  }

  function deleteCard(cardId) {
    setCards((cards) => cards.filter(({ id }) => cardId !== id));
  }

  function toggleBookmark(cardId) {
    setCards((cards) =>
      cards.map((card) => ({
        ...card,
        bookmarked: cardId === card.id ? !card.bookmarked : card.bookmarked,
      }))
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {page === "home" && (
          <Cards
            cards={cards}
            onDelete={deleteCard}
            onBookmark={toggleBookmark}
          />
        )}
        {page === "bookmark" && (
          <Cards
            cards={cards.filter((card) => card.bookmarked)}
            onDelete={deleteCard}
            onBookmark={toggleBookmark}
          />
        )}
        {page === "create" && <Create onCreate={appendCard} />}
        {page === "profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
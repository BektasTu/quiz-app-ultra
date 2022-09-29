import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const cards = [
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
    question: "Which former US president was nicknamed &quot;Teddy&quot; after he refused to shoot a defenseless black bear?",
    answer: "Theodore Roosevelt",
    tags: ["usa", "president", "teddybear"],
    bookmarked: true,
  },
];

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {page === "home" && <Cards cards={cards} />}
        {page === "bookmark" && (
          <Cards cards={cards.filter((card) => card.bookmarked)} />
        )}
        {page === "create" && <Create />}
        {page === "profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
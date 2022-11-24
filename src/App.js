import WarningSign from "./components/WarningSign";
import "./App.css";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";
import "bootstrap/dist/css/bootstrap.min.css";
import books from "./components/fantasy.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <WarningSign atext="Alert-san have mercy"></WarningSign>
      <MyBadge badgetext="9" badgecolor="danger"></MyBadge>
      <BookList class="books" books={books}></BookList>
    </Container>
  );
}

export default App;

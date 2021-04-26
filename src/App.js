import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LibroItem from "./components/LibroItem";
import LibrosList from "./components/LibrosList";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LibrosList} />
      <Route path="/:id" component={LibroItem} />
    </Router>
  );
}

export default App;

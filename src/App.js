import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

import LibroItem from "./components/LibroItem";
import LibrosList from "./components/LibrosList";
import CategoriaList from "./components/CategoriaList";
import CategoriaItem from "./components/CategoriaItem";

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Route exact path="/" component={LibrosList} />
          <Route exact path="/libro/:id" component={LibroItem} />
          <Route exact path="/categoria" component={CategoriaList} />
          <Route exact path="/categoria/:id" component={CategoriaItem} />
        </Router>
      </DataProvider>
    </>
  );
}

export default App;

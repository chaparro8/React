import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

import LibroItem from "./components/LibroItem";
import LibrosList from "./components/LibrosList";

function App() {
  return (
    <DataProvider>
      <Router>
        <Route exact path="/" component={LibrosList} />
        <Route path="/:id" component={LibroItem} />
      </Router>
    </DataProvider>
  );
}

export default App;

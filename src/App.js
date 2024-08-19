import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  useParams,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import DucanId from "./pages/DucanId";

function App() {
  const params = useParams();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main children={<HomePage />} />} />
          <Route
            path={"duncan/:id"}
            element={<Main children={<DucanId />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

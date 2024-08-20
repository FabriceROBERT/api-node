import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import HomePage from "./pages/HomePage";
import DucanId from "./pages/DucanId";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main children={<HomePage />} />} />
          <Route path="/register" element={<Main children={<Register />} />} />
          <Route path="/login" element={<Main children={<Login />} />} />
          {/* <Route path="/sign-up" element={<Main children={<Register />} />} /> */}
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

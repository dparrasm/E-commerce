import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Sign up</Link>
        <Link to="/signin">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

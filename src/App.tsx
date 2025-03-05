import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import "./App.css";
import Products from "./pages/products/Products";

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
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;

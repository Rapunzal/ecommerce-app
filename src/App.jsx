import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Contact } from "./components/Contact.jsx";
import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

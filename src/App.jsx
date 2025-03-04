import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Contact } from "./components/Contact.jsx";
import { About } from "./components/About.jsx";
import { Footer } from "./components/Footer.jsx";
import { Cart } from "./components/Cart.jsx";
import { Search } from "./components/Search.jsx";
import { WishList } from "./components/WishList.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logo" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/:input" element={<Search />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

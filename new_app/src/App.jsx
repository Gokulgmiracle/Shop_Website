import { useState } from "react";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import "./Sytle.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header title={"Tailor Shop"} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

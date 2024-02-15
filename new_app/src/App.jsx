import { useState } from "react";
import React from "react";
import { Footer,Hero,Content} from "./sections";
import "./index.css"
import Navbar from "./components/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);


/*The Hero and other sections are in the webpage only, I gave position absolute for header,so they are behind the header*/

  return (
    <main className="App">

    <Navbar />
    
    <section>
      <Hero />
    </section>

    <section>
      <Content />
    </section>

    <section>
      <Footer />
    </section>
    </main>
  );
}
export default App;

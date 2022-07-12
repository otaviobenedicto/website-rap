import "./App.css"
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Creative from "./components/Creative";
import Educations from "./components/Educations";
import Work from "./components/Work";
import Portifolio from "./components/Portifolio"
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Creative/>
      <Educations/>
      <Work/>
      <Portifolio/>
      <Contact/>
    </>
  );
}

export default App;

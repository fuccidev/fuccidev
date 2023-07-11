import './App.scss';
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Biography from "./components/biography/biography";
import Portfolio from "./components/portfolio/portfolio";
import Resources from "./components/resources/resources";
import Contact from "./components/contact/contact";
import {useState} from "react";
import Menu from "./components/menu/menu"

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Biography/>
        <Portfolio/>
        <Resources/>
        <Contact/>
      </div>
    </div>
  );
}


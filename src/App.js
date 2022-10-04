import './components/NavBar.css';
import NavBar from "./components/NavBar";
import './components/FrontPage.css';
import FrontPage from "./components/FrontPage.js";
import Stars from './components/Stars';
import Experience from "./pages/Experiences.js";
import './pages/Experiences.css';
import Projects from "./pages/Projects.js";
import './pages/Projects.css';
import Contact from "./pages/Contact.js";
import './pages/Contact.css';



function App() {
  return (
    <div class='url'>
      <Stars />
      <NavBar />
      <FrontPage />
      <div id='experience'>
      <Experience />
      </div>
      <div >
      <Projects />
      </div>
      <div><Contact /></div>
    </div>
  )
  
}

export default App;


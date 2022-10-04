import './components/NavBar.css';
import NavBar from "./components/NavBar";
import './components/FrontPage.css';
import FrontPage from "./components/FrontPage.js";
import Stars from './components/Stars';
import Experience from "./pages/Experiences.js";
import './pages/Experiences.css';



function App() {
  return (
    <div class='url'>
      <Stars />
      <NavBar />
      <FrontPage />
      <div id='experience'>
      <Experience />
      </div>
    </div>
  )
  
}

export default App;


import './components/NavBar.css';
import NavBar from "./components/NavBar";
import './components/FrontPage.css';
import FrontPage from "./components/FrontPage.js";
import Stars from './components/Stars';



function App() {
  return (
    <div class='url'>
      <Stars />
      <NavBar />
      <FrontPage />
    </div>
  )
  
}

export default App;


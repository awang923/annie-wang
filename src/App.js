import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Parallax } from 'react-parallax';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
// import digitalBackground from './assets/img/digitalBackground.png';
import portfolio_bg from './assets/img/portfolio_bg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redfin from './pages/Redfin';
import { Footer } from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <div className="background">
        <NavBar />
        <div className='content'>
          <Banner />
        </div>
        <div>
          <Projects />
          <AboutMe />
          <Footer />
        </div>
      </div>  
    </div> 
    
  );
}

export default App;

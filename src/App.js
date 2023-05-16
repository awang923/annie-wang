import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Parallax } from 'react-parallax';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import digitalBackground from './assets/img/digitalBackground.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redfin from './pages/Redfin';
import { Footer } from './components/Footer';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Parallax strength={400} bgImage={digitalBackground}>
        <div className='content'>
          <Banner />
        </div>
      </Parallax>

      <div className='content'>
          <Projects />
          <AboutMe />
          <Footer />
      </div>

      
    </div> 
    
  );
}

export default App;

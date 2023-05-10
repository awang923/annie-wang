import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Parallax } from 'react-parallax';
import { Projects } from './components/Projects';
import { Contacts } from './components/Contacts';
import digitalBackground from './assets/img/digitalBackground.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redfin from './Redfin';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Parallax strength={300} bgImage={digitalBackground}>
        <div className='content'>
          <Banner />
        </div>
      </Parallax>

      <div className='content'>
          <Projects />
      </div>

      {/* <div className='content'>
        <Contacts />
      </div> */}
    </div> 
    
  );
}

export default App;

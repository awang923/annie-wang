import '../App.css';
import { DiscordNavBar } from './DiscordNavBar';
import { DiscordBanner } from './DiscordBanner';
import { Parallax } from 'react-parallax';
import { Projects } from '../components/Projects';
import { AboutMe } from '../components/AboutMe';
import digitalBackground from '../assets/img/digitalBackground.png';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Redfin from './pages/Redfin';
import { Footer } from '../components/Footer';

export const Discord = () => {
  
  return (
    <div className="App">
      <DiscordNavBar />
      <Parallax strength={400} bgImage={digitalBackground}>
        <div className='content'>
          <DiscordBanner />
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

import './style/Mindtapp.css';
import { Container, Col, Row } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import FadeInOut from '../components/FadeInOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import mindtapp2 from '../assets/img/mindtapp2.png';
import mindtappBanner from '../assets/img/mindtappBanner.png';
import { MindtappTechFlow } from './components/MindtappTechFlow';
import mindCubeDemo from '../assets/img/mindCubeDemo.mp4';
import ReactPlayer from 'react-player';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';


function Mindtapp() {
  return (
    <div className="mindtapp" id="top">
      <ScrollToTopOnMount />
      <NavBar />
      <div className='project-header'>
        <img src={mindtappBanner} />
      </div>
     
      <div className='project-content'>
      <h1>Software Engineer @ MINDTAPP</h1>
        <FadeInOut>
          <Container className='project-overview'>
            <h3>WHAT IS MINDTAPP?</h3>
            <p>MINDTAPP (Mind Training Application) is a mobile app designed to 
              enhance individuals' mental well-being through mindset training. The 
              app provides features like a social media-like feed, progress tracking, 
              and mind training games to engage users and help them improve their 
              mindset over time.
            </p>
          </Container>
        </FadeInOut>
        
        <FadeInOut threshold={0.1}>
          <Container className='tech-details'>
            <h3>TECH DETAILS</h3>
            <MindtappTechFlow />
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='demos'>
            <h3>DEMOS</h3>
            <div className='vid-player'>
              <ReactPlayer 
                url={mindCubeDemo} 
                controls={true} 
                onPlay={() => console.log('video is playing')} 
                onPause={() => console.log('video is paused')}
                onError={(e) => console.log('Error:', e)} 
                width='80%'
              />
            </div>
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='outcome'>
            <button className="vvd" onClick={()=> console.log('website')}>
                <a href='https://www.mindtapp.com/'>
                  Go To Company Website 
                  <BsArrowRightShort size='30' className='right-arrow' />
                </a>
                
            </button>
          </Container>
        </FadeInOut>
      </div>
      <div className='project-nav'>
        <h4 className='back'>
          <BsArrowLeftShort />
          <Link to="/scoop">Back</Link>
        </h4>   
      </div>
      <Footer />      
    </div> 
  );
}

export default Mindtapp;

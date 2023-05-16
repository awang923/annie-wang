import './style/Mindtapp.css';
import { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Container, Col, Row } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import FadeInOut from '../components/FadeInOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import mindtapp2 from '../assets/img/mindtapp2.png';
import mindtappLogo from '../assets/img/mindtappLogo.png';
import { MindtappTechFlow } from './components/MindtappTechFlow';
import mindCubeDemo from '../assets/img/mindCubeDemo.mp4';
import ReactPlayer from 'react-player';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';


function Mindtapp() {
  return (
    <div className="mindtapp" id="mindtapp">
      <NavBar />
      <Container className='project-header'>
        <Row>
            <Col className='header-textbox'>
                <img className='logo' src={mindtappLogo} alt='logo' />
                {/* <h2>Map View in mindtapp Builder Tools</h2> */}
                <p>
                  Frontend Developer | June 2021 - November 2021
                </p>
            </Col>
            <Col>
                <img className='phone-img' src={mindtapp2} alt="img" />
            </Col>
        </Row>
      </Container>
     
      <div className='project-content'>
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
      <Footer />      
    </div> 
  );
}

export default Mindtapp;

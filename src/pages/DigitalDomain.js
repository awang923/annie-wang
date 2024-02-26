import './style/DigitalDomain.css';
import ReactPlayer from 'react-player';
import { Container, Col, Row } from 'react-bootstrap';
import { DigitalDomainTechFlow } from './components/DigitalDomainTechFlow';
import { NavBar } from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ddLogo from '../assets/img/ddLogo.png';
import diskard from '../assets/img/diskard.png';
import dd_demo1 from '../assets/img/dd_demo1.mp4';
import dd_demo2 from '../assets/img/dd_demo2.mp4';
import ddFinal from '../assets/img/ddFinal.png';
import FadeInOut from '../components/FadeInOut';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

function DigitalDomain() {
  return (
    <div className="digitaldomain" id="top">
      <ScrollToTopOnMount />
      <NavBar />
      <Container className='project-header'>
        <Row>
          <Col className='header-textbox'>
            <img className='logo' src={ddLogo} alt='logo' />
              <h2>Digital Domain</h2>
              <p>
                Software Engineering Intern | October 2023 - March 2024
              </p>
          </Col>
          <Col>
            <img src={diskard} alt="img" />
          </Col>
        </Row>
      </Container>
     
      <div className='project-content'>
        <FadeInOut>
          <Container className='project-overview'>
            <h3>WHAT IS DISKARD</h3>
              <p>
                Diskard is an internal web application accessible to both 
                artists and managers, simplifying disk space management for VFX teams. 
                Artists have intuitive tools to browse, organize, and modify the state 
                of their published assets and work directories. They can track asset 
                activity seamlessly and visualize data relocation through interactive 
                graphs for comprehensive understanding. Managers benefit from clear 
                insights into active shows, enabling collaboration and data-driven 
                decision-making regarding storage usage and trends.
              </p>
          </Container>
        </FadeInOut>
        
        <FadeInOut threshold={0.1}>
          <Container className='tech-details'>
            <h3>MY CONTRIBUTION TO DISKARD</h3>
            <i className='side-notes'>
              ** Core: The Core page consists of sections to track and manage artist’s 
              publishes and work directory in different shows. **
            </i>
            <DigitalDomainTechFlow />
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='demos'>
            <h3>DEMOS</h3>
            <ul>
              <li>
                <p>Core - Explore assets in context & Enhanced asset search</p>
                <div className='vid-player'>
                  <ReactPlayer 
                      url={dd_demo1} 
                      controls={true} 
                      onPlay={() => console.log('video is playing')} 
                      onPause={() => console.log('video is paused')}
                      onError={(e) => console.log('Error:', e)}
                      width='100%'
                      height='550px'
                  />
                </div>
              </li>
              <li>
                <p>Core - Tree view</p>
                <div className='vid-player'>
                  <ReactPlayer 
                      url={dd_demo2} 
                      controls={true} 
                      onPlay={() => console.log('video is playing')} 
                      onPause={() => console.log('video is paused')}
                      onError={(e) => console.log('Error:', e)}
                      width='100%'
                      height='550px'
                  />
                </div>
              </li>
            </ul>
            
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='outcome'>
            <h3>FINAL & TAKEAWAY</h3>
            <Row>
              <Col>
              <p>
                During my internship at Digital Domain, I'm most proud of taking ownership of features 
                and mastering containerization with Docker. Working on Diskard honed my backend skills 
                in Python and broadened my understanding of frontend development, particularly with ReactJS 
                and diverse libraries. A pivotal moment was successfully deploying Diskard upgrades twice, 
                resulting in positive feedback from the VFX and Core Engineering team. This experience not 
                only reinforced my passion for web development but also afforded me valuable insights into 
                VFX pipelines.
              </p>
              </Col>
              <Col>
                <img className='outcome-img' src={ddFinal} alt='final' />
              </Col>
            </Row>
            
          </Container>
        </FadeInOut>
      </div> 
      <div className='project-nav'>
        <h4 className='next'>
          <Link to="/redfin">Next</Link>
          <BsArrowRightShort />
        </h4>        
      </div>
      <Footer />    
    </div> 
  );
}

export default DigitalDomain;

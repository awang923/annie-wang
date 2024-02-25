import './style/DigitalDomain.css';
import ReactPlayer from 'react-player';
import { Container, Col, Row } from 'react-bootstrap';
import { DigitalDomainTechFlow } from './components/DigitalDomainTechFlow';
import { NavBar } from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ddLogo from '../assets/img/ddLogo.png';
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
            <img />
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
            <div className='vid-player'>
              
            </div>
            
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='outcome'>
            <h3>FINAL & TAKEAWAY</h3>
            <Row>
              <Col>
              <p>
                
              </p>
              </Col>
              <Col>
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

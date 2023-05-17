import './style/Scoop.css';
import { Container, Col, Row } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import FadeInOut from '../components/FadeInOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import scoop2 from '../assets/img/scoop2.png';
import scoopLogo from '../assets/img/scoopLogo.png';
import { ScoopTechFlow } from './components/ScoopTechFlow';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';


function Scoop() {
  return (
    <div className="scoop" id="top">
      <ScrollToTopOnMount />
      <NavBar />
      <Container className='project-header'>
        <Row>
            <Col className='header-textbox'>
                <img className='logo' src={scoopLogo} alt='logo' />
                {/* <h2>Scoop</h2> */}
                <p>
                  Software Developer | December 2021 - June 2022
                </p>
            </Col>
            <Col>
                <img className='phone-img' src={scoop2} alt="img" />
            </Col>
        </Row>
      </Container>
     
      <div className='project-content'>
        <FadeInOut>
          <Container className='project-overview'>
            <h3>WHAT IS SCOOP?</h3>
            <p>Scoop is a mobile application designed to help college students 
              explore the surrounding community. It's a third party platform 
              that connects college students or locals with visitors who want 
              to have a unique and personalized tour around the campus and 
              nearby area. The app allows students or locals to sign up to be 
              tour guides and set up their own tours, sharing their knowledge 
              and insights with visitors. On the other hand visitors can book 
              tours through the app, choosing from a variety of tour options 
              and dates based on the preferences. 
            </p>
          </Container>
        </FadeInOut>
        
        <FadeInOut threshold={.1}>
          <Container className='tech-details'>
            <h3>MY CONTRIBUTION TO SCOOP</h3>
            <ScoopTechFlow />
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='final'>
            <h3>FINAL & TAKEAWAY</h3>
            <p>
              It was a very enjoyable experience working on this project as it strengthened 
              my passion for frontend development. I found it rewarding to see the immediate 
              visual results of what I built. The designer of our team is currently working 
              on conducting additional user tests and providing complimentary tours of the 
              campus to new students in order to enhance our product.
            </p>
          </Container>
        </FadeInOut>
       
      </div>    
      <div className='next-project'>
        <h4>
          <Link to='/mindtapp'>Next Project</Link> 
          <BsArrowRightShort />
        </h4>
      </div>
      <Footer />   
    </div> 
  );
}

export default Scoop;

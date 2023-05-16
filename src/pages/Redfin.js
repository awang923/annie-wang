import './style/Redfin.css';
import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { RedfinTechFlow } from './components/RedfinTechFlow';
import { Container, Col, Row, Fade } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import redfin from '../assets/img/redfin.png';
import redfinLogo from '../assets/img/redfinLogo.png';
import FadeInOut from '../components/FadeInOut';
import redfinDemo from '../assets/img/redfinDemo.mp4'
import redfinOutcome from '../assets/img/redfinOutcome.jpg';
import redfinOverview1 from '../assets/img/redfinOverview1.png';
import redfinOverview2 from '../assets/img/redfinOverview2.png';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';



const steps = [
  {
    label: 'Product Spec',
    description: `I began the project by thoroughly reviewing the product specifications 
    in order to gain a clear understanding of which features needed to be implemented. 
    I then met with the product manager to determine the minimum viable product (MVP) and 
    set priorities for the development process.`,
  },
  {
    label: 'Technical Spec',
    description:
      `After reviewing the product specifications, I proceeded to the technical specifications 
      phase. During this stage, I thoroughly examined the code base and meticulously documented 
      the step-by-step process required to implement each feature. This involved investing 
      significant time in exploring various implementation options and determining the optimal 
      approach. Additionally, I conducted research on leveraging the built-in GoogleMapView component, 
      as it offered potential cost savings compared to obtaining a new API key. This comprehensive 
      technical analysis allowed me to make informed decisions and lay a solid foundation for the 
      project\'s development.`,
  },
  {
    label: 'Jira Tickets',
    description: `Once the technical spec was approved by the team, I created Jira tickets by breaking 
    down each feature into smaller tasks and assigning them with story points. This helped me to 
    manage the project effectively and ensured that everything was completed within the given 
    timeline. By breaking down the tasks into smaller chunks, it made it easier to focus on each 
    feature individually and make sure it was implemented correctly before moving on to the next one.`,
  },
  {
    label: 'Implementation',
    description: `As the Map View project was primarily a frontend development project, I worked 
    extensively with ReactJS to create new pages and components. Additionally, I utilized GraphQL 
    to request data from the database. To retrieve the geographic information of Redfin home 
    renovations, we leveraged the Google Maps API and Geocoder. These tools helped me create a 
    responsive and user-friendly interface for the home services market managers, superintendents, 
    and procurement coordinators to visualize jobs and retailers in a specific area.`,
  },
  {
    label: 'Bug Bash',
    description: `After completing the project, I organized a bug bash session with the team to 
    identify any critical bugs so I can fix any issues that were found before deploying the project.`,
  },
];

function Redfin() {
  return (
    <div className="redfin" id="redfin">
      <NavBar />
      <Container className='project-header'>
        <Row>
            <Col className='header-textbox'>
                <img className='logo' src={redfinLogo} alt='logo' />
                <h2>Map View in Redfin Builder Tools</h2>
                <p>
                  Software Developer | June 2022 - September 2022
                </p>
            </Col>
            <Col>
                <img src={redfin} alt="img" />
            </Col>
        </Row>
      </Container>
     
      <div className='project-content'>
        <FadeInOut>
          <Container className='project-overview'>
            <h3>WHY MAP VIEW?</h3>
            <Row>
              <Col>
                <p>Map View in Builder Tools introduces a new map view feature for renovation 
                  jobs in the Redfin internal website Builder Tools. Prior to my internship, 
                  Builder Tools only displayed renovation jobs in a list view, which was deemed 
                  inefficient since it required switching between multiple tabs and devices to view 
                  job details and their corresponding locations.
                </p>
              </Col>
              <Col>
                <img src={redfinOverview1} alt='redfin-1' />
              </Col>
            </Row>
            </Container>
          </FadeInOut>
          <FadeInOut>
            <Container>
            <Row>
              <Col>
                <img src={redfinOverview2} alt='redfin-2' />
              </Col>
              <Col>
                <p>
                  The new map view enables home services market managers, superintendents, and 
                  procurement coordinators to visualize jobs and retailers in a specific area. 
                  Users can filter jobs based on certain criteria and access job details directly from 
                  the map view. Each map pin highlights the corresponding job in the list view when 
                  hovered over and displays a tooltip containing the general information of the job 
                  when clicked on.
                </p>
              </Col>
            </Row>
          </Container>
        </FadeInOut>
        
        <FadeInOut threshold={0.1}>
          <Container className='tech-details'>
            <h3>HOW WAS THE PROJECT BUILT?</h3>
            <RedfinTechFlow />
          </Container>
        </FadeInOut>
        
        <FadeInOut>
          <Container className='demos'>
            <h3>DEMOS</h3>
            <div className='vid-player'>
              <ReactPlayer 
                url={redfinDemo} 
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
            <h3>FINAL & TAKEAWAY</h3>
            <Row>
              <Col>
              <p>
                During the 13-week internship, I completed the Map View project in 
                Builder Tools. I presented the project to the company after hosting a 
                bug bash session with the team, and the map view was officially 
                deployed two weeks after my internship ended. I also had the 
                opportunity to meet one of the primary users in Texas, which motivated 
                me and reinforced the impact of my work. This experience allowed me to 
                gain valuable knowledge and skills as a developer and learn how to 
                navigate the process of working on a major stack project from start to 
                finish.
              </p>
              </Col>
              <Col>
                <img className='outcome-img' src={redfinOutcome} alt='outcome' />
              </Col>
            </Row>
            
          </Container>
        </FadeInOut>
        
        
       
      </div> 
      <div className='next-project'>
        <h4><a href='/scoop'>Next Project</a> <BsArrowRightShort /></h4>
      </div>
      <Footer />    
    </div> 
  );
}

export default Redfin;

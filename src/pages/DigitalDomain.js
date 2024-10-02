import './style/DigitalDomain.css';
import ReactPlayer from 'react-player';
import { carouselItems, cronFeatures } from './components/constant';
import { Container, Col, Row, Fade } from 'react-bootstrap';
import ProcessCarousel from './components/ProcessCarousel';
import { NavBar } from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ddTreeview from '../assets/img/ddTreeview.png';
import ddBanner from '../assets/img/ddBanner.png';
import dd_demo1 from '../assets/img/dd_demo1.mp4';
import dd_demo2 from '../assets/img/dd_demo2.mp4';
import cronwebui from '../assets/img/cronwebui.png';
import FadeInOut from '../components/FadeInOut';
import { BsArrowRightShort } from 'react-icons/bs';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const searchFeatures = [
  {
    title: 'Feature 1: Quick Navigation',
    description: `This feature introduces a "shift+click" functionality to empower 
    users to navigate tree structures efficiently . Using a recursive algorithm to 
    traverse the tree, comparing leaf node footprints to identify the one with the 
    highest footprint regardless of its depth. This "highest footprint node" then becomes 
    the new current view, effectively jumping the user directly to their desired location.`,
  },
  {
    title: 'Feature 2: Date, Name and Size sorting',
    description: `This feature adds "creation date" to the sorting criteria alongside 
    "size" and "name," offering ascending or descending order options. The data model 
    is extended to incorporate the new attribute, and the sorting algorithm is adapted 
    to handle creation date comparisons efficiently.`,
  }
];

function DigitalDomain() {
  return (
    <div className="digitaldomain" id="top">
      <ScrollToTopOnMount />
      <NavBar />
      <div className="project-header">
        <img src={ddBanner} alt="Digital Domain Banner" />
      </div>

      <div className="project-content">
        <h1>Software Engineer @ Digital Domain - Diskard</h1>
        <FadeInOut>
          <h2>PROJECT #1 - CRON WEB UI</h2>
          <p>
          Cron Web UI is a user-friendly application designed to simplify the 
          management of scheduled cron jobs without the need for terminal commands. 
          Built from scratch, it allows users to easily create, edit, and delete 
          scheduled cron jobs directly through an intuitive interface. The 
          application fetches data from the AWX API but offers a streamlined 
          experience compared to the native AWX UI. Additionally, Cron Web UI 
          evenly distributes jobs across multiple hosts, optimizing 
          resource management for users. This project significantly enhances 
          efficiency in managing automated tasks for system administrators.
          </p>
          <img src={cronwebui} />

          <h3 style={{fontWeight: '500'}}>FEATURES</h3>
          <ProcessCarousel items={cronFeatures} />
        </FadeInOut>

        <FadeInOut>
          <h2>PROJECT #2 - DISKARD</h2>
          <p>
            Diskard is an internal web application for simplifying disk space management
            for VFX teams. It provides artists with intuitive tools to browse, organize,
            and modify the state of their published assets and work directories.
          </p>
          <h3 style={{fontWeight: '500'}}>FEATURES</h3>
          <ol>
            <li>
              <h3>Exploring Assets</h3>
              <ProcessCarousel items={carouselItems} />
            </li>
            <li>
              <h3>Enhancing Search</h3>
              <ol type="a">
                {searchFeatures.map((feature) => (
                  <li>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </li>
                ))}
              </ol>
            </li>
            <li>
              <h3>Introuducing Tree View</h3>
              <p style={{marginBottom: '20px'}}>
                This feature replaces the single-level selection with a dynamic, multi-level 
                tree view using D3.js Observable. Users can now visualize and navigate the entire asset 
                directory structure, expanding/collapsing branches and selecting assets for deletion 
                across multiple levels simultaneously. The view seamlessly updates via ReactJS hooks, 
                and users switch between list and tree view on the fly. Leverages D3.js's strengths in 
                visualizing hierarchical data and React's component-based architecture, this upgrade 
                delivers a performant and user-friendly experience. Notably, the tree view retains all 
                functionalities of the original list view, including multi-item selection and quick navigation.
              </p>
              <img src={ddTreeview} alt='tree-view' />
            </li>
            <li>
              <h3>Managing Active Shows</h3>
              <p>
                Previously, managing active shows required administrators to manually edit a YAML file 
                using terminal commands. This feature streamlines the process by displaying all active 
                shows directly within Diskard. Normal users can now view the active show list for better 
                transparency, and administrators can edit the active show list directly within the 
                application. The changes made to the list within Diskard automatically update the 
                relevant YAML file and install the changes. 
              </p>
            </li>
          </ol>
        </FadeInOut>

        <FadeInOut>
          <Container className='outcome'>
            <button className="vvd" onClick={()=> console.log('website')}>
                <a href='https://digitaldomain.com/'>
                  Go To Company Website 
                  <BsArrowRightShort size='30' className='right-arrow' />
                </a>
                
            </button>
          </Container>
        </FadeInOut>
      </div>

      <div className="project-nav">
        <h4 className="next">
          <Link to="/redfin">Next</Link>
          <BsArrowRightShort />
        </h4>
      </div>
      <Footer />
    </div>
  );
}

export default DigitalDomain;

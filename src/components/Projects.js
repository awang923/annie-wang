import { Link } from 'react-router-dom';
import { Container, Row, Col, Fade } from "react-bootstrap";
import redfin from '../assets/img/redfin.png';
import scoop from '../assets/img/scoop.png';
import mindtapp from '../assets/img/mindtapp.png';
import FadeInOut from "./FadeInOut";


export const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <Container>
                <FadeInOut>
                    <Row className='item'>
                        <Col xs={12} md={6} xl={7}>
                            <img src={redfin} alt="img" />
                        </Col>
                        <Col className='project-textbox' xs={12} md={6} xl={5}>
                            {/* <a href="/redfin">Map View in Redfin Builder Tools</a> */}
                            <Link to="/redfin">Map View in Redfin Builder Tools</Link>
                            <p>                            
                                The project utilizes <span>ReactJS</span> and <span>GraphQL</span> to introduce a map view feature in 
                                the desktop version of Builder Tools (BT), which aims to enhance the efficiency of the 
                                field team in locating renovation sites and planning commutes and procurement routes.
                            </p>
                        </Col>
                    </Row>
                </FadeInOut>

                <FadeInOut>
                    <Row className='phone'>
                        <Col className='project-textbox' xs={12} md={6} xl={5}>
                            <a href="">Scoop</a>
                            <p>
                                Scoop is a mobile app that assist university students in exploring the surrounding 
                                area by providing them with self-guided tours led by other students. The app is available on 
                                both Android and iOS and built using <span>React Native</span> and <span>Java</span>. 
                            </p>
                        </Col>
                        <Col  xs={12} md={6} xl={7}>
                                <img src={scoop} alt="img" />
                        </Col>
                    </Row>
                </FadeInOut>
                
                <FadeInOut>
                    <Row className='phone'>
                        <Col xs={12} md={6} xl={7}>
                            <img src={mindtapp} alt="img" />
                        </Col>
                        <Col className='project-textbox' xs={12} md={6} xl={5}>
                            <a href="#">MINDTAPP</a>
                            <p>
                            MINDTAPP (Mind Training Application) is a mobile application that enables you 
                            to tap into your fullest potential by providing mindset training. It is built
                            using <span>Dart</span> and <span>Java</span>.
                            </p>
                        </Col>
                    </Row>
                </FadeInOut>
            </Container>            
        </section>
    )
}






{/* <Row className='item'>
    <Col className='project-textbox' xs={12} md={6} xl={5}>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. 
        </p>
    </Col>
    <Col  xs={12} md={6} xl={7}>
        <img src={redfin} alt="img" />
    </Col>
</Row> */}
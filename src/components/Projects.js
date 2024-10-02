import { Link } from 'react-router-dom';
import { Container, Row, Col, Fade } from "react-bootstrap";
import { Paper } from '@mui/material';
import redfinLaptop from '../assets/img/redfinLaptop.png';
import scoopProject from '../assets/img/scoopProject.png';
import mindtappProject from '../assets/img/mindtappProject.png';
import ddLaptop1 from '../assets/img/ddLaptop1.png';
import FadeInOut from "./FadeInOut";
import { BsArrowRightShort } from 'react-icons/bs';


export const Projects = () => {
	return (
		<section className="projects" id="projects">
			<Container>
				<FadeInOut>
					<h2>- Some of my work -</h2>
					<Row className='item'>
						<Col xs={12} md={6} xl={7}>
						<Link to="/digitaldomain">
								<Paper className='img-paper'>
									<img src={ddLaptop1} alt="img" />
								</Paper>
						</Link>
						</Col>
						<Col className='project-textbox' xs={12} md={5} xl={4}>
							<Link to="/digitaldomain">Digital Domain</Link>
							<p>                            
								At Digital Domain, I was part of the core web development team that 
								utilizes <span>ReactJS</span> and <span>Python</span>. I worked on an application 
								accessible to both artists and managers in the VFX team for borwsing and managing disk space.
							</p>
							<div className="read-more">
								<Link to="/digitaldomain"><p>Read More</p></Link>
								<BsArrowRightShort className="arrow-icon" />
							</div>
						</Col>
					</Row>
				</FadeInOut>
				<FadeInOut>
					<Row className='item'>
						<Col xs={12} md={6} xl={7}>
							<Link to="/redfin">
								<Paper className='img-paper'>
									<img src={redfinLaptop} alt="img" />
								</Paper>
							</Link>
						</Col>
						<Col className='project-textbox' xs={12} md={5} xl={4}>
								{/* <a href="/redfin">Map View in Redfin Builder Tools</a> */}
							<Link to="/redfin">Redfin</Link>
							<p>                            
								The project I worked on in Redfin utilizes <span>ReactJS</span> and <span>GraphQL</span> to introduce a map view feature in 
								the desktop version of Builder Tools (BT), which aims to enhance the efficiency of the 
								field team in locating renovation sites and planning commutes and procurement routes.
							</p>
							<div className="read-more">
								<Link to="/redfin"><p>Read More</p> </Link>
								<BsArrowRightShort className="arrow-icon" />
							</div>
						</Col>
					</Row>
				</FadeInOut>

				<FadeInOut>
					<Row className='item'>
						<Col xs={12} md={6} xl={7}>
							<Link to="/scoop">
								<Paper className='img-paper'>
									<img src={scoopProject} alt="img" />
								</Paper>
							</Link>
						</Col>
						<Col className='project-textbox' xs={12} md={5} xl={4}>
							<Link to="/scoop">Scoop</Link>
							<p>
								Scoop is a mobile app that assist university students in exploring the surrounding 
								area by providing them with self-guided tours led by other students. The app is available on 
								both Android and iOS and built using <span>React Native</span> and <span>Java</span>. 
							</p>
							<div className="read-more">
								<Link to="/scoop"><p>Read More</p> </Link>
								<BsArrowRightShort className="arrow-icon" />
							</div>
						</Col>
					</Row>
				</FadeInOut>
				
				<FadeInOut>
						<Row className='item'>
							<Col xs={12} md={6} xl={7}>
								<Link to="/mindtapp">
									<Paper className='img-paper'>
										<img src={mindtappProject} alt="img" />
									</Paper>
								</Link>
							</Col>
							<Col className='project-textbox' xs={12} md={5} xl={4}>
								<Link to="/mindtapp">MINDTAPP</Link>
								<p>
								MINDTAPP (Mind Training Application) is a mobile application that enables you 
								to tap into your fullest potential by providing mindset training. It is built
								using <span>Dart</span> and <span>Java</span>.
								</p>
								<div className="read-more">
									<Link to="/mindtapp"><p>Read More</p> </Link>
									<BsArrowRightShort className="arrow-icon" />
								</div>
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
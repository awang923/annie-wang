import { Container, Row, Col } from "react-bootstrap";
import aboutMePic from '../assets/img/aboutMePic.jpg';
import FadeInOut from "./FadeInOut";

export const AboutMe = () => {
  return (
    <section className="about" id="about">
      <FadeInOut>
        <Container>
          <h2>About Me</h2>
          <Row>
            <Col xs={12} md={6} xl={7}>
              <p>
                Hi, nice to meet you! My name is Annie. I'm a software developer 
                who enjoys creating visual software to make a positive impact on 
                people's lives.
              </p>
              <br />
              <p>
                Born and raised in Southern California, I also spent a few years 
                living in Taiwan. On typical weekends, you'll find me in line for boba at 
                my favorite shop in town, then immersing myself in building new LEGO sets 
                or embarking on a small nature getaway to capture beautiful photographs.
              </p>
              <br />
              <p>
                Up until high school, I aspired to become a veterinarian, my favorites being 
                dogs and elephants. However, I realized that memorization wasn't my strength. 
                Instead, I discovered that my true passion lies in understanding 
                concepts and applying them to solve real-life problems. As a result, 
                I made a last-minute decision to change my major to computer science. 
                Since then, my enthusiasm for the field has only grown stronger, 
                and I'm constantly eager to expand my knowledge.
              </p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={aboutMePic} alt='about-me-pic' />
            </Col>
          </Row>
        </Container>
      </FadeInOut>
    </section>
  )
}
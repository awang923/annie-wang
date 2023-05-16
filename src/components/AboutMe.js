import { Container, Row, Col } from "react-bootstrap";
import aboutMePic from '../assets/img/aboutMePic.jpg';

export const AboutMe = () => {
    return (
        <section className="about" id="about">
            <Container>
                <h2>About Me</h2>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <p>
                            Hi, nice to meet you! My name is Annie. I'm a software developer 
                            who enjoys creating visual software to enhance people's lives.
                        </p>
                        <br />
                        <p>
                            I was born and raised in Southern California and also spent a few years 
                            living in Taiwan. On typical weekends, you'll find me going on a quick 
                            boba run to my favorite shop in town, and then I enjoy immersing myself 
                            in building new LEGO sets or embarking on a small getaway to nature to 
                            capture beautiful photographs.
                        </p>
                        <br />
                        <p>
                            Originally, I aspired to become a veterinarian due to my love for animals 
                            (dogs and elephants being my favorites). However, after taking a few 
                            physiology and anatomy classes, I realized that memorization wasn't 
                            my forte. I discovered that my true passion lies in understanding 
                            concepts and applying them to solve real-life problems. As a result, 
                            I made a last-minute decision to change my major to computer science. 
                            Since then, my enthusiasm for computer science has only grown stronger, 
                            and I'm constantly eager to expand my knowledge in this field.
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={aboutMePic} alt='about-me-pic' />
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}
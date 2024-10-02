import {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
// import profile from '../assets/img/profile.svg'
import me2 from '../assets/img/me2.png';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random()*100);
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    
    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let fullText = "software_developer";
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    }
    else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className='align-items-center'>
          <h1>
            Hello world! I'm Annie ◡̈  
          </h1>
        </Row>
        <Row className="image-row">
          <img src={me2} alt="header img" />
        </Row>
        <Row>
          <h3>A <span className="wrap">{text}</span></h3>
          <h3>who thrives to make designs come alive</h3>
        </Row>
      </Container>
    </section>
  )
} 
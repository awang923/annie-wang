import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import email from '../assets/img/email.png';

export const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = scrollTop + windowHeight;

        if (scrollPosition >= documentHeight - 300) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    return (
        <div>
            {showFooter && <footer className="footer">
                <Container>
                    <Row>
                        <h4>Let's connect!</h4>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/anniewang89/"><img src={linkedin} alt=""/></a>
                            <a href="https://github.com/awang923"><img src={github} alt=""/></a>
                            <a href="mailto:annie.wang89923@gmail.com"><img src={email} alt='' /></a>
                        </div>
                    </Row>
                </Container>
            </footer>}
        </div>
        
    );
}
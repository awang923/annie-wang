import '../components/style/NavBar.css';
import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import linkedin from '../assets/img/linkedin.png';
import { HashLink } from 'react-router-hash-link';

export const DiscordNavBar = () => {
    const [activeLink, setActiveLink] = useState('disc-home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand as={HashLink} to="#disc-home">
                    <img style={{width: '160%'}}src={logo} alt="Logo" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className="navbar-toggler-icon"></span> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav classname="ms-auto">
                        <Nav.Link 
                             as={HashLink}
                             smooth
                             to="#disc-home"
                             className={activeLink === 'disc-home' ? 'active navbar-link' : 'navbar-link'}
                             onClick={() => onUpdateActiveLink('disc-home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={HashLink}
                            to="#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            as={HashLink}
                            to="#about"  
                            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('about')}
                        >
                            About Me
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/anniewang89/"><img src={linkedin} alt=""/></a>
                            <a href="https://github.com/awang923"><img src={github} alt=""/></a>
                            <a href="mailto:annie.wang89923@gmail.com"><img src={email} alt='' /></a>
                        </div>
                        {/* <button className="vvd" onClick={()=> console.log('connect')}>
                            <span>Let's Connect</span>
                        </button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
import './style/NavBar.css';
import {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import github from '../assets/img/github.svg';
import email from '../assets/img/email.png';
import linkedin from '../assets/img/linkedin.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
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
                <Navbar.Brand href="/">
                    <img style={{width: '160%'}}src={logo} alt="Logo" />
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className="navbar-toggler-icon"></span> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav classname="ms-auto">
                        <Nav.Link 
                            href="/" 
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                                Home
                        </Nav.Link>
                        <Nav.Link 
                            href="/#projects" 
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link 
                            href="/#about" 
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
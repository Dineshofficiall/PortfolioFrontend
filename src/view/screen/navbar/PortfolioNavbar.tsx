// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Col, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { NavIcon } from '../../../Images/NavIcon'
const PortfolioNavbar:React.FC = () => {
    const icon = NavIcon();

    const [gitHubStatus, setGithubStates] = useState ("GitHub Profile");
    const githubRedirection = () => {
        setGithubStates("Redirecting . . . .");
        window.location.href = "https://github.com/Dineshofficiall";
    }
  return (
    <>
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container className='px-0 px-lg-5'>
                <Col className='col-md-3 ms-2 ms-lg-0 d-flex justify-content-start justify-content-md-center align-items-center'>
                    <Image style={{ width: '40px', marginRight: '.8rem' }} src={icon.seoLogo} alt='Logo' />
                    <Navbar.Brand>Portfolio</Navbar.Brand>
                </Col>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className='py-4 py-lg-0 ' id="responsive-navbar-nav">
                    <Nav className="col-lg-8 mb-4 mb-lg-0 d-flex justify-content-evenly align-items-center me-auto">
                        <ScrollLink
                            activeClass="active"
                            className="nav-link"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{cursor : "pointer"}}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            className="nav-link"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{cursor : "pointer"}}
                        >
                            Skills
                        </ScrollLink>
                        <ScrollLink
                            activeClass='active'
                            className='nav-link'
                            to='work'
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{cursor : "pointer"}}
                        >
                            Work
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            className="nav-link"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{cursor : "pointer"}}
                        >
                            Projects
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            className="nav-link"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            style={{cursor : "pointer"}}
                        >
                            Education
                        </ScrollLink>
                    </Nav>
                    <Nav className='col-lg-3'>
                        <Button variant="outline-secondary rounded-pill" onClick={()=> githubRedirection()}>{gitHubStatus}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default PortfolioNavbar;
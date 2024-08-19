// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar } from 'react-bootstrap';
import seoLogo from '/Project/PortfolioFrontend/Portfolio/src/assets/logo/seo.png';
import { Link as ScrollLink } from 'react-scroll';

function PortfolioNavbar() {
  return (
    <>
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Col className='col-md-3 d-flex justify-content-start justify-content-md-center align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image style={{ width: '40px', marginRight: '.8rem' }} src={seoLogo} alt='Logo' />
                    <Navbar.Brand>Portfolio</Navbar.Brand>
                </div>
                </Col>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse className='py-4 py-lg-0' id="responsive-navbar-nav">
                    <Nav className="col-lg-9 mb-4 mb-lg-0 d-flex justify-content-evenly align-items-center me-auto">
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
                    <Nav>
                        <Button variant="outline-secondary rounded-pill">GitHub Profile</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default PortfolioNavbar;

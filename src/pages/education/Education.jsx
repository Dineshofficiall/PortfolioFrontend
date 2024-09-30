// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import mmmIcon from '/Project/PortfolioFrontend/Portfolio/src/assets/education logo/mmm.png';
import amcIcon from '/Project/PortfolioFrontend/Portfolio/src/assets/education logo/amc.png';
import edexIcon from '/Project/PortfolioFrontend/Portfolio/src/assets/education logo/edex.jpg';

// CSS
import './education.css';

function Education() {
    return (
        <section id="education" className='my-5 py-5'>
            <Container className='col-12 col-md-10 col-lg-7'>
                <div className='text-center mb-5'>
                    <h1>Education</h1>
                    <article>My education has been a journey of self-discovery and growth. My educational details are as follows.</article>
                </div>
                <Row className='col-12 ms-0 ms-sm-2 contents'>
                    <aside className='content-inner-block'>
                        <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                            <div className='d-flex align-items-center'>
                                <Image src={edexIcon} width={45} className='me-3' alt='' />
                                <div>
                                    <h5 className='m-0'>Edex-Tech, TamilNadu</h5>
                                    <small className='m-0'>Full Stack WebDevelopment</small>
                                </div>
                            </div>
                            <div className='mt-3 mb-2'>
                                <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Oct 2023 - Apl 2024</em>
                            </div>
                            <article className='educationPassage'>At Edex Tech, I completed an eight-month full-stack development course, mastering technologies such as HTML, CSS, JavaScript, Bootstrap, ReactJS, Java, and SQL. This experience provided me with the practical skills needed for both front-end and back-end development, allowing me to create responsive web applications.</article>
                        </Col>
                        <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                            <div className='d-flex align-items-center'>
                                <Image src={amcIcon} width={45} className='me-3' alt='' />
                                <div>
                                    <h5 className='m-0'>The American College of Arts and Science, TamilNadu</h5>
                                    <small className='m-0'>Bachelor of Science - BSc, Computer Science</small>
                                </div>
                            </div>
                            <div className='mt-3 mb-2'>
                                <h6 className='m-0'>Grade: 7.1 CGPA</h6>
                                <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Jul 2019 - May 2022</em>
                            </div>
                            <article className='educationPassage'>At American College, I established a solid foundation in computer science, emphasizing programming, database management, and software development. Through various projects and coursework, I enhanced my problem-solving skills and gained a deeper understanding of modern technologies, equipping me with the knowledge to thrive in software development.</article>
                        </Col>
                        <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                            <div className='d-flex align-items-center'>
                                <Image src={mmmIcon} width={45} className='me-3' alt='' />
                                <div>
                                    <h5 className='m-0'>Madurai Meenakshi Matriculationn Hr, TamilNadu</h5>
                                    <small className='m-0'>12th grade</small>
                                </div>
                            </div>
                            <div className='mt-3 mb-2'>
                                <h6 className='m-0'>Grade: 50%</h6>
                                <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Mar 2018 - Apr 2019</em>
                            </div>
                            <article>Before advancing to higher education, I completed my 12th grade in the first group with a focus on Computer Science, earning 50% marks. Despite some health challenges, I gained a foundational understanding of computer science concepts, which fueled my passion for the field.</article>
                        </Col>
                    </aside>
                </Row>
            </Container>
        </section>
    );
}

export default Education;

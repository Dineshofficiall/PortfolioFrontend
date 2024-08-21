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
                <Row className='col-12 ms-2 contents'>
                    <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                        <div className='d-flex align-items-center'>
                            <Image src={amcIcon} width={45} className='me-3' alt='' />
                            <div>
                                <h5 className='m-0'>The American College of Arts and Science, TamilNadu</h5>
                                <p className='m-0'>Bachelor of Science - BSc, Computer Science</p>
                            </div>
                        </div>
                        <div className='mt-3 mb-2'>
                            <h6 className='m-0'>Grade: 7.1 CGPA</h6>
                            <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Jul 2019 - May 2022</em>
                        </div>
                        <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi neque nihil dignissimos magnam quo tempore ipsa quibusdam eos, error porro molestiae labore quae!</article>
                    </Col>
                    <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                        <div className='d-flex align-items-center'>
                            <Image src={edexIcon} width={45} className='me-3' alt='' />
                            <div>
                                <h5 className='m-0'>The American College of Arts and Science, TamilNadu</h5>
                                <p className='m-0'>Bachelor of Science - BSc, Computer Science</p>
                            </div>
                        </div>
                        <div className='mt-3 mb-2'>
                            <h6 className='m-0'>Grade: 7.1 CGPA</h6>
                            <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Jul 2019 - May 2022</em>
                        </div>
                        <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi neque nihil dignissimos magnam quo tempore ipsa quibusdam eos, error porro molestiae labore quae!</article>
                    </Col>
                    <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                        <div className='d-flex align-items-center'>
                            <Image src={mmmIcon} width={45} className='me-3' alt='' />
                            <div>
                                <h5 className='m-0'>The American College of Arts and Science, TamilNadu</h5>
                                <p className='m-0'>Bachelor of Science - BSc, Computer Science</p>
                            </div>
                        </div>
                        <div className='mt-3 mb-2'>
                            <h6 className='m-0'>Grade: 7.1 CGPA</h6>
                            <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Jul 2019 - May 2022</em>
                        </div>
                        <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi neque nihil dignissimos magnam quo tempore ipsa quibusdam eos, error porro molestiae labore quae!</article>
                    </Col>
                    <Col className='col-12 border rounded-4 p-3 mb-4 box'>
                        <div className='d-flex align-items-center'>
                            <Image src={mmmIcon} width={45} className='me-3' alt='' />
                            <div>
                                <h5 className='m-0'>The American College of Arts and Science, TamilNadu</h5>
                                <p className='m-0'>Bachelor of Science - BSc, Computer Science</p>
                            </div>
                        </div>
                        <div className='mt-3 mb-2'>
                            <h6 className='m-0'>Grade: 7.1 CGPA</h6>
                            <em style={{ fontSize: "12.3px", fontWeight: "lighter" }}>Jul 2019 - May 2022</em>
                        </div>
                        <article>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi neque nihil dignissimos magnam quo tempore ipsa quibusdam eos, error porro molestiae labore quae!</article>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Education;

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Profile from '/Project/PortfolioFrontend/Portfolio/src/assets/Profile/profile.jpg'
import "./about.css"

function About() {
    const [resumeStates, setResumeStatus] = useState("Check Resume");
    const resumeRedirection = () => {
        setResumeStatus("Redirecting . . . .")
        window.location.href = "https://drive.google.com/file/d/1Hpb8i2uFJswlSIsxAW3v8JS5F7nmwBaW/view?usp=sharing";
    }
    return (
        <>
            <section id="about">
                <Container className='my-3 py-3 my-lg-4 py-lg-2 px-lg-4'>
                    <Row className='d-md-flex justify-content-evenly'>
                        <Col className='order-1 order-md-0 col-12 col-md-6 col-lg-6 px-3 ps-md-5 pe-md-2 my-4 my-md-0 d-flex flex-column justify-content-evenly align-items-start'>
                            <div className='my-lg-4 name'>
                                <h1>Hi, I am</h1>
                                <h1>Dinesh Kumar</h1>
                            </div>
                            <h1 className='domain'>I am a fullstack developer</h1>
                            <div className='py-3 py-md-0 my-lg-2'>
                                <p className='header-passage'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores officia fugit maiores quo, praesentium non vero temporibus quaerat amet sit quia, facilis ducimus similique expedita cupiditate minus aspernatur blanditiis?</p>
                            </div>
                            <div className='Resume-sec'>
                                <Button variant="outline-secondary rounded-pill" onClick={()=>resumeRedirection()}>{resumeStates}</Button>
                            </div>
                        </Col>
                        <Col className='order-0 order-md-1 col-12 col-md-5 col-lg-4  pe-lg-4 py-lg-5 d-flex justify-content-center '>
                            <Image src={Profile} alt='' style={{width : "87%", height : "320px", objectFit : "cover", borderRadius : "56%"}} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About
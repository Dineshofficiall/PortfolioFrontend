// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button, Col, Container, Form, FormControl, Image, InputGroup } from 'react-bootstrap'

// image
import rocketIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/contact icon/rocket.png"

// css
import "./contact.css"

function Contact() {
    return (
        <>
            <section>
                <Container className='col-6 p-1 my-5'>
                    <div className="text-center mb-5">
                        <h1>Contact</h1>
                        <p>Feel free to reach out to me for any questions or Opportunities</p>
                    </div>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <div className='col-9 p-4 contact-block'>
                            <div className='mb-3 d-flex justify-content-start align-items-center'>
                                <h4 className='m-0 mx-2'>Email Me</h4>
                                <Image src={rocketIcon} width={40}/>
                            </div>
                            <InputGroup className="mb-3 input-group">
                                <FormControl
                                    className='Contact-Input-Groups rounded-4'
                                    placeholder="Your Email"
                                    aria-label="Email"
                                    type="email"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3 input-group">
                                <FormControl
                                    className='Contact-Input-Groups rounded-4'
                                    placeholder="Your Name"
                                    aria-label="Name"
                                    type="text"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3 input-group">
                                <FormControl
                                    className='Contact-Input-Groups rounded-4'
                                    placeholder="Subject"
                                    aria-label="Subject"
                                    type="text"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Form.Control 
                                    as="textarea" 
                                    aria-label="With textarea"
                                    className='Contact-Input-Groups rounded-4'
                                    placeholder="Message"
                                />
                            </InputGroup>
                            <div className='mt-4 Contact-btn text-center'>
                                <Button className="rounded-5">Send</Button>
                            </div>
                        </div>
                    </Col>
                </Container>
            </section>
        </>
    )
}

export default Contact
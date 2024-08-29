// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

// img
import reactIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/react-480.svg"
import htmlIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/html.svg"
import cssIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/css.svg"
import bootStrapIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/bootstrap.svg"
import jsIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/js.svg"
import reduxIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/redux.svg"
import javaIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/java.svg"
import springBootIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/springboot.svg"
import postgreSqlIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/postgresql.svg"
import postmanIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/postman.svg"
import gitIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/git.svg"
import gitHubIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/github.svg"
import vsCodeIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/vscode.svg"
import nodeJsIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/nodejs.svg"
import intellijIcon from "/Project/PortfolioFrontend/Portfolio/src/assets/Skills icons/intelli.svg"

// css
import './skills.css'

function Skills() {
    return (
        <>
            <section id="skills">
                <Container className='col-12 col-md-11 col-lg-8 my-5'>
                    <div className='text-center mb-5'>
                        <h1>Skills</h1>
                        <article>Here are some of my skills on which I have been working on for the past 9months</article>
                    </div>
                    <Row xs={1} sm={2} md={3} lg={3} className="d-flex justify-content-evenly align-items-center gap-5 p-3 p-sm-0">
                        <Col className='skillSet-parent mx-2'>
                            <h4 className='text-center mt-4 mb-0'>Frontend</h4>
                            <div className='skillSet'>
                                <div className='icons-container'>
                                    <Image src={reactIcon} width={23} alt='' />
                                    <li>React js</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={reduxIcon} width={23} alt='' />
                                    <li>Redux</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={htmlIcon} width={23} alt='' />
                                    <li>Html</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={bootStrapIcon} width={23} alt='' />
                                    <li>Bootstrap</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={cssIcon} width={23} alt='' />
                                    <li>Css</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={jsIcon} width={23} alt='' />
                                    <li>Java Script</li>
                                </div>
                            </div>
                        </Col>
                        <Col className='skillSet-parent'>
                            <h4 className='text-center mt-4 mb-0'>Backend</h4>
                            <div className="skillSet">
                                <div className='icons-container'>
                                    <Image src={javaIcon} width={23} alt='' />
                                    <li>Java</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={springBootIcon} width={23} alt='' />
                                    <li>SpringBoot</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={nodeJsIcon} width={23} alt='' />
                                    <li>NodeJs</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={postgreSqlIcon} width={23} alt='' />
                                    <li>PostgreSql</li>
                                </div>
                            </div>
                        </Col>
                        <Col className='skillSet-parent'>
                            <h4 className='text-center mt-4 mb-0'>Others</h4>
                            <div className="skillSet">
                                <div className='icons-container'>
                                    <Image src={gitIcon} width={23} alt='' />
                                    <li>Git</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={gitHubIcon} width={23} alt='' />
                                    <li>GitHub</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={intellijIcon} width={23} alt='' />
                                    <li>Intellij</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={vsCodeIcon} width={23} alt='' />
                                    <li>Vs Code</li>
                                </div>
                                <div className='icons-container'>
                                    <Image src={postmanIcon} width={23} alt='' />
                                    <li>Postman</li>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Skills
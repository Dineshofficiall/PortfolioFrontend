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
            <section id="skills" className='my-4 py-4 my-xl-5 py-xl-5'>
                <Container>
                    <div className='text-center mb-4'>
                        <h1>Skills</h1>
                        <article>Here are some of my skills on which I have been working on for the past 9months</article>
                    </div>
                    <Row className='d-flex justify-content-center align-content-between align-items-center row-gap-5 px-3 px-md-0 gap-md-4 gap-lg-5 p-md-5'>
                        <Col className='col-12 col-md-5 col-lg-4 py-4 py-md-3 py-lg-5 align-content-center skillSet'>
                            <h3 className='text-center mb-4'>Frontend</h3>
                            <main className='col-12 d-flex justify-content-evenly align-items-center flex-wrap p-2'>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-2'>
                                    <Image src={reactIcon} width={23} alt='' />
                                    <h5 className='m-0'>React js</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={reduxIcon} width={23} alt='' />
                                    <h5 className='m-0'>Redux</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={htmlIcon} width={23} alt='' />
                                    <h5 className='m-0'>Html</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={bootStrapIcon} width={23} alt='' />
                                    <h5 className='m-0'>Bootstrap</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={cssIcon} width={23} alt='' />
                                    <h5 className='m-0'>Css</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={jsIcon} width={23} alt='' />
                                    <h5 className='m-0'>Java Script</h5>
                                </div>
                            </main>
                        </Col>
                        <Col className='col-12 col-md-5 col-lg-4 py-4 py-md-3 py-lg-5 align-content-center skillSet'>
                            <h3 className='text-center mb-4'>Backend</h3>
                            <main className='col-12 d-flex justify-content-evenly align-items-center flex-wrap p-2'>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-2'>
                                    <Image src={javaIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>Java</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={springBootIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>SpringBoot</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={nodeJsIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>NodeJs</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={postgreSqlIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>PostgreSql</h5>
                                </div>
                            </main>
                        </Col>
                        <Col className='col-12 col-md-5 col-lg-4 py-4 py-md-3 py-lg-5 align-content-center skillSet'>
                            <h3 className='text-center mb-4'>Others</h3>
                            <main className='col-12 d-flex justify-content-evenly align-items-center flex-wrap p-2'>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-2'>
                                    <Image src={gitIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>Git</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={gitHubIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>GitHub</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={intellijIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>Intellij</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={vsCodeIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>Vs Code</h5>
                                </div>
                                <div className='border-1 border rounded-pill d-flex align-items-center m-2 py-2 px-3'>
                                    <Image src={postmanIcon} width={23} alt='' />
                                    <h5 className='m-0 ms-1'>Postman</h5>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Skills
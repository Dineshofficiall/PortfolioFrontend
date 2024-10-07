// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
// css
import './skills.css'
import { SkillsComponent } from '../../components/SkillsComponent'

const SkillsScreen: React.FC = () => {
    return (
        <>
            <section id="skills">
                <Container className='col-12 col-md-11 col-lg-8 my-5'>
                    <div className='text-center mb-5'>
                        <h1>Skills</h1>
                        <article>Here are some of my skills on which I have been working on for the past 9months</article>
                    </div>
                    <SkillsComponent />
                </Container>
            </section>
        </>
    )
}

export default SkillsScreen